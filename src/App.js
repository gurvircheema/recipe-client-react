import React, { Component } from "react";

import NavigationBar from "./components/navigation/NavigationBar";

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <p>React client for recipes backend</p>
      </div>
    );
  }
}

export default App;
