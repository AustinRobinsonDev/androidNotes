import React from "react";
import NoteCard from "./NoteCard";
import { StyleSheet, Text, View } from "react-native";

const NoteList = () => {
  // map out note cards here
  return (
    <View>
      <NoteCard />
      <NoteCard />
      <NoteCard />
    </View>
  );
};

export default NoteList;
