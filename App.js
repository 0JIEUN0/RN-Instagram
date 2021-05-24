import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import HomeScreen from './component/view/HomeScreen'
import SearchScreen from './component/view/SearchScreen'
import UploadScreen from './component/view/UploadScreen'
import NoticeScreen from './component/view/NoticeScreen'
import MypageScreen from './component/view/MypageScreen'

const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen}
          options={{
            tabBarLabel: () => {return null},
            tabBarIcon:({tintColor})=>(  
              <Icon name="home" color={tintColor} size={25}/>)
          }} />
        <Tab.Screen name="Search" component={SearchScreen} 
          options={{
            tabBarLabel: () => {return null},
            tabBarIcon:({tintColor})=>(  
              <Icon name="search" color={tintColor} size={25}/>)
          }} />
        <Tab.Screen name="Upload" component={UploadScreen}
          options={{
            tabBarLabel: () => {return null},
            tabBarIcon:({tintColor})=>(  
              <Icon name="plus-square" color={tintColor} size={25}/>)
          }} />
        <Tab.Screen name="Notice" component={NoticeScreen}  
          options={{
            tabBarLabel: () => {return null},
            tabBarIcon:({tintColor})=>(  
              <Icon name="heart" color={tintColor} size={25}/>)
          }} />
        <Tab.Screen name="Mypade" component={MypageScreen}
          options={{
            tabBarLabel: () => {return null},
            tabBarIcon:({tintColor})=>(  
              <Icon name="user" color={tintColor} size={25}/>)
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default BottomTab;