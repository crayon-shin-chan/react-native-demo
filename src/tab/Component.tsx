import React from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar } from "react-native";
import ActivityIndicatorDemo from 'component/system/ActivityIndicatorDemo';

const DATA = [
  {
    title: "系统组件",
    data: [{ name: 'ActivityIndicator' , component: ActivityIndicatorDemo }]
  }
];

const Item: React.FC<{title:string}> = (props) => (
  <View style={styles.item}>
    <Text style={styles.title}>{props.title}</Text>
  </View>
);

const ComponentTab = () => (
  <SafeAreaView style={styles.container}>
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item.name + index}
      renderItem={({ item }) => <Item title={item.name} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24
  }
});

export default ComponentTab;