import React from "react"
import PropTypes from "prop-types"
import "./DogsView.scss"
import DogCard from "./DogCard/DogCard"
import SittersList from "./SittersList/SittersList"
class DogsView extends React.Component {
  render () {
    return (
      <div className = "dogs-view">
        <div>
        <p className = "column-title">My Dogs</p>
          <DogCard/>
          <DogCard/>
          <DogCard/>
        <p className = "column-title">Dogs in Office</p>
          <DogCard/>
          <DogCard/>
          <DogCard/>
        </div>
        <div>
          <SittersList/>
        </div>
      </div>
    );
  }
}

export default DogsView
