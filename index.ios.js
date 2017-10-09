import React, { Component } from "react";
import { AppRegistry } from "react-native";

import configureStore from "./src/configureStore";
import { Provider } from "react-redux";
import App from "./src/components/App";

const store = configureStore();

export default class RNSoccerCenter extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent("RNSoccerCenter", () => RNSoccerCenter);
