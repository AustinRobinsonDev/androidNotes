import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { Button } from "react-native-paper";

const Details = ({ navigation }) => {
  //enter note info here
  return (
    <View>
      <Text>Details Page</Text>
      {/* <Button
        mode='contained'
        onPress={() => navigation.navigate('Home')}
      >Go to Details</Button> */}
    </View>
  );
};

export default Details;
