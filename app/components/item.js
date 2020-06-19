import React from "react";
import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Item(props) {
  return (
    <View key={props.keyval} style={styles.note}>
      <Text style={styles.dateText}>{props.val.date}</Text>
      <Text style={styles.noteText}>{props.val.note}</Text>
      <TouchableOpacity onPress={props.deleteMethod} style={styles.noteDelete}>
        <Text style={styles.noteDeleteText}>X</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  dateText: {
    paddingLeft: 20,
    borderLeftWidth: 10,
    borderLeftColor: "#E91E63",
    fontSize: 8,
  },
  note: {
    position: "relative",
    padding: 20,
    paddingRight: 100,
    borderBottomWidth: 2,
    borderBottomColor: "#ededed",
  },
  noteText: {
    paddingLeft: 20,
    borderLeftWidth: 10,
    borderLeftColor: "#E91E63",
  },
  noteDelete: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2980b9",
    padding: 10,
    right: 10,
    borderRadius: 100,
    height: 25,
    width: 25,
  },
  noteDeleteText: {
    color: "white",
  },
});
