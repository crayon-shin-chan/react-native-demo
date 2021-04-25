import React, {useCallback, useState} from 'react';
import {Alert, GestureResponderEvent, StyleSheet, Text, View} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const ViewDemoOnResponderMove = () => {
  const [content, setContent] = useState<string>('');
  const [color, setColor] = useState('green');

  const onStartShouldSetResponder = useCallback(() => true, []);

  const onResponderGrant = useCallback(()=>{
    setColor('red');
  },[]);

  const onResponderMove = useCallback(
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
      setContent(`onResponderMove\n${eventContent}`);
      return true;
    },
    [],
  );

  const onResponderEnd = useCallback(
    (event: GestureResponderEvent) => {
        console.log(event.nativeEvent);
        setColor('green');
    },
    [],
  );

  return (
    <>
      <View
        style={[styles.container,{ backgroundColor: color }]}
        onStartShouldSetResponder={onStartShouldSetResponder}
        onResponderGrant={onResponderGrant}
        onResponderMove={onResponderMove}
        onResponderEnd={onResponderEnd}>
        <Text style={styles.text}>{content}</Text>
      </View>
      <View
        style={[styles.container,{ backgroundColor: color }]}
        onStartShouldSetResponder={onStartShouldSetResponder}
        onResponderGrant={onResponderGrant}
        onResponderMove={onResponderMove}
        onResponderEnd={onResponderEnd}>
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

export default ViewDemoOnResponderMove;
