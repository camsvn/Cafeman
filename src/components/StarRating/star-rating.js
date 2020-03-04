import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';

export default class StarRating extends Component {
  render() {
    // Recieve the ratings object from the props
    const ratingObj = {
      ratings: 4,
      views: '5 months ago',
    };

    // let ratingObj = this.props.ratingObj;

    // This array will contain our star tags. We will include this
    // array between the view tag.
    let idcount = 0;
    let stars = [];
    // Loop 5 times
    for (var i = 1; i <= 5; i++) {
      // set the path to filled stars
      let path = require('./star-filled.png');
      // If ratings is lower, set the path to unfilled stars
      if (i > ratingObj.ratings) {
        path = require('./star-unfilled.png');
      }

      stars.push({
        name: (
          <TouchableOpacity>
            <Image style={styles.image} source={path} />
          </TouchableOpacity>
        ),
        key: (idcount += 1),
      });
    }
    let rating = stars;
    return (
      <View style={styles.container}>
        {/* {rating.map(item => console.log(item))} */}
        {/* {stars} */}
        {rating.map(item => item.name)}
        <Text style={styles.text}>{ratingObj.views}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 20,
    height: 20,
  },
  text: {
    fontFamily: 'OpenSans-Light',
    fontSize: 18,
    marginLeft: 10,
    marginRight: 10,
  },
});
