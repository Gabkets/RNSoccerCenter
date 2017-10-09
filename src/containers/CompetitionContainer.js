import React, { Component } from "react";
import Competition from "../components/Competition";
import { connect } from "react-redux";
import { getLeagueTableById } from "../actions.js";

class CompetitionContainer extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    if (id) {
      console.log("id de competicion es: " + id);
      this.props.fetchLeagueTableById(id);
    }
  }
  render() {
    return <Competition {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    leagueTable: state.leagueTable,
    selectedTeamId: state.selectedTeamId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchLeagueTableById: id => {
      return dispatch(getLeagueTableById(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  CompetitionContainer
);
