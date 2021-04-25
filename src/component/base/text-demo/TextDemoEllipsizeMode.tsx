import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const TextDemoEllipsizeMode = () => (
  <View style={styles.container}>
    <View style={styles.row}>
      <Text style={[styles.text]} numberOfLines={1}>
        Common Common Common Common Common Common Common Common{' '}
      </Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.text} numberOfLines={1} ellipsizeMode="head">
        Head1 Head2 Head3 Head4 Head5 Head6 Head7 Head8 Head9 Head0{' '}
      </Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.text} numberOfLines={2} ellipsizeMode="head">
        Head1 Head2 Head3 Head4 Head5 Head6 Head7 Head8 Head9 Head0{' '}
      </Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.text} numberOfLines={1} ellipsizeMode="middle">
        Middle1 Middle2 Middle3 Middle4 Middle5 Middle6 Middle7{' '}
      </Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.text} numberOfLines={2} ellipsizeMode="middle">
        Middle1 Middle2 Middle3 Middle4 Middle5 Middle6 Middle7{' '}
      </Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">
        Tail1 Tail2 Tail3 Tail4 Tail5 Tail6 Tail7 Tail8 Tail9 Tail10 Tail11{' '}
      </Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.text} numberOfLines={2} ellipsizeMode="tail">
        Tail1 Tail2 Tail3 Tail4 Tail5 Tail6 Tail7 Tail8 Tail9 Tail10 Tail11{' '}
      </Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.text} numberOfLines={1} ellipsizeMode="clip">
        Clip1 Clip2 Clip3 Clip4 Clip5 Clip6 Clip7 Clip8 Clip9 Clip10 Clip11{' '}
      </Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.text} numberOfLines={2} ellipsizeMode="clip">
        Clip1 Clip2 Clip3 Clip4 Clip5 Clip6 Clip7 Clip8 Clip9 Clip10 Clip11{' '}
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: 10,
    overflow: 'scroll',
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
    width: '50%',
  },
});

export default TextDemoEllipsizeMode;
