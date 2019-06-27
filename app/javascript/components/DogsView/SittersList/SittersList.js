import React from "react"
import PropTypes from "prop-types"
import "./SittersList.scss"
class SittersList extends React.Component {
  render () {
    return (
      <React.Fragment>
      <div className= "sitters-wrap">
      <p className = "sitters-title">Sitters</p>
        <ul className = "sitters-list">
          <li className = "sitter-item">
            <div className="sitter">
            <div className="sitter-profile-picture">
            </div>
            <div className="sitter-info">
              <p>Lala Po</p>
              <button className="request-button">request</button>
            </div>
            </div>
          </li>
          <li className = "sitter-item">
          <div className="sitter">
          <div className="sitter-profile-picture">
          </div>
          <div className="sitter-info">
            <p>Lala Po</p>
            <button className="request-button">request</button>
          </div>
          </div>
        </li>
        <li className = "sitter-item">
        <div className="sitter">
        <div className="sitter-profile-picture">
        </div>
        <div className="sitter-info">
          <p>Lala Po</p>
          <button className="request-button">request</button>
        </div>
        </div>
      </li>
      <li className = "sitter-item">
      <div className="sitter">
      <div className="sitter-profile-picture">
      </div>
      <div className="sitter-info">
        <p>Lala Po</p>
        <button className="request-button">request</button>
      </div>
      </div>
    </li>
        </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default SittersList
