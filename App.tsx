import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Index from 'page/Index';
import CustomComponent from 'page/CustomComponent';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen
          name="Index"
          component={Index}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CustomComponent"
          component={CustomComponent}
          options={({route}: any) => ({title: route.params?.title})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
