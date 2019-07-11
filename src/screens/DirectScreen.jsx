import React, { Fragment } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export function DirectScreen() {
  return (
    <View>
      <Text>DirectScreen</Text>
    </View>
  );
}

export function createDirectScreenHeaderRight() {
  return (
    <Row>
      <Feather name="video" size={24} />
      <Space />
      <Space />
      <Feather name="edit" size={24} />
      <Space />
    </Row>
  );
}

export function createDirectScreenHeaderLeft() {
  return (
    <Fragment>
      <Space />
      <Feather name="arrow-left" size={24} />
    </Fragment>
  );
}

const Row = styled(View)`
  flex-direction: row;
`;

const Space = styled(View)`
  width: 10px;
`;
