import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default class MainScreen extends Component {
    render() {
        return (
            <View style={StyleSheet.container}>
                <Text>Main Screen</Text>
            </View>
        )
    }
}
