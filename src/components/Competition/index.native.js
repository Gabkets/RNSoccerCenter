import React from "react";
import { Link } from "react-router-native";
import { StyleSheet, Text, View } from "react-native";
import PosTable from '../PosTable';

const Competitions = props => {
  return (
    <View>
      {props.loading
        ? <Text>LOADING</Text>
        : <View>
            <Text style={styles.header}>
              Tabla de {props.leagueTable.leagueCaption}
            </Text>
            <PosTable teams={props.leagueTable.standing} />
          </View>
        }
    </View>
  );
};

const styles = StyleSheet.create({
  header : {
    fontSize: 18,
    padding: 10,
    backgroundColor: '#ccc',
    textAlign: 'center'
  }
});

export default Competitions;
