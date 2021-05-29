import React from 'react';
import { Text, View, StyleSheet, StatusBar, FlatList, Image, SafeAreaView, Dimensions  } from 'react-native';

function GridFeed ( props ) {
    return (
        <SafeAreaView>
            <FlatList
                data={props.data.images}
                renderItem={({item}) =>
                    <Image
                        source={{ uri: item.img }}
                        style={{ height:100, width: Dimensions.get("window").width / 3.1, margin: 2 }} />}
                horizontal={false}
                //Setting the number of column
                numColumns={3}
                key={props.data.images.length}>
            </FlatList>
        </SafeAreaView >
    )
}

export default GridFeed