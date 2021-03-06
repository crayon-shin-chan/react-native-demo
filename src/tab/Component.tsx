import React from 'react';
import {Text, View, SafeAreaView, SectionList, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import ActivityIndicatorDemo from 'component/system/ActivityIndicatorDemo';
import ButtonDemo from 'component/Interactive/ButtonDemo';
import ViewDemo from 'component/base/view-demo';
import TextDemo from 'component/base/text-demo';

const DATA = [
  {
    title: '基础组件',
    data: [
      {name: 'View', component: ViewDemo},
      {name: 'Text', component: TextDemo},
    ],
  },
  {
    title: '交互组件',
    data: [{name: 'Button', component: ButtonDemo}],
  },
  {
    title: '系统组件',
    data: [{name: 'ActivityIndicator', component: ActivityIndicatorDemo}],
  },
];

interface ItemProps {
  name: string;
  component: React.FC;
}

interface RenderItemProps {
  item: ItemProps;
}

const Item: React.FC<ItemProps> = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{props.name}</Text>
      <AntDesignIcon
        name="rightcircleo"
        style={styles.icon}
        onPress={() =>
          navigation.navigate('CustomComponent', {
            component: props.component,
            title: props.name,
          })
        }
      />
    </View>
  );
};

const renderItem: React.FC<RenderItemProps> = ({item}) => <Item {...item} />;

interface SectionProps {
  section: {
    title: string;
  };
}

const renderSectionHeader: React.FC<SectionProps> = ({section: {title}}) => (
  <Text style={styles.header}>{title}</Text>
);

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
    marginHorizontal: 16,
  },
  header: {
    fontSize: 14,
    backgroundColor: '#fff',
  },
  item: {
    backgroundColor: '#f9c2ff',
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
  },
});

export default ComponentTab;
