import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import {songData} from '../data/SongData';
import {useNavigation} from '@react-navigation/native';

export const SongComponent = props => {
  const {navigation} = props;

  const {singer, title, rating, genre, imageLink, year, songwriters} = props;

  return (
    <View style={styles.dataContainer}>
      <Image style={styles.imageStyle} source={{uri: imageLink}} />
      <View style={styles.infoContainer}>
        <Text style={styles.titleText}>{title}</Text>
        <View style={styles.singerContainer}>
          <Text>{singer}</Text>
        </View>
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
        <View>
          <TouchableOpacity
            style={styles.touchableOpacity}
            onPress={() => navigation.navigate(props.DetailScreen)}>
            <Text style={styles.buttonText}>SEE DETAILS</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dataContainer: {
    margin: 8,
    borderWidth: 2,
    borderColor: '#A6A6BD',
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageStyle: {
    width: 120,
    height: 120,
  },
  infoContainer: {
    marginLeft: 8,
    flex: 1,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  singerContainer: {
    marginTop: 8,
    marginBottom: 8,
  },
  ratingImage: {
    width: 100,
    height: 20,
  },
  buttonContainer: {
    alignItems: 'baseline',
    marginTop: 8,
  },
  touchableOpacity: {
    padding: 8,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#A6A6BD',
    backgroundColor: '#AFCAE8',
  },
  buttonText: {
    color: 'white',
  },
});

export default SongComponent;
