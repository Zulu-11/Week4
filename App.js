import React from "react";
import { View, FlatList, Image, Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

const data = [
  {
    name: "Wilbert Bernardi",
    id: "00000069185",
    image: require("./assets/1683797370279.jpg"),
  },
  {
    name: "Raka Satya Wurya Andhika",
    id: "00000070105",
    image: require("./assets/WhatsApp Image 2023-04-03 at 17.38.32.jpg"),
  },
  {
    name: "Richie Rich Kennedy Zakaria",
    id: "00000089613",
    image: require("./assets/Screenshot 2025-02-09 105848.png"),
  },
  {
    name: "Vincent Bryan",
    id: "00000076794",
    image: require("./assets/Screenshot 2025-02-09 110038.png"),
  },
];

const CardItem = ({ item }) => {
  return (
    <Card style={styles.card}>
      <Card.Cover source={item.image} style={styles.image} />
      <Card.Content>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.id}>{item.id}</Text>
      </Card.Content>
    </Card>
  );
};

const App = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CardItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f5f5f5",
  },
  card: {
    marginBottom: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    height: 150,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  id: {
    fontSize: 14,
    color: "gray",
  },
});

export default App;
