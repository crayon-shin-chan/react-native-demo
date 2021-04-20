import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: Colors.white,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

const Home = () => {
  return (
    <View style={styles.container}>
      <FontAwesome5Icon name="react" size={80} color="black" />
      <Text>Nice React Native App</Text>
    </View>
  );
};

export default Home;
