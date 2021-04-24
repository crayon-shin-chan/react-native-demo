import React from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";

const ViewDemoList = () => (
  <View style={styles.container}>
      <View style={styles.row}>
            <Text style={styles.text}>Layout</Text>
            <Text style={styles.text}>Event</Text>
      </View>
      <View style={styles.row}>
            <Text style={styles.text}>Layout</Text>
            <Text style={styles.text}>Event</Text>
      </View>
      <View style={styles.row}>
            <Text style={styles.text}>Layout</Text>
            <Text style={styles.text}>Event</Text>
      </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: '90%',
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
  },
  row: {
    width: '100%',
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  text: {
    width: '40%',
    height: '60%',
    margin: 20,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    textAlignVertical: 'center',
    textAlign: 'center',
    backgroundColor: '#F0F8FF',
  }
});

export default ViewDemoList;