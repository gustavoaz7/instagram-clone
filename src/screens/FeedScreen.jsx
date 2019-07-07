import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import axios from 'axios';
import { RECENT_MEDIA_URL } from '../constants';

import { FeedItem } from '../components/FeedItem';
import { Loading } from '../components/Loading';

const keyExtractor = item => `feed-item-${item.id}`;

// eslint-disable-next-line
const renderItem = ({ item }) => <FeedItem {...item} />;

export const FeedScreen = props => {
  const [recentMedia, setRecentMedia] = useState(null);
  const [loading, setLoading] = useState(true);

  const getRecentMedia = async () => {
    try {
      const { data } = await axios.get(RECENT_MEDIA_URL);
      setRecentMedia(data.data);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      // TODO: Hnadle error case
      console.warn('!!getRecentMedia error: ', e);
    }
  };

  // useEffect(() => {
  //   getRecentMedia();
  // }, []);

  if (loading) {
    return <Loading />;
  }
  if (!recentMedia) {
    return null;
  }

  return <FlatList keyExtractor={keyExtractor} data={recentMedia} renderItem={renderItem} />;
};
