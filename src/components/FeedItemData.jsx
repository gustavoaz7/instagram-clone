import React from 'react';
import { View, Text } from 'react-native';
import propTypes from 'prop-types';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

const ICON_SIZE = 26;

export const FeedItemData = ({ username, description }) => (
  <Container>
    <Row>
      <Row>
        <Icon size={ICON_SIZE} name="heart" />
        <Icon size={ICON_SIZE} name="message-circle" />
        <Icon size={ICON_SIZE} name="send" />
      </Row>
      <Icon size={ICON_SIZE} name="bookmark" />
    </Row>
    <Username>{username}</Username>
    <Description>{description}</Description>
  </Container>
);

FeedItemData.propTypes = {
  username: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
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

const Username = styled(Text)`
  font-weight: 600;
`;

const Description = styled(Text)`
  color: #666;
`;
