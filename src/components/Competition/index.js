import React from "react";

import { connect } from "react-redux";
import { getLeagueTableById } from "../actions.js";

import PosTable from "./PosTable";
import TeamSquadContainer from "../../conteiners/TeamSquad";
import Loader from "./Loader";

class Competition extends React.Component {
  render() {
    return (
      <div>

        {this.props.loading
          ? <Loader />
          : <div>
              <p className="competition-list-title">
                Tabla de {this.props.leagueTable.leagueCaption}
              </p>
              <PosTable teams={this.props.leagueTable.standing} />

              {this.props.selectedTeamId > 0 && <TeamSquadContainer />}

            </div>}
      </div>
    );
  }
}

export default Competition;
