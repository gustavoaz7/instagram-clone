import React, { Fragment, useState, useEffect, useCallback } from 'react';
import { FlatList, View, Image } from 'react-native';
import axios from 'axios';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RECENT_MEDIA_URL } from '../constants';
import instagramLogo from '../../assets/logo.png';

import { FeedItem } from '../components/FeedItem';
import { Loading } from '../components/Loading';
import { StoryHeadersList } from '../components/StoryHeadersList';

const keyExtractor = item => `feed-item-${item.id}`;

// eslint-disable-next-line
const renderItem = ({ item }) => <FeedItem {...item} />;

export const FeedScreen = props => {
  const [recentMedia, setRecentMedia] = useState(null);
  const [loading, setLoading] = useState(true);

  const getRecentMedia = useCallback(async () => {
    try {
      const { data } = await axios.get(RECENT_MEDIA_URL);
      setRecentMedia(data.data);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      // TODO: Hnadle error case
      console.warn('!!getRecentMedia error: ', e);
    }
  });

  useEffect(() => {
    getRecentMedia();
  }, []);

  if (loading) {
    return <Loading />;
  }
  if (!recentMedia) {
    return null;
  }

  const { user } = recentMedia[0];

  return (
    <Fragment>
      <StoryHeadersList user={user} />
      <FlatList keyExtractor={keyExtractor} data={recentMedia} renderItem={renderItem} />
    </Fragment>
  );
};

export function createFeedScreenHeaderLeft() {
  return (
    <HeaderLeft>
      <Feather name="instagram" size={24} />
      <Space />
      <Image source={instagramLogo} />
    </HeaderLeft>
  );
}

export function createFeedScreenHeaderRight() {
  return (
    <HeaderRight>
      <Feather name="tv" size={24} />
      <Space />
      <Feather name="send" size={24} />
    </HeaderRight>
  );
}

const HeaderLeft = styled(View)`
  flex-direction: row;
  margin-left: 10px;
`;

const HeaderRight = styled(View)`
  flex-direction: row;
  margin-right: 10px;
`;

const Space = styled(View)`
  width: 10px;
`;
