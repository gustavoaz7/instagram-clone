import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import propType from 'prop-types';
import { userType, storiesType } from '../types';
import { StoryHeaderImage } from './StoryHeaderImage';

export const StoryHeader = ({ self, user, variant, stories, ...props }) => {
  const username = self ? 'Your story' : user.username;
  return (
    <Container {...props}>
      <StoryHeaderImage self={self} variant={variant} user={user} />
      {variant === 'story' && <Username numberOfLines={1}>{username}</Username>}
    </Container>
  );
};

StoryHeader.propTypes = {
  self: propType.bool,
  user: userType.isRequired,
  variant: propType.oneOf(['story', 'profile']),
  stories: storiesType,
};

StoryHeader.defaultProps = {
  variant: 'story',
};

const Container = styled(View)`
  flex: 1;
  margin: 0 5px;
  align-items: center;
  padding: 10px 0;
  margin: 0 5px 20px 0;
  max-width: 75px;
`;

const Username = styled(Text)`
  font-size: 12px;
  margin-top: 3px;
`;
