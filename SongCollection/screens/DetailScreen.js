import {View, Text, Image, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {songData} from '../data/SongData';
import HomeScreen from './HomeScreen';
import SongComponent from '../component/SongComponent';

const DetailScreen = props => {
  const {route} = props;
  const {title, singer, year, rating, genre, imageLink, songwriters} =
    route.params;

  useEffect(() => {
    console.log(title, singer, year, rating, genre, imageLink, songwriters);
  }, []);

  return (
    <View style={styles.mainContainer}>
      <Image style={styles.imageStyle} source={{uri: imageLink}} />
      <Text style={styles.titleContainer}>{title}</Text>
      <View style={styles.externContainer}>
        <View style={styles.nameContainer}>
          <Text>Singer </Text>
        </View>
        <Text>: </Text>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>{singer}</Text>
        </View>
      </View>

      <View style={styles.externContainer}>
        <View style={styles.nameContainer}>
          <Text>Year</Text>
        </View>
        <Text>: </Text>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>{year}</Text>
        </View>
      </View>

      <View style={styles.externContainer}>
        <View style={styles.nameContainer}>
          <Text>Genre</Text>
        </View>
        <Text>: </Text>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>{genre}</Text>
        </View>
      </View>

      <View style={styles.externContainer}>
        <View style={styles.nameContainer}>
          <Text>Songwriters </Text>
        </View>
        <Text>: </Text>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>{songwriters}</Text>
        </View>
      </View>

      <View style={styles.externContainer}>
        <View style={styles.nameContainer}>
          <Text>Rating</Text>
        </View>
        <Text>: </Text>
        <View style={styles.descriptionContainer}>
          {rating === 5 ? (
            <Image
              style={styles.ratingImage}
              source={require('../assets/images/five-stars.png')}
            />
          ) : rating === 4 ? (
            <Image
              style={styles.ratingImage}
              source={require('../assets/images/four-stars.png')}
            />
          ) : rating === 3 ? (
            <Image
              style={styles.ratingImage}
              source={require('../assets/images/three-stars.png')}
            />
          ) : rating === 2 ? (
            <Image
              style={styles.ratingImage}
              source={require('../assets/images/two-stars.png')}
            />
          ) : (
            <Image
              style={styles.ratingImage}
              source={require('../assets/images/star.png')}
            />
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    margin: 16,
  },
  imageStyle: {
    width: 200,
    height: 200,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'salmon',
  },
  titleContainer: {
    marginTop: 8,
    marginBottom: 16,
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  ratingImage: {
    width: 100,
    height: 20,
  },
  externContainer: {
    flexDirection: 'row',
    marginTop: 8,
    marginBottom: 8,
  },
  nameContainer: {
    flex: 1,
  },
  descriptionContainer: {
    flex: 3,
  },
  descriptionText: {
    textAlign: 'justify',
  },
});

export default DetailScreen;
