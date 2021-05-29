import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Thumbnail } from 'native-base';

function MyPage( props ) {
    const data = props.userData
    return (
        <View>
            {/* 사용자 정보 (thumbnail, 게시물, 팔로워, 팔로잉 수) */}
            <View style={styles.userInfo}>
                <Thumbnail large source={{uri: data.userPic}} />
                <View style={styles.verticalView}>
                    <Text>{data.postNum}</Text>
                    <Text style={{color: 'gray'}}>게시물</Text>
                </View>
                <View style={styles.verticalView}>
                    <Text>{data.follower}</Text>
                    <Text style={{color: 'gray'}}>팔로워</Text>
                </View>
                <View style={styles.verticalView}>
                    <Text>{data.following}</Text>
                    <Text style={{color: 'gray'}}>팔로잉</Text>
                </View>
            </View>

            {/* 프로필 편집 */}
            <View style={styles.horizonalView}>
                <Button block bordered light style={{flex: 10, marginRight: 10, fontSize: 10}}>
                    <Text>프로필 편집</Text>
                </Button>
                <Button bordered light>
                    <Icon type="Feather" name="chevron-down" style={{fontSize: 15, color: 'black'}}/>
                </Button>
            </View>

            {/* 스토리 하이라이트 */}
            <View style={styles.horizonalView}>
                <Text>스토리 하이라이트</Text>
                <Right>
                    <Icon type="Feather" name="chevron-down" style={{fontSize: 20}}/>
                </Right>
            </View>

           
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    userInfo: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    verticalView: {
        alignItems: 'center',
    },
    horizonalView: {
        flex: 0,
        flexDirection: 'row',
        margin: 20,
    },
    text: {
        fontSize: 10,
    },
})

export default MyPage;