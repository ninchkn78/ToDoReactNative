import React, { useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
} from "react-native";
import Item from "./item";

export default function Main() {
  const [noteArray, setNoteArray] = useState([]);
  const [noteText, setNoteText] = useState("");

  let notes = noteArray.map((val, key) => {
    return (
      <Item
        key={key}
        keyval={key}
        val={val}
        deleteMethod={() => deleteNote(key)}
      />
    );
  });
  function addNote() {
    if (noteText) {
      let d = new Date();
      noteArray.push({
        date: d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate(),
        note: noteText,
      });
      console.log(noteText);
      setNoteArray(noteArray);
      setNoteText("");
    }
  }
  function deleteNote(key) {
    console.log("deleted");
    console.log(key);
    noteArray.splice(key, 1);
    setNoteArray(noteArray);
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>To Do List</Text>
      </View>
      <ScrollView style={styles.scrollContainer}>{notes}</ScrollView>
      <View style={styles.footer}>
        <TextInput
          style={styles.textInput}
          onChangeText={(Text) => setNoteText(Text)}
          value={noteText}
          placeholder="Add an Item"
          placeholderTextColor="grey"
          underlineColorAndroid="transparent"
        ></TextInput>
      </View>

      <TouchableOpacity style={styles.addButton} onPress={addNote}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#E91E63",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 10,
    borderBottomColor: "#ddd",
  },
  headerText: {
    color: "white",
    fontSize: 18,
    padding: 26,
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  textInput: {
    alignSelf: "stretch",
    color: "#fff",
    padding: 20,
    backgroundColor: "#252525",
    borderTopWidth: 2,
    borderTopColor: "#ededed",
  },
  addButton: {
    position: "absolute",
    zIndex: 11,
    right: 20,
    bottom: 90,
    backgroundColor: "#E91E63",
    width: 90,
    height: 90,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    elevation: 8,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 24,
  },
});
