import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ViewDemoList from './ViewDemoList';
import ViewDemoDefault from './ViewDemoDefault';
import ViewDemoOnStartShouldSetResponder from './ViewDemoOnStartShouldSetResponder';
import ViewDemoOnResponderMove from './ViewDemoOnResponderMove';

const Stack = createStackNavigator();

const ViewDemo = () => {
  return (
    <Stack.Navigator initialRouteName="List">
      <Stack.Screen
        name="List"
        component={ViewDemoList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Default"
        component={ViewDemoDefault}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OnStartShouldSetResponder"
        component={ViewDemoOnStartShouldSetResponder}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OnResponderMove"
        component={ViewDemoOnResponderMove}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default ViewDemo;
