import React from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import Loader from "./Loader";

class Fixture extends React.Component {
  render() {
    const filteredMatches = this.props.fixtureMatches.filter(match => {
      if (this.state.seeFinished) return match.status === "FINISHED";
      else return match.status !== "FINISHED";
    });

    return (
      <div className="competition-list-container">
        <p className="competition-list-title">Fixture</p>
        <div>
          <label style={{ width: "100%" }}>
            Finished Games
            <input
              style={{ marginLeft: "10px", marginRight: "10px" }}
              type="radio"
              name="fixture-type"
              checked={this.state.seeFinished}
              onChange={() => this.handleClick(true)}
            />
          </label>
          <label style={{ width: "100%" }}>
            Pending Games
            <input
              style={{ marginLeft: "10px", marginRight: "10px" }}
              type="radio"
              name="fixture-type"
              checked={!this.state.seeFinished}
              onChange={() => this.handleClick(false)}
            />
          </label>
        </div>
        {this.props.loading
          ? <Loader />
          : <ul>
              {filteredMatches.map((match, index) => {
                return (
                  <li key={index}>
                    <div className="competition-container">
                      <div className="competition-title">
                        {"State: " + match.status}
                      </div>
                      <div>
                        {match.homeTeamName + " - " + match.awayTeamName}
                      </div>
                      {match.status === "FINISHED"
                        ? <div>
                            {match.result.goalsHomeTeam +
                              " - " +
                              match.result.goalsAwayTeam}
                          </div>
                        : <div>
                            Pending
                          </div>}
                      {}
                    </div>
                  </li>
                );
              })}
            </ul>}

      </div>
    );
  }
}

export default Fixture;
