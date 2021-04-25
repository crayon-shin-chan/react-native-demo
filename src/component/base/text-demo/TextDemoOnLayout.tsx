import React, {useCallback, useState} from 'react';
import {
  LayoutChangeEvent,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextLayoutEventData,
  View,
} from 'react-native';

const TextDemoOnLayout = () => {
  const [content1, setContent1] = useState('');
  const [content2, setContent2] = useState('');

  const onLayout = useCallback((event: LayoutChangeEvent) => {
    setContent1(JSON.stringify(event.nativeEvent));
  }, []);

  const onTextLayout = useCallback(
    (event: NativeSyntheticEvent<TextLayoutEventData>) => {
      setContent2(JSON.stringify(event.nativeEvent));
    },
    [],
  );

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text
          style={[styles.text]}
          onLayout={onLayout}
          onTextLayout={onTextLayout}>
          Common
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text} numberOfLines={7}>
          {content1}
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text} numberOfLines={7}>
          {content2}
        </Text>
      </View>
    </View>
  );
};

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
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    marginVertical: 10,
  },
  text: {},
});

export default TextDemoOnLayout;
