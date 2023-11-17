import React from "react";
import { View } from "react-native";
import { Text, TextInput } from "react-native-paper";
import { Button } from "react-native-paper";

const Details = ({ navigation }) => {
  //enter note info here
  return (
    <View>
      <TextInput label={"Title"} />

      <TextInput
        label={"Your Notes"}
        multiline={true}
        numberOfLines={10}
        style={{ height: 200, textAlignVertical: "top", margin: "0 10" }}
      />
      <Button>Save</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  m: {
    marginBottom: 5,

    // minWidth: "100%",
  },
});

export default Details;
