import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from '../screens/Main';
import Modal from '../screens/Modal';

const Root = createStackNavigator();
const Stack = createStackNavigator();

const MainScreen = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Main}
        options={{ title: 'Галерея' }}
      />
    </Stack.Navigator>
  );
};

const navigationContainer = () => {
  return (
    <NavigationContainer>
      <Root.Navigator mode="modal">
        <Root.Screen
          name="Main"
          component={MainScreen}
          options={{ headerShown: false, title: 'Галерея' }}
        />
        <Root.Screen
          name="Modal"
          component={Modal}
          options={{ title: 'Изображение' }}
        />
      </Root.Navigator>
    </NavigationContainer>
  );
};

export default navigationContainer;
