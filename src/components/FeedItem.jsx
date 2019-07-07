import React, { Fragment } from 'react';
import { Image } from 'react-native';
import { FeedItemHeader as Header } from './FeedItemHeader';
import { FeedItemData as PostData } from './FeedItemData';
import { userType, imageType, captionType, likesType } from '../types';

export const FeedItem = ({ user, images, caption, likes }) => {
  return (
    <Fragment>
      <Header user={user} />
      <Image
        resizeMode="cover"
        style={{
          backgroundColor: '#D8D8D8',
          width: '100%',
          height: 400,
        }}
        source={{ uri: images.standard_resolution.url }}
      />
      <PostData user={user} caption={caption} likes={likes} />
    </Fragment>
  );
};

FeedItem.propTypes = {
  user: userType.isRequired,
  images: imageType.isRequired,
  caption: captionType,
  likes: likesType.isRequired,
};
