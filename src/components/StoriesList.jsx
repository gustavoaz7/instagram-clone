import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import propTypes from 'prop-types';
import faker from 'faker';
import { StoryItem } from './StoryItem';
import { userType } from '../types';
import { createFriends } from '../helpers/faker';

export const StoriesList = ({ self, user }) => {
  const [fakeFriends, setFakeFriends] = useState([]);

  useEffect(() => {
    const numberOfFriends = faker.random.number({ min: 4, max: 25, precision: 1 });
    const friends = createFriends(numberOfFriends);
    setFakeFriends(friends);
  }, []);

  if (!fakeFriends.length) {
    return null;
  }

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ marginVertical: 10 }}
    >
      <StoryItem self={self} user={user} />
      {fakeFriends.map(friend => (
        <StoryItem key={friend.user.id} user={friend.user} />
      ))}
    </ScrollView>
  );
};

StoriesList.propTypes = {
  self: propTypes.bool,
  user: userType.isRequired,
};
