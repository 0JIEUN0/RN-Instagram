import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Feather';

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
        flex: 1, alignItems: 'center', justifyContent: 'center' 
        }}>
        <Text>Home Screen</Text>
      </View>
    );
}

export default Home;