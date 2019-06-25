import React, { Fragment } from 'react';
import { Image } from 'react-native';
import { feedItemMock } from '../mocks/feedItemMock';
import { FeedItemHeader as Header } from './FeedItemHeader';
import { FeedItemData as PostData } from './FeedItemData';

export const FeedItem = () => {
  const { username, image, description } = feedItemMock;
  return (
    <Fragment>
      <Header image={{ uri: image }} username={username} />
      <Image
        resizeMode="cover"
        style={{
          backgroundColor: '#D8D8D8',
          width: '100%',
          height: 400,
        }}
        source={{ uri: image }}
      />
      <PostData username={username} description={description} />
    </Fragment>
  );
};
