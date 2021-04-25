import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const TextDemoDefault = () => (
  <View style={styles.container}>
    <View style={styles.row}>
      <Text style={[styles.text, styles.textHalf]}>
        Press Press Press Press Press Press{' '}
      </Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.text}>Disable</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.text}>accessibility</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.text}>accessibility</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: 10,
  },
  row: {
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    marginVertical: 10,
  },
  text: {
    backgroundColor: '#7FFFD4',
  },
  textHalf: {
    width: '50%',
  },
});

export default TextDemoDefault;
