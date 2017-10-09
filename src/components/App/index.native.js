import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NativeRouter, Route, Switch } from "react-router-native";

import Nav from "../Nav";
import ListOfCompetitionsContainer from "../../containers/ListOfCompetitionsContainer";
import CompetitionContainer from "../../containers/CompetitionContainer";

const App = props =>
  <NativeRouter>
    <View style={styles.container}>
      <Nav />
      <Switch>
        <Route path="/Competitions" component={ListOfCompetitionsContainer} />
        <Route path="/Competition/:id" component={CompetitionContainer} />
      </Switch>
    </View>
  </NativeRouter>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke"
  },
  todo: {
    backgroundColor: "red"
  }
});

export default App;
