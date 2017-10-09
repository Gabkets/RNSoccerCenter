import React, { Component } from "react";
import Fixture from "../components/Fixture";
import { connect } from "react-redux";
import { getFixtureById } from "../actions.js";

class FixtureContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seeFinished: true
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    if (id) {
      console.log("id de competicion es: " + id);
      this.props.fetchFixtureById(id);
    }
  }

  handleClick = flag => {
    this.setState({
      seeFinished: flag
    });
  };
  
  render() {
    return <Fixture {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    fixtureMatches: state.fixtureMatches,
    loading: state.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchFixtureById: id => {
      return dispatch(getFixtureById(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FixtureContainer);
