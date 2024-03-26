import React from "react";
import { StyleSheet, View, Image } from "react-native";

const Star = ({star}) => {
  let starList = [];

  for(let i=1;i<=5;i++){
    if (star>=i){
      starList.push(<Image source={require('../img/star.png')} style={styles.stars} key={i}/>)
    }
  }

  return (
    <View style={styles.starList}>
      {starList}
    </View>
  );  
};

const styles = StyleSheet.create({
  starList: {
    flexDirection: "row"
  },
  stars: {
    marginRight: 4
  }
})
export default Star;