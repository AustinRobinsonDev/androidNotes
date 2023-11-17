import React from "react";
import {
  Text,
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
} from "react-native-paper";
import { StyleSheet, View } from "react-native";

const NoteCard = () => {
  const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

  return (
    <View>
      <Card>
        <Card.Title
          title="Card Title"
          subtitle="Card Subtitle"
          left={LeftContent}
        />
        <Card.Content>
          <Title>Card title</Title>
          <Paragraph>Card content</Paragraph>
        </Card.Content>
        {/* <Card.Cover source={{ uri: "https://picsum.photos/700" }} /> */}
        <Card.Actions>
          <Button>Edit</Button>
          {/* <Button>Ok</Button> */}
        </Card.Actions>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  m: {
    marginBottom: 5,

    // minWidth: "100%",
  },
});

export default NoteCard;
