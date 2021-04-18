/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React, { useState } from 'react';
 import {
   SafeAreaView,
   StyleSheet,
   Text,
 } from 'react-native';

 import {
   Colors,
 } from 'react-native/Libraries/NewAppScreen';

import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import Ionicon from 'react-native-vector-icons/Ionicons';

const HOME = 'home';
const COMPONENT = 'component';
const LIBRARY = 'library'

const styles = StyleSheet.create({
    container:{
        height: '100%',
        backgroundColor: Colors.white
    },
    tabBar:{
        position: 'absolute',
        bottom: 0,
        height: 50,
    },
  });

 const App = () => {

    const [tab, setTab] = useState<string>(HOME)

   return (
     <SafeAreaView style={styles.container}>
        <TabNavigator tabBarStyle={styles.tabBar}>
            <TabNavigator.Item
                selected={tab === HOME}
                title="首页"
                renderIcon={() => <Icon name="home" size={30} color="black" />}
                renderSelectedIcon={() => <Icon name="home" size={30} color="black" />}
                onPress={() => {setTab(HOME)}}
            >
                <Text>这是首页</Text>
            </TabNavigator.Item>
            <TabNavigator.Item
                selected={tab === COMPONENT}
                title="常用组件"
                renderIcon={() => <FontAwesome5Icon name="react" size={30} color="black" />}
                renderSelectedIcon={() => <FontAwesome5Icon name="react" size={30} color="black" />}
                onPress={() => {setTab(COMPONENT)}}
            >
                <Text>常用组件</Text>
            </TabNavigator.Item>
            <TabNavigator.Item
                selected={tab === LIBRARY}
                title="第三方库"
                renderIcon={() => <Ionicon name="library" size={30} color="black" />}
                renderSelectedIcon={() => <Ionicon name="library" size={30} color="black" />}
                onPress={() => {setTab(LIBRARY)}}
            >
                <Text>第三方库</Text>
            </TabNavigator.Item>
        </TabNavigator>
     </SafeAreaView>
   );
 };

 export default App;
