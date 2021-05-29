import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Left, Right, Button, Icon, Thumbnail, Tab, Tabs, TabHeading } from 'native-base';
import GridFeed from './GridFeed'

const FEED_IMAGES = {images: [
    {img: "data:image/jpeg;base64,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"},
    {img: "data:image/jpeg;base64,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"},
    {img: "https://i.natgeofe.com/n/f0dccaca-174b-48a5-b944-9bcddf913645/01-cat-questions-nationalgeographic_1228126.jpg"},
    {img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCc8zlZixb9LeYadLuGO7Qm9-UtEv_9FLdg&usqp=CAU"},
] }

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

            <Tabs tabBarUnderlineStyle={{borderBottomWidth: 1, backgroundColor: 'black'}}>
                <Tab
                    heading={ 
                        <TabHeading
                            style={{backgroundColor: 'white'}}>
                            <Icon type="MaterialIcons" name="grid-on" style={{color: 'black'}} />
                        </TabHeading>}>
                    <GridFeed data={FEED_IMAGES}/>
                </Tab>
                <Tab 
                    heading={ 
                        <TabHeading style={{backgroundColor: 'white', color: 'black'}}>
                            <Icon type="Feather" name="user-check" style={{color: 'black'}} />
                        </TabHeading>}>
                    <Text style={{textAlign: 'center'}}>View</Text>
                </Tab>
            </Tabs>
           
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