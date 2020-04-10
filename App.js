import React from 'react';
import { createAppContainer, createSwitchNavigator  } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Launch from './app/components/Launch';
import Splash from './app/components/Splash';
import Profile from './app/components/Profile';
import Main from './app/components/Main';
import Transition from './app/components/Transition';

const LaunchStack = createStackNavigator(
  {
    Launch: Launch,
  }
);

const SplashStack = createStackNavigator(
  {
    Splash: Splash,
  }
);

const ProfileStack = createStackNavigator(
  {
    Profile: Profile,
  }
);

const MainStack = createStackNavigator(
  {
    Main: Main,
  }
);

const TransitionStack = createStackNavigator(
  {
    Transition: Transition,
  }
);

const UserAppNavigator = createStackNavigator({
  Launch: Launch,
  Splash: Splash,
  Profile: Profile,
  Main: Main,
  Transition: Transition
})

export default createAppContainer(createSwitchNavigator(
  {
    UserMain: { screen: UserAppNavigator },
  },
  {
    initialRouteName: 'UserMain',
  }
));