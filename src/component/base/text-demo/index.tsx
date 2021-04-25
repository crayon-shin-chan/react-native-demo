import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TextDemoList from './TextDemoList';
import TextDemoDefault from './TextDemoDefault';
import TextDemoSelectable from './TextDemoSelectable';
import TextDemoEllipsizeMode from './TextDemoEllipsizeMode';
import TextDemoOnLayout from './TextDemoOnLayout';

const Stack = createStackNavigator();

const TextDemo = () => {
  return (
    <Stack.Navigator initialRouteName="List">
      <Stack.Screen
        name="List"
        component={TextDemoList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Default"
        component={TextDemoDefault}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Selectable"
        component={TextDemoSelectable}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EllipsizeMode"
        component={TextDemoEllipsizeMode}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OnLayout"
        component={TextDemoOnLayout}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default TextDemo;
