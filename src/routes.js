import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation';
import { createNavigatorIcon } from './components/NavigatorIcon';
import {
  FeedScreen,
  createFeedScreenHeaderLeft,
  createFeedScreenHeaderRight,
} from './screens/FeedScreen';
import { SearchScreen } from './screens/SearchScreen';
import { SelectPhotoScreen } from './screens/SelectPhotoScreen';
import { ActivityScreen } from './screens/ActivityScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { NewStoryScreen } from './screens/NewStoryScreen';
import { DirectScreen } from './screens/DirectScreen';

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

const homeStackNavigator = createStackNavigator({
  Main: {
    screen: bottomTabNavigator,
    navigationOptions: {
      headerLeft: createFeedScreenHeaderLeft(),
      headerRight: createFeedScreenHeaderRight(),
    },
  },
});

const hideTabBar = { tabBarVisible: false };

const topTabNavigator = createMaterialTopTabNavigator(
  {
    NewStory: {
      screen: NewStoryScreen,
      navigationOptions: hideTabBar,
    },
    Home: {
      screen: homeStackNavigator,
      navigationOptions: hideTabBar,
    },
    Direct: {
      screen: DirectScreen,
      navigationOptions: hideTabBar,
    },
  },
  {
    initialRouteName: 'Home',
    backBehavior: 'initialRoute',
    initialLayout: { width: 0, height: 0 },
  },
);

export const Routes = createAppContainer(topTabNavigator);
