import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

const ActivityIndicatorDemo = () => (
  <View style={styles.container}>
      <View  style={styles.row}>
            <Text style={styles.text}>Common</Text>
            <ActivityIndicator color="red"/>
      </View>
      <View  style={styles.row}>
            <Text style={styles.text}>Small</Text>
            <ActivityIndicator size="small" color="green"/>
      </View>
      <View  style={styles.row}>
            <Text style={styles.text}>Large</Text>
            <ActivityIndicator size="large" color="blue"/>
      </View>
      <View  style={styles.row}>
            <Text style={styles.text}>10</Text>
            <ActivityIndicator size={10} color="blue"/>
      </View>
      <View  style={styles.row}>
            <Text style={styles.text}>20</Text>
            <ActivityIndicator size={20} color="blue"/>
      </View>
      <View  style={styles.row}>
            <Text style={styles.text}>50</Text>
            <ActivityIndicator size={50} color="blue"/>
      </View>
      <View  style={styles.row}>
            <Text style={styles.text}>100</Text>
            <ActivityIndicator size={100} color="blue"/>
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
    flexDirection: "row",
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

export default ActivityIndicatorDemo;