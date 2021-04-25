import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const ViewDemoDefault = () => {
  return (
    <View style={styles.container}>
      <Text>aaaaaaa</Text>
      <Text>bbbbbbb</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: 'green'},
});

export default ViewDemoDefault;
