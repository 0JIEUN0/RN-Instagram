import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Left, Right, Button, Icon, Title } from 'native-base';
import MyPage from '../Mypage'

const TEMP_USER = {
  userName: "je",
  userPic: "https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
  postNum: 1,
  follower: 10,
  following: 20,
}

function MypageScreen() {
    return (
      <Container>
        <Header transparent style={styles.container}>
          <Left style={styles.leftS}>
            <Title style={styles.text}>{TEMP_USER.userName}</Title>
            <Button transparent light>
              <Icon type="Feather" name="chevron-down" style={{color: 'black'}}/>
            </Button>
          </Left>
          <Right>
            <Button transparent>
              <Icon type="Feather" name='plus-square' style={{color: 'black'}}/>
            </Button>
            <Button transparent>
              <Icon type="Feather" name='menu' style={{color: 'black'}}/>
            </Button>
          </Right>
        </Header>

        <Content>
          <MyPage userData={TEMP_USER}/>
        </Content>
      </Container>
    );
}


const styles = StyleSheet.create({
  container: {
      color: 'black'
  },
  leftS: {
    flexDirection: 'row',
    alignItems: 'baseline'

  },
  text: {
    marginLeft: 10,
    color: 'black',
  },
})

export default MypageScreen;