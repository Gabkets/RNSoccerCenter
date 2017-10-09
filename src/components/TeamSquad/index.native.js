import React from "react";
import Player from "../Player";
import { connect } from "react-redux";
import { StyleSheet, Text, View } from "react-native";

const TeamSquad = props => {
  return (
    <View>
        <Text>Team</Text>
    </View>
  );
}

export default TeamSquad;


/*
{this.props.players.length === 0
  ? <Text> No players found for team {this.props.selectedTeamName}</Text>
  : <View>
      <Text>
        Team {this.props.selectedTeamName}
      </Text>
      <View>
        {this.props.players.map((player, index) => {
          return (
            <Player
              key={index}
              name={player.name}
              nationality={player.nationality}
              position={player.position}
            />
          );
        })}

      </View>
    </View>}

*/
