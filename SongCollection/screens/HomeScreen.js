import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {songData} from '../data/SongData';
import SongComponent from '../component/SongComponent';

const HomeScreen = () => {
  return (
    <FlatList
      data={songData}
      keyExtractor={item => item.id}
      renderItem={({item}) => {
        return (
          <SongComponent
            singer={item.singer}
            title={item.title}
            rating={item.rating}
            genre={item.genre}
            imageLink={item.imageLink}
            year={item.year}
            songwriters={item.songwriters}
          />
        );
      }}
    />
  );
};

export default HomeScreen;
