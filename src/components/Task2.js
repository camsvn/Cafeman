import React, {Component} from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Title,
} from 'native-base';

class Editicon extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.editContainer}>
        <Image
          style={styles.editButton}
          source={require('../assets/img/edit_icon.png')}
        />
      </TouchableOpacity>
    );
  }
}

class Task2 extends Component {
  render() {
    return (
      <Container style={{backgroundColor: '#F2E8CD'}}>
        <Header style={{backgroundColor: '#4d4936', elevation: 20}}>
          <StatusBar backgroundColor="#4d4936" barStyle="dark-content" />
          <Body>
            <Title style={styles.header}>PROFILE</Title>
          </Body>
        </Header>
        <Content padder>
          <Card style={styles.firstCard}>
            <CardItem>
              <Text />
              <Editicon />
            </CardItem>
            <CardItem>
              <Image
                style={styles.image}
                resizeMode={'cover'}
                source={{
                  uri:
                    'https://s-media-cache-ak0.pinimg.com/736x/43/cd/6e/43cd6e82491bf130d97624c198ee1a3f--funny-movie-quotes-funny-movies.jpg',
                }}
              />
              <View style={{flex: 1, alignItems: 'center'}}>
                <Text style={styles.nameHeading}>Amal Salvin</Text>
              </View>
            </CardItem>
          </Card>
          <Card>
            <CardItem bordered>
              <Text style={styles.cardTitle}>CONTACT INFORMATION</Text>
              <Editicon />
            </CardItem>
            <CardItem bordered>
              <Body>
                <View style={styles.dataContainer}>
                  <Text style={styles.dataTitle}>GENDER</Text>
                  <Text style={styles.dataContent}>Male</Text>
                </View>
                <View style={styles.dataContainer}>
                  <Text style={styles.dataTitle}>EMAIL ID</Text>
                  <Text style={styles.dataContent}>
                    amalsalvin@adihptham.com
                  </Text>
                </View>
                <View style={styles.dataContainer}>
                  <Text style={styles.dataTitle}>CONTACT NUMBER</Text>
                  <Text style={styles.dataContent}>+91 7026 244 669</Text>
                </View>
                <View style={styles.dataContainer}>
                  <Text style={styles.dataTitle}>ADDRESS</Text>
                  <Text style={styles.dataContent}>
                    #987/61, 8th Main Road, Mariyappanapalya, Bangalore - 560021
                  </Text>
                </View>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem bordered>
              <Text style={styles.cardTitle}>COFFEE PREFERENCE</Text>
              <Editicon />
            </CardItem>
            <CardItem bordered>
              <Body>
                <View style={styles.dataContainer}>
                  <Text style={styles.dataTitle}>MORNING</Text>
                  <Text style={styles.dataContent}>Expresso</Text>
                </View>
                <View style={styles.dataContainer}>
                  <Text style={styles.dataTitle}>AFTERNOON</Text>
                  <Text style={styles.dataContent}>Latte</Text>
                </View>
                <View style={styles.dataContainer}>
                  <Text style={styles.dataTitle}>EVENING</Text>
                  <Text style={styles.dataContent}>Cold Coffee</Text>
                </View>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default Task2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    left: 10,
    color: '#F2E8CD',
    fontFamily: 'OpenSans-Light',
  },
  editContainer: {
    width: 20,
    height: 20,
    position: 'absolute',
    right: 15,
  },
  editButton: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
  image: {
    position: 'absolute',
    height: 100,
    width: 100,
    top: -90,
    left: 130,
    borderRadius: 50,
    borderColor: '#ddd',
    borderWidth: 2,
  },
  firstCard: {
    marginTop: 50,
  },
  nameHeading: {
    fontSize: 30,
    fontFamily: 'OpenSans-Bold',
  },
  cardTitle: {
    fontFamily: 'OpenSans-Bold',
    color: '#777',
  },
  dataContainer: {
    marginBottom: 20,
  },
  dataTitle: {
    fontFamily: 'OpenSans-Bold',
  },
  dataContent: {
    color: '#777',
    fontFamily: 'OpenSans-Light',
  },
});
