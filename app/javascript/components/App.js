import React from "react"
import PropTypes from "prop-types"
import "./App.scss";
import UserItem from "./Extra/UserItem/UserItem";
import DogsView from "./DogsView/DogsView";
import SignUp from "./SignUp/SignUp";
import {BrowserRouter as Router, Route} from "react-router-dom";

class App extends React.Component {
  render(){
    return (
      <div id = "app">
      <UserItem/>
      <div className="app-wrap">
        <Router>
          <Route exact path='/' component={SignUp} />
          <Route exact path='/dogsview' component={DogsView} />
        </Router>,
      </div>
      </div>
);
  }
}

export default App
