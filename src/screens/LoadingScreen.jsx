import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import styled from 'styled-components/native';

export const LoadingScreen = () => (
  <Container>
    <ActivityIndicator size="large" />
  </Container>
);

const Container = styled(View)`
  flex: 1;
  justify-content: center;
`;
