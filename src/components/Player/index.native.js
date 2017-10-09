import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View } from "react-native";

const Player = props => {
  return (
    <View>
        <View>
          <Text>{props.name}</Text>
        </View>
        <View>
            <Text>Position: {props.position}</Text>
        </View>
        <View>
          <Text>Nationality: {props.nationality}</Text>
        </View>
    </View>
  );
};

export default Player;

Player.propTypes = {
  name: PropTypes.string,
  position: PropTypes.string,
  nationality: PropTypes.string,
  avatarUrl: PropTypes.string
};

Player.defaultProps = {
  name: "Not found",
  position: "Not found",
  nationality: "Not found",
  avatarUrl: ""
};
