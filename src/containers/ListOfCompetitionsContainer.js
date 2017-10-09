import React, { Component } from "react";
import ListOfCompetitions from "../components/ListOfCompetitions";
import { connect } from "react-redux";
import { getCompetitions } from "../actions.js";

class ListOfCompetitionsContainer extends Component {
  componentDidMount() {
    this.props.fetchCompetitions();
  }
  render() {
    return <ListOfCompetitions {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    competitions: state.competitions,
    loading: state.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCompetitions: () => {
      return dispatch(getCompetitions());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  ListOfCompetitionsContainer
);
