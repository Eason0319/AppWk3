import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import BookDetail from "./BookDetail";
import section from "../json/book_section.json";

const Booklist = ({navigation}) => {
  

  return (
    <View style={styles.section}>
      <Text style={styles.sectionHeader}>
        {section[0].title}
      </Text>
      <FlatList
        horizontal={true}
        data={section[0].data}
        renderItem={({item}) => <BookDetail album={item}  navigation={navigation}/>}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16, paddingLeft: 0 }}
        keyExtractor={item => item.title}
      />
      <Text style={styles.sectionHeader}>
        {section[1].title}
      </Text>
      <FlatList
        horizontal={true}
        data={section[1].data}
        renderItem={({item}) => <BookDetail album={item} navigation={navigation}/>}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16, paddingLeft: 0 }}
        keyExtractor={item => item.title}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  section: {
    marginLeft: 20,
  },
  sectionHeader: {
    fontWeight: 'bold',
    fontSize: 24,
    paddingTop: 8
  }
})

export default Booklist;
