import React from "react";
import { StyleSheet, ScrollView, FlatList, Text, View } from "react-native";

const PosTableRow = (props) => {
    return (
      <View style={styles.tablerow}>
        <Text  style={styles.tableTd1}>{props.position}</Text>
        <Text style={styles.tableTd3}>{props.teamName}</Text>
        <Text  style={styles.tableTd1}>{props.wins}</Text>
        <Text style={styles.tableTd1}>{props.draws}</Text>
        <Text style={styles.tableTd1}>{props.losses}</Text>
        <Text style={styles.tableTd1}>{props.goals}</Text>
        <Text style={styles.tableTd1}>{props.goalsAgainst}</Text>
        <Text style={styles.tableTd1}>{props.goalDifference}</Text>
        <Text style={styles.tableTd1}>{props.playedGames}</Text>
        <Text style={styles.tableTd1}>{props.points}</Text>
        <Text  style={styles.tableTd1}>+</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  tablerow: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 10,
    flexDirection:  'row',
    justifyContent: 'center'
  },
  tableTd1: {
    flex: 1,
    textAlign : 'center'
  },
  tableTd3: {
    flex: 3,
    textAlign : 'left'
  }
});
export default PosTableRow;
