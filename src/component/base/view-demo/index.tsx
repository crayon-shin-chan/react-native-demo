import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ViewDemoList from './ViewDemoList';
import ViewDemoDefault from './ViewDemoDefault';

const Stack = createStackNavigator();

const ViewDemo = () => {

  return (
    <Stack.Navigator initialRouteName="List">
        <Stack.Screen name="List" component={ViewDemoList} options={{ headerShown: false }}/>
        <Stack.Screen name="Default" component={ViewDemoDefault} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
};

export default ViewDemo;
