import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Row extends Component {
  render() {
    const {title} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between"
  },
  text: {
    fontSize: 16,
    color: "#4d4d4d"
  }
})