import React from "react"
import PropTypes from "prop-types"
import "./DogsView.scss"
import DogCard from "./DogCard/DogCard"
import SittersList from "./SittersList/SittersList"
class DogsView extends React.Component {
  render () {
    return (
      <div className = "dogs-view">
          <div class="title-label">
    <p class="title">Sign up your dog now!</p>
    <p class="title-sub">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    </p>
  </div>
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
