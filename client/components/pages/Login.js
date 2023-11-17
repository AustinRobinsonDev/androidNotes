import React from "react";
import { View } from "react-native";
import { TextInput } from "react-native-paper";

const Login = () => {
  return (
    <View>
      Login
      <TextInput label={"Email"} />
      <TextInput label={"Password"} />
      <Button>Submit</Button>
    </View>
  );
};

export default Login;
