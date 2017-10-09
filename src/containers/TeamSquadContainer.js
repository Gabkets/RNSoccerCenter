import React, { Component } from "react";
import TeamSquad from "../components/TeamSquad";
import { connect } from "react-redux";
import { fetchSelectedTeamPlayers } from "../actions";

class TeamSquadContainer extends Component {
  componentDidMount() {
    this.props.fetchSelectedTeamPlayersLocal(this.props.selectedTeamId);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.selectedTeamId !== this.props.selectedTeamId)
      this.props.fetchSelectedTeamPlayersLocal(this.props.selectedTeamId);
  }

  render() {
    return <TeamSquad {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    selectedTeamId: state.selectedTeamId,
    selectedTeamName: state.selectedTeamName,
    players: state.selectedTeamPlayers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSelectedTeamPlayersLocal: selectedTeamId =>
      dispatch(fetchSelectedTeamPlayers(selectedTeamId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamSquadContainer);
