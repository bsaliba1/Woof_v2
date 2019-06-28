import React from "react"
import PropTypes from "prop-types"
import "./DogsView.scss"
import DogCard from "./DogCard/DogCard"
import SittersList from "./SittersList/SittersList"
class DogsView extends React.Component {
  render () {
    return (
        <div className = "dogs-view">
        <div className = "title-label">
            <p className ="title">Sign up your dog now!</p>
            <p className ="title-sub">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod </p>
        </div>
        <div className="dogs-grid">
          <DogCard/>
          <DogCard/>
          <DogCard/>
          <DogCard/>
          <DogCard/>
          <DogCard/>
        </div>
      </div>
    );
  }
}

export default DogsView
