import React from "react"
import PropTypes from "prop-types"
import "./App.scss";
import UserItem from "./Extra/UserItem/UserItem";
import DogsView from "./DogsView/DogsView";
class App extends React.Component {
  render(){
    return (
      <div id = "app">
      <UserItem/>
      <div className="app-wrap">
        <DogsView/>
      </div>
      </div>
);
  }
}

export default App
