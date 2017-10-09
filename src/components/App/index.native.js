import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NativeRouter, Route, Switch } from "react-router-native";

import Nav from "../Nav";
import Home from "../Home";
import TeamSquad from "../TeamSquad";
import ListOfCompetitionsContainer from "../../containers/ListOfCompetitionsContainer";
import CompetitionContainer from "../../containers/CompetitionContainer";
import TeamSquadContainer from "../../containers/TeamSquadContainer";

const App = props => {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Competitions" component={ListOfCompetitionsContainer} />
          <Route path="/Competition/:id" component={CompetitionContainer} />
          <Route path="/TeamSquad/:id" component={TeamSquadContainer} />
        </Switch>
      </View>
    </NativeRouter>
  );
};

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
