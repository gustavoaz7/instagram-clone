import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import { createNavigatorIcon } from './components/NavigatorIcon';
import { FeedScreen } from './screens/FeedScreen';
import { SearchScreen } from './screens/SearchScreen';
import { SelectPhotoScreen } from './screens/SelectPhotoScreen';
import { ActivityScreen } from './screens/ActivityScreen';
import { ProfileScreen } from './screens/ProfileScreen';

const bottomTabNavigator = createBottomTabNavigator(
  {
    Feed: {
      screen: FeedScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => createNavigatorIcon('home', focused),
      },
    },
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => createNavigatorIcon('search', focused),
      },
    },
    Photo: {
      screen: SelectPhotoScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => createNavigatorIcon('plus-square', focused),
      },
    },
    Activity: {
      screen: ActivityScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => createNavigatorIcon('heart', focused),
      },
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => createNavigatorIcon('user', focused),
      },
    },
  },
  {
    tabBarOptions: {
      showLabel: false,
    },
  },
);

export const Routes = createAppContainer(bottomTabNavigator);
