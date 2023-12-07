// App.js or App.tsx

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import GroupGameScreen from './screens/GroupGameScreen';
import LevelScreen from './screens/LevelScreen';
import LevelSelectionScreen from './screens/LevelSelectionScreen';
import PlayerScreen from './screens/PlayerScreen'; // Import PlayerScreen

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const GroupGameStack = createStackNavigator();
const LevelStack = createStackNavigator();
const LevelSelectionStack = createStackNavigator();

// Stack navigator for Home tab
const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      {/* Add other screens for the Home tab here if needed */}
    </HomeStack.Navigator>
  );
};

// Stack navigator for Group Game tab
const GroupGameStackNavigator = () => {
  return (
    <GroupGameStack.Navigator>
      <GroupGameStack.Screen name="GroupGameScreen" component={GroupGameScreen} />
      {/* Add other screens for the Group Game tab here if needed */}
    </GroupGameStack.Navigator>
  );
};

// Stack navigator for Level tab
const LevelStackNavigator = () => {
  return (
    <LevelStack.Navigator>
      <LevelStack.Screen name="LevelScreen" component={LevelScreen} />
      {/* Add other screens for the Level tab here if needed */}
    </LevelStack.Navigator>
  );
};

// Stack navigator for Level Selection tab
const LevelSelectionStackNavigator = () => {
  return (
    <LevelSelectionStack.Navigator>
      <LevelSelectionStack.Screen name="LevelSelectionScreen" component={LevelSelectionScreen} />
      {/* Add other screens for the Level Selection tab here if needed */}
    </LevelSelectionStack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStackNavigator} />
        <Tab.Screen name="GroupGame" component={GroupGameStackNavigator} />
        <Tab.Screen name="Level" component={LevelStackNavigator} />
        <Tab.Screen name="LevelSelection" component={LevelSelectionStackNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
