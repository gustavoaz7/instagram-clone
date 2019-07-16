import React from 'react';
import { View, Image, Text } from 'react-native';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import propType from 'prop-types';
import { userType } from '../types';

export const StoryItem = ({ self, user }) => {
  const username = self ? 'Your story' : user.username;
  return (
    <Container>
      <ImageContainer>
        <ImageUI source={{ uri: user.profile_picture }} />
        {self && (
          <AddStoryContainer>
            <AddStory>
              <Feather size={14} name="plus" color="#fff" />
            </AddStory>
          </AddStoryContainer>
        )}
      </ImageContainer>
      <Username numberOfLines={1}>{username}</Username>
    </Container>
  );
};

StoryItem.propTypes = {
  self: propType.bool,
  user: userType.isRequired,
};

const Container = styled(View)`
  flex: 1;
  margin: 0 5px;
  align-items: center;
  height: 110px;
  width: 75px;
`;

const ImageContainer = styled(View)`
  position: relative;
  border-radius: 32px;
  border-width: 2px;
  border-color: purple;
`;

const ImageUI = styled(Image)`
  width: 56px;
  height: 56px;
  margin: 2px;
  border-radius: 28px;
`;

const Username = styled(Text)`
  font-size: 12px;
  margin-top: 3px;
`;

const AddStoryContainer = styled(View)`
  position: absolute;
  bottom: -4px;
  right: -4px;
  border-radius: 20px;
  background-color: #fff;
`;

const AddStory = styled(View)`
  width: 16px;
  height: 16px;
  border-radius: 8px;
  margin: 2px;
  background-color: dodgerblue;
  justify-content: center;
  align-items: center;
`;
