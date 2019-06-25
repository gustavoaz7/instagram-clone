import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import propTypes from 'prop-types';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

const AVATAR_SIZE = 36;

export const FeedItemHeader = ({ username, image }) => (
  <Container>
    <Row>
      <Avatar resizeMode="cover" source={image} />
      <Username>{username}</Username>
    </Row>
    <Feather name="more-horizontal" size={26} />
  </Container>
);

FeedItemHeader.propTypes = {
  username: propTypes.string.isRequired,
  image: propTypes.shape({
    uri: propTypes.string.isRequired,
  }).isRequired,
};

const Row = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled(Row)`
  padding: 12px;
`;

const Avatar = styled(Image)`
  background-color: #d8d8d8;
  border-width: ${StyleSheet.hairlineWidth};
  border-color: #979797;
  border-radius: ${AVATAR_SIZE / 2};
  width: ${AVATAR_SIZE};
  height: ${AVATAR_SIZE};
  margin-right: 12px;
`;

const Username = styled(Text)`
  font-weight: 600;
`;
