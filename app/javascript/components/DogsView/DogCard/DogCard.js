import React from "react"
import PropTypes from "prop-types"
import "./DogCard.scss";
class DogCard extends React.Component {
  render () {
    return (
      <React.Fragment>
      <div className = "dog-card">
        <div className="dog-picture-wrap">
          <div className = "dog-picture">
          </div>
          <p className="dog-info-main">Bobby</p>
        </div>
        <div className="dog-info">
          <div className = "dog-info-extra">
            <p>A</p>
            <p>B</p>
            <p>C</p>
          </div>
        </div>
      </div>
      </React.Fragment>
    );
  }
}

export default DogCard
