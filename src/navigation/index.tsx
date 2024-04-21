import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PostScreen from '../screens/PostScreen';
import {NavigationProps} from '../interfaces/NavigationProps';
import PostDetailScreen from '../screens/PostDetailScreen';

const Stack = createNativeStackNavigator<NavigationProps>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="PostScreen" component={PostScreen} />
        <Stack.Screen name="PostDetailScreen" component={PostDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
