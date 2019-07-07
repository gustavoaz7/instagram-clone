import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { userType, captionType, likesType } from '../types';

const ICON_SIZE = 26;

export const FeedItemData = ({ user, caption, likes }) => {
  const likesText = `${likes.count} like${likes.count > 1 ? 's' : ''}`;
  const captionText = (caption || {}).text;
  return (
    <Container>
      <Row>
        <Row>
          <Icon size={ICON_SIZE} name="heart" />
          <Icon size={ICON_SIZE} name="message-circle" />
          <Icon size={ICON_SIZE} name="send" />
        </Row>
        <Icon size={ICON_SIZE} name="bookmark" />
      </Row>
      {!!likes.count && <Likes>{likesText}</Likes>}
      {!!captionText && (
        <Text>
          <Username>{`${user.username} `}</Username>
          {captionText}
        </Text>
      )}
    </Container>
  );
};

FeedItemData.propTypes = {
  user: userType.isRequired,
  caption: captionType,
  likes: likesType.isRequired,
};

const Container = styled(View)`
  padding: 12px;
`;

const Row = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Icon = styled(Feather)`
  margin-right: 10px;
`;

const Semibold = styled(Text)`
  font-weight: 600;
`;
const Username = styled(Semibold)``;
const Likes = styled(Semibold)``;
