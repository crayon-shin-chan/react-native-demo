import React from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar } from "react-native";
import ActivityIndicatorDemo from 'component/system/ActivityIndicatorDemo';
import { useNavigation } from "@react-navigation/core";

const DATA = [
  {
    title: "系统组件",
    data: [{ name: 'ActivityIndicator' , component: ActivityIndicatorDemo }]
  }
];

interface ItemProps{
    name: string,
    component: React.FC
}

interface RenderItemProps {
    item: ItemProps
}

const Item: React.FC<ItemProps> = (props) =>{
    const navigation = useNavigation();
   return (
    <View style={styles.item}>
        <Text style={styles.title} onPress={()=>navigation.navigate('CustomComponent',{ component: props.component })}>
            {props.name}
        </Text>
    </View>
    )
};

const renderItem:React.FC<RenderItemProps> = ({ item }) => <Item {...item} />

const ComponentTab = () => (
  <SafeAreaView style={styles.container}>
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item.name + index}
      renderItem={renderItem}
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