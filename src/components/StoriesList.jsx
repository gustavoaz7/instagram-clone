import React from 'react';
import { ScrollView } from 'react-native';
import { StoryItem } from './StoryItem';

export const StoriesList = () => (
  <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{ marginVertical: 10 }}
  >
    <StoryItem />
    <StoryItem />
    <StoryItem />
    <StoryItem />
    <StoryItem />
    <StoryItem />
    <StoryItem />
  </ScrollView>
);
