/* eslint-disable no-plusplus */
import faker from 'faker';

export const createFriends = numberOfFriends => {
  const friendsInfo = [];
  for (let i = 0; i < numberOfFriends; i++) {
    const id = faker.random.number({ min: 1, max: 1000, precision: 1 });
    const username = faker.internet.userName();
    const friendInfo = {
      user: {
        id: `${username}-${id}`,
        username,
        full_name: faker.name.findName(),
        profile_picture: faker.image.avatar(),
      },
    };
    friendsInfo.push(friendInfo);
  }
  return friendsInfo;
};
