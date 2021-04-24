import React from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/core";
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import ActivityIndicatorDemo from 'component/system/ActivityIndicatorDemo';
import ButtonDemo from "component/system/ButtonDemo";

const DATA = [
  {
    title: "系统组件",
    data: [
        { name: 'ActivityIndicator' , component: ActivityIndicatorDemo },
        { name: 'Button' , component: ButtonDemo }
    ]
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
        <Text style={styles.title}>
            {props.name}
        </Text>
        <AntDesignIcon name="rightcircleo" 
            style={styles.icon} 
            onPress={()=>navigation.navigate('CustomComponent',{ 
                component: props.component ,
                title: props.name
            })}
        ></AntDesignIcon>
    </View>
    )
};

const renderItem:React.FC<RenderItemProps> = ({ item }) => <Item {...item} />

interface SectionProps { 
    section: { 
        title:string
    } 
}

const renderSectionHeader: React.FC<SectionProps> = ({ section: { title } }) => (
    <Text style={styles.header}>{title}</Text>
  )

const ComponentTab = () => (
  <SafeAreaView style={styles.container}>
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item.name + index}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
    />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16
  },
  header: {
    fontSize: 14,
    backgroundColor: "#fff"
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 12,
    fontFamily: 'System',
  },
  icon: {
    fontSize: 26,
  }
});

export default ComponentTab;