import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { Searchbar } from "react-native-paper";
import { FAB } from "react-native-paper";
import NoteCard from "../NoteCard";
import NoteList from "../NoteList";

const Home = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.search}
      />
      <ScrollView>
        <NoteList />
      </ScrollView>
      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => {
          console.log("Pressed");
          navigation.navigate("Details");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "space-between",
    // minWidth: "100%",
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
  search: {
    marginBottom: 15,
  },
});

export default Home;
