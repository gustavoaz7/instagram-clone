import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import propTypes from 'prop-types';
import faker from 'faker';
import { StoryHeader } from './StoryHeader';
import { userType } from '../types';
import { createFriends } from '../helpers/faker';

export const StoryHeadersList = ({ self, user }) => {
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
      contentContainerStyle={{ paddingHorizontal: 6 }}
    >
      <StoryHeader self={self} user={user} stories={[]} />
      {fakeFriends.map(friend => (
        <StoryHeader key={friend.user.id} user={friend.user} />
      ))}
    </ScrollView>
  );
};

StoryHeadersList.propTypes = {
  self: propTypes.bool,
  user: userType.isRequired,
};
