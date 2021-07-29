import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import MainStackNavigator from './src/navigation/MainStackNavigator';
import TodoNavigator from './src/navigation/TodoNavigator';


export default function App() {
  return (
    <NavigationContainer>
      {/* <MainStackNavigator /> */}
      <TodoNavigator />
    </NavigationContainer>
  );
}
