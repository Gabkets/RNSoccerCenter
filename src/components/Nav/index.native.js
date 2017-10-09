import React from "react";
import { Link } from "react-router-native";
import { Text, View, StyleSheet } from "react-native";

const Nav = props => {
  return (
    <View style={styles.nav}>
      <Link to="/" underlayColor="#d3d3d3" style={styles.navItem}>
        <Text style={styles.navText}>Home</Text>
      </Link>

      <Link to="/Competitions" underlayColor="#d3d3d3" style={styles.navItem}>
        <Text style={styles.navText}>Competitions</Text>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  nav: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10
  },
  navText: {
    fontWeight: "bold"
  }
});

export default Nav;
