import React from "react";
import { View } from "react-native";
import { Button, TextInput } from "react-native-paper";

const SignUp = () => {
  return (
    <View>
      Login
      <TextInput label={"Email"} />
      <TextInput label={"Password"} />
      <TextInput label={"Confirm Password"} />
      <Button>Submit</Button>
    </View>
  );
};

export default SignUp;
