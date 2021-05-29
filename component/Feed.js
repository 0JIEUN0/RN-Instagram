import React from 'react';
import { StyleSheet, View, SafeAreaView, ScrollView, StatusBar, Text } from 'react-native';
import Post from './Post'

const DATA = [
    {
        userName: "WIT",
        userPlace: "konkuk",
        userPic: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
        like: 100,
        title: "2021 New Post!! 👾",
    },
    {
        userName: "Jieun",
        userPlace: "wit",
        userPic: "https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        pic: "https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        like: 100,
        title: "Hello React-Native 😉",
    }
]

function Feed() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View>
                    {
                        DATA.map((post) => 
                            <Post data = {post} />
                        )
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
    },
    text: {
        fontSize: 10,
    },
})

export default Feed;