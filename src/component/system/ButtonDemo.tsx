import React from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";

const ButtonDemo = () => (
  <View style={styles.container}>
      <View  style={styles.row}>
            <Text style={styles.text}>Press</Text>
            <Button title="press" color="red" onPress={()=>Alert.alert('button press')}/>
      </View>
      <View  style={styles.row}>
            <Text style={styles.text}>Disable</Text>
            <Button title="disable" disabled={true} onPress={()=>Alert.alert('button press')}/>
      </View>
      <View  style={styles.row}>
            <Text style={styles.text}>accessibility</Text>
            <Button title="accessibility" color="blue" accessibilityLabel="accessibility text"  onPress={()=>Alert.alert('button press')}/>
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
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    marginVertical: 10,
  },
  text: {
      width: '50%',
  }
});

export default ButtonDemo;