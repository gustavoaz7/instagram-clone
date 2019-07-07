import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import ParsedText from 'react-native-parsed-text';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { userType, captionType, likesType, tagsType } from '../types';
import { ALERT_MESSAGE } from '../constants';

const ICON_SIZE = 26;

const styles = StyleSheet.create({
  tag: {
    color: '#003569',
  },
});

const handleTagPress = hashtag => {
  Alert.alert(`Search for ${hashtag}`, ALERT_MESSAGE, [{ text: 'OK' }]);
};

export const FeedItemData = ({ user, caption, likes, tags }) => {
  const likesText = `${likes.count} like${likes.count > 1 ? 's' : ''}`;
  const captionText = (caption || {}).text;
  const parseRules = tags.map(tag => ({
    pattern: new RegExp(`#${tag}`, 'g'),
    style: styles.tag,
    onPress: handleTagPress,
  }));
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
          <ParsedText parse={parseRules}>{captionText}</ParsedText>
        </Text>
      )}
    </Container>
  );
};

FeedItemData.propTypes = {
  user: userType.isRequired,
  caption: captionType,
  likes: likesType.isRequired,
  tags: tagsType.isRequired,
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
