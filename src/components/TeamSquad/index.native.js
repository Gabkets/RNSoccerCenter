import React from "react";
import Player from "./Player";
import { connect } from "react-redux";


class TeamSquad extends React.Component {
  render() {
    return (
      <div>
        {this.props.players.length === 0
          ? <h1> No players found for team {this.props.selectedTeamName}</h1>
          : <div>
              <h1 className="players-title">
                Team {this.props.selectedTeamName}
              </h1>
              <div className="players-container">

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
              </div>
            </div>}
      </div>
    );
  }
}

export default TeamSquad;
