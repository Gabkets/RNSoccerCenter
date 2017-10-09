import React from "react";
import { Link } from "react-router-dom";

import Loader from "./Loader";

const ListOfCompetitions = props => {
  return (
    <div className="competition-list-container">
      <p className="competition-list-title">Available Competitions</p>
      {props.loading
        ? <Loader />
        : <ul>
            {props.competitions.map((competition, index) => {
              return (
                <li key={index}>
                  <div className="competition-container">
                    <div className="competition-title">
                      {competition.caption} - {competition.league} -
                      {competition.year}
                    </div>
                    <div>
                      Teams: {competition.numberOfTeams}
                    </div>
                    <div>
                      Progress in matches: {competition.currentMatchday} of
                      {competition.numberOfMatchdays}
                    </div>
                    <div className="competition-date">
                      Last updated: {competition.lastUpdated}
                    </div>
                    <div>
                      <Link
                        to={`/competition/${competition.id}`}
                        className="button"
                      >
                        See positions table
                      </Link>
                    </div>
                    <div>
                      <Link
                        to={`/fixture/${competition.id}`}
                        className="button"
                      >
                        See fixture
                      </Link>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>}

    </div>
  );
};

export default ListOfCompetitions;
