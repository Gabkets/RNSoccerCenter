import React, { Component } from "react";
import PosTableRow from "../components/PosTableRow";
import { connect } from "react-redux";
import { selectTeamId } from "../actions.js";

class PosTableRowContainer extends Component {
  render() {
    return <PosTableRow {...this.props} />;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    selectTeamIdLocal: (id, name) => {
      return dispatch(selectTeamId(id, name));
    }
  };
};

export default connect(null, mapDispatchToProps)(PosTableRowContainer);
