import React from "react";
import { Table } from "react-bootstrap";
import { StyleSheet, FlatList, Text, View } from "react-native";
import PosTableRowContainer from "../../containers/PosTableRowContainer";

//<table className="pos-table">

const getId = team => {
  const parts = team._links.team.href.split("/");
  return parts[parts.lengText - 1];
};

const PosTable = (props) => {
    return (
      <View>
        <View style={styles.tableHead}>
          <Text style={styles.tableTh1}>P</Text>
          <Text style={styles.tableTh3}>T</Text>
          <Text style={styles.tableTh1}>W</Text>
          <Text style={styles.tableTh1}>D</Text>
          <Text style={styles.tableTh1}>L</Text>
          <Text style={styles.tableTh1}>G</Text>
          <Text style={styles.tableTh1}>GA</Text>
          <Text style={styles.tableTh1}>GD</Text>
          <Text style={styles.tableTh1}>PM</Text>
          <Text style={styles.tableTh1}>P</Text>
          <Text style={styles.tableTh1}> + </Text>
        </View>
        <View>
        <FlatList
          data={props.teams}
          keyExtractor={(item) => item.position}
          renderItem={
            listItem => {
              let team = listItem.item;

              return(
                <PosTableRowContainer
                  id={getId(team)}
                  position={team.position}
                  teamName={team.teamName}
                  wins={team.wins}
                  draws={team.draws}
                  losses={team.losses}
                  goals={team.goals}
                  goalsAgainst={team.goalsAgainst}
                  goalDifference={team.goalDifference}
                  playedGames={team.playedGames}
                  points={team.points}
                />
              );
            } } />
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  tableHead: {
    flexDirection:  'row',
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 10,
    backgroundColor: '#eee',
    justifyContent: 'center'
  },
  tableTh1: {
    flex: 1,
    textAlign : 'center'
  },
  tableTh3: {
    flex: 3,
    textAlign : 'center'
  }
});

export default PosTable;

PosTable.defaultProps = {
  teams: []
};
