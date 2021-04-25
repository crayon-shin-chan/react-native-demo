import React, {useCallback, useState} from 'react';
import {GestureResponderEvent, StyleSheet, Text, View} from 'react-native';

const ViewDemoOnStartShouldSetResponder = () => {
  const [content, setContent] = useState<string>('Responder');

  const onStartShouldSetResponder = useCallback(
    (event: GestureResponderEvent): boolean => {
      const eventContent = JSON.stringify(
        {
          ...event.nativeEvent,
          changedTouches: undefined,
          touches: undefined,
        },
        null,
        4,
      );
      setContent(`onStartShouldSetResponder\n${eventContent}`);
      return true;
    },
    [],
  );

  return (
    <>
      <View
        style={styles.container}
        onStartShouldSetResponder={onStartShouldSetResponder}>
        <Text style={styles.text}>{content}</Text>
      </View>
      <View
        style={styles.container}
        onStartShouldSetResponder={onStartShouldSetResponder}>
        <Text style={styles.text}>{content}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '40%',
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 25,
    backgroundColor: 'green',
    overflow: 'scroll',
  },
  text: {
    height: '100%',
    textAlignVertical: 'center',
    overflow: 'scroll',
  },
});

export default ViewDemoOnStartShouldSetResponder;
