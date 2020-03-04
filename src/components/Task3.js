import React, {Component, useState} from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text,
  Title,
  Card,
  CardItem,
} from 'native-base';

import StarRating from './StarRating/star-rating';

class FrwdIcon extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.editContainer}>
        <Image
          style={{height: 15, width: 15}}
          source={require('../assets/img/forward.png')}
        />
      </TouchableOpacity>
    );
  }
}

export default function Task3() {
  const tasks = [
    {name: 'Appointments', customid: '1'},
    {name: 'Trips', customid: '2'},
    {name: 'Passwords', customid: '3'},
    {name: 'Pitches', customid: '4'},
    {name: 'Updates', customid: '5'},
  ];

  const people = [
    {
      name: 'Conrad Wiley',
      loc: 'https://randomuser.me/api/portraits/men/37.jpg',
      key: '1',
    },
    {
      name: 'Maxim Burnett',
      loc: 'https://randomuser.me/api/portraits/women/84.jpg',
      key: '2',
    },
    {
      name: 'Abbey Acevedo',
      loc: 'https://randomuser.me/api/portraits/men/32.jpg',
      key: '3',
    },
    {
      name: 'Eve Daniels',
      loc: 'https://randomuser.me/api/portraits/men/31.jpg',
      key: '4',
    },
    {
      name: 'Aydin Warren',
      loc: 'https://randomuser.me/api/portraits/women/44.jpg',
      key: '5',
    },
    {
      name: 'Roland Woodward',
      loc: 'https://randomuser.me/api/portraits/men/44.jpg',
      key: '6',
    },
    {
      name: 'Colin Vaughn',
      loc: 'https://randomuser.me/api/portraits/women/50.jpg',
      key: '7',
    },
    {
      name: 'Rogelio Edwards',
      loc: 'https://randomuser.me/api/portraits/lego/6.jpg',
      key: '8',
    },
    {
      name: 'Heaven Bullock',
      loc: 'https://randomuser.me/api/portraits/women/12.jpg',
      key: '9',
    },
  ];

  return (
    <Container style={{backgroundColor: 'white'}}>
      <Header style={{backgroundColor: '#333'}}>
        <StatusBar backgroundColor="coral" barStyle="dark-content" />
        <Title
          style={{
            fontSize: 30,
            fontFamily: 'OpenSans-Bold',
            flex: 1,
            textAlignVertical: 'center',
          }}>
          List
        </Title>
      </Header>
      <Content>
        <View style={{borderWidth: 0.5, borderColor: '#000', marginTop: 5}}>
          <View
            style={{
              paddingLeft: 5,
              paddingVertical: 10,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View style={{paddingLeft: 5}}>
              <Image
                style={styles.image}
                resizeMode={'cover'}
                source={{
                  uri:
                    'https://s-media-cache-ak0.pinimg.com/736x/43/cd/6e/43cd6e82491bf130d97624c198ee1a3f--funny-movie-quotes-funny-movies.jpg',
                }}
              />
            </View>
            <TouchableOpacity>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{paddingLeft: 10}}>
                  <Text style={{fontFamily: 'OpenSans-Semibold', fontSize: 20}}>
                    Limited Supply! Its like digital gold!
                  </Text>
                  <StarRating />
                </View>
                <View style={{left: 39}}>
                  <FrwdIcon />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{margin: 10}} />
        <SafeAreaView>
          <FlatList
            numColumns={1}
            keyExtractor={item => item.customid}
            data={tasks}
            renderItem={({item}) => (
              <TouchableOpacity>
                <View
                  style={{
                    borderColor: '#ddd',
                    borderWidth: 0.2,
                    height: 50,
                    paddingHorizontal: 15,
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'OpenSans-Regular',
                      fontSize: 24,
                    }}>
                    {item.name}
                  </Text>
                  <View
                    style={{
                      flex: 2,
                      alignItems: 'flex-end',
                    }}>
                    <FrwdIcon />
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </SafeAreaView>
        <View style={{margin: 10}} />
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Button
            active
            style={{
              flex: 1,
              justifyContent: 'center',
              backgroundColor: 'coral',
              borderColor: '#ddd',
              borderWidth: 0.2,
            }}>
            <Text style={{fontFamily: 'OpenSans-Semibold', fontSize: 19}}>
              Button 1
            </Text>
          </Button>
          <Button
            style={{
              flex: 1,
              justifyContent: 'center',
              backgroundColor: '#444',
              borderColor: '#ddd',
              borderWidth: 0.2,
            }}>
            <Text style={{fontFamily: 'OpenSans-Semibold', fontSize: 19}}>
              Button 2
            </Text>
          </Button>
        </View>
        <View style={{margin: 10}}>
          <Card>
            <CardItem style={{justifyContent: 'center'}}>
              <Text
                style={{
                  fontFamily: 'OpenSans-Bold',
                  fontSize: 24,
                }}>
                CARD WITH DIVIDER
              </Text>
            </CardItem>
            <SafeAreaView>
              <FlatList
                numColumns={1}
                data={people}
                renderItem={({item}) => (
                  <TouchableOpacity>
                    <View
                      style={{
                        borderBottomColor: '#ddd',
                        borderBottomWidth: 0.2,
                        height: 50,
                        paddingHorizontal: 15,
                        alignItems: 'center',
                        flexDirection: 'row',
                      }}>
                      <View>
                        <Image
                          style={styles.dp}
                          resizeMode={'cover'}
                          source={{
                            uri: item.loc,
                          }}
                        />
                      </View>
                      <Text
                        style={{
                          fontFamily: 'OpenSans-Regular',
                          fontSize: 20,
                          paddingLeft: 10,
                        }}>
                        {item.name}
                      </Text>
                    </View>
                  </TouchableOpacity>
                )}
              />
            </SafeAreaView>
          </Card>
        </View>
      </Content>
      <Footer style={{backgroundColor: 'white'}}>
        <FooterTab
          style={{
            backgroundColor: '#333',
          }}>
          <Button vertical>
            <Icon name="apps" />
            <Text>Apps</Text>
          </Button>
          <Button vertical>
            <Icon name="camera" />
            <Text>Camera</Text>
          </Button>
          <Button vertical active style={{backgroundColor: 'coral'}}>
            <Icon active name="list" />
            <Text>Navigate</Text>
          </Button>
          <Button vertical>
            <Icon name="person" />
            <Text>Contact</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C8A98C',
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  dp: {height: 40, width: 40},
});
