import React from "react";
import { View } from "react-native";
import BookList from "../components/BookList";

const AlbumScreen = ({ navigation }) => {
  return (
    <View style={{flex: 1}}>
      <BookList 
        navigation={navigation}
      />
    </View>
  );
};

export default AlbumScreen;
