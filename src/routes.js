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
import {
  DirectScreen,
  createDirectScreenHeaderRight,
  createDirectScreenHeaderLeft,
} from './screens/DirectScreen';

const bottomTabStyle = { backgroundColor: '#fafafa' };

const MainBottomTabNavigator = createBottomTabNavigator(
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
      style: bottomTabStyle,
    },
  },
);

const HomeStackNavigator = createStackNavigator({
  Main: {
    screen: MainBottomTabNavigator,
    navigationOptions: {
      headerLeft: createFeedScreenHeaderLeft(),
      headerRight: createFeedScreenHeaderRight(),
    },
  },
});

const DirectStackNavigator = createStackNavigator({
  Direct: {
    screen: DirectScreen,
    navigationOptions: {
      headerTitle: 'Direct',
      headerRight: createDirectScreenHeaderRight(),
      headerLeft: createDirectScreenHeaderLeft(),
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
      screen: HomeStackNavigator,
      navigationOptions: hideTabBar,
    },
    Direct: {
      screen: DirectStackNavigator,
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
