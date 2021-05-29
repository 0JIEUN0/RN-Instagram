import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Feather';
import Feed from '../Feed'

const Stack = createStackNavigator();

function Home() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          headerTitleStyle: { alignSelf: 'center' },
          title: "Instagram",
          headerRight: () => (
            <Icon name="send" size={30} style={{ paddingRight:10 }}/>
          ),
          headerLeft: () => (
            <Icon name="camera" size={30} style={{ paddingLeft:10 }}/>
          )
        }} />
    </Stack.Navigator>
  );
}

function HomeScreen( { navigation }) {
    return (
      <View style={{ 
        flex: 1, justifyContent: 'center' 
        }}>
        <Feed />
      </View>
    );
}

export default Home;