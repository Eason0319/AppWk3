import React from "react";
import { StyleSheet, Text, View, Image, Pressable} from "react-native";
import Star from "./star"

const BookDetail = props => {
   let { album , navigation} = props;
   return (
     <View style={{flexDirection: 'column'}}>
      <View style={styles.cardContainerStyle}>
        <View style={styles.cardSectionStyle}>
         <Pressable onPress={() => navigation.navigate('Detail', album)}>
            <Image
              style={styles.imageStyle}
              source={{uri: album.image}}
            />
          </Pressable>
        </View>
      </View>
      <View style={styles.headerContainerStyle}>
      {album.starDisplay ?
          <View style={styles.Star}>
            <Star star={album.star} />
          </View>
        : null}
        <Text style={styles.headerTitleStyle}>{album.title}</Text>
        <Text style={styles.headerContentStyle}>{album.artist}</Text>
      </View>   
    </View>

  )};

const styles = StyleSheet.create({
  cardContainerStyle: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  },
  headerContainerStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 12,
    width: 130,
  },
  headerTitleStyle: {
    color: '#000',
    marginTop: 16,
    fontSize: 16,
    lineHeight: 18,
    fontWeight: 'bold',
  },
  headerContentStyle: {
    marginTop: 8,
    fontSize: 12,
    fontWeight: '300',
    color: "#131313",
    width: '100%'
  },
  cardSectionStyle: {
    padding: 5,
    backgroundColor: "#fff",
    borderColor: "#ddd",
    
  },
  imageStyle: {
    height: 200,
    width: 140,
  },
  Star: {
    marginTop: 16,
    marginBottom: -8,
  },
});

export default BookDetail;
