import React, { Component } from "react";
import { Link } from "react-router-native";
import { StyleSheet, FlatList, Text, View } from "react-native";

const Home = props => {
  return (
    <View style={styles.home}>
        <Text> Checkout our Competitions Page </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  home : {
    flex: 1,
  }
});

export default Home;
