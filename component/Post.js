import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Modal } from 'react-native';
import { Card, CardItem, Body, Left, Right, Thumbnail, Button } from 'native-base';
import Icon from 'react-native-vector-icons/Feather';
import PagerView from 'react-native-pager-view';

function Post ( props ) {
    const data  = props.data
    return (
        <Card>
            {/* 사용자 정보 */}
            <CardItem header>
                <Left>
                    <Thumbnail source={{uri: data.userPic}} />
                    <Body>
                        <Text bordered>{data.userName}</Text>
                        <Text>{data.userPlace}</Text>
                    </Body>
                </Left>
                <Right>
                    <Icon name="more-horizontal" size={30}/>
                </Right>
            </CardItem>

            {/* 이미지 */}
            <CardItem>
                <PagerView style={styles.pagerView} initialPage={0}>
                    {data.pic.map(img => 
                    <Image
                        source={{ uri: img }} 
                        style={{ height:300, width:null, flex: 1 }} />)}
                </PagerView>
            </CardItem>

            {/* 하트/댓글/메시지/북마크 */}
            <CardItem>
                <Left style={styles.userBar}>
                    <Icon name="heart" size={25} />
                    <Icon name="message-circle" size={25} />
                    <Icon name="send" size={25} />
                </Left>
                <Right>
                    <Icon name="bookmark" size={25} />
                </Right>
            </CardItem>        

            {/* 본문 */}
            <CardItem>
              <Body>
                <Text>
                   {data.title}
                </Text>
              </Body>
            </CardItem>

            {/* 업로드 시기 */}
            <CardItem footer>
              <Text style={styles.footerText}>1일 전</Text>
            </CardItem>
        </Card>
    )
}

const styles = StyleSheet.create({
    userInfo: {
        height: 45,
        marginTop: 10,
    },
    userBar: {
    },
    footerText: {
        fontSize: 10,
        color: 'gray',
    },
})

export default Post;