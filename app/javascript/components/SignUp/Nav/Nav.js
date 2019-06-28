import React from "react"
import PropTypes from "prop-types"
import "./Nav.scss";
class Nav extends React.Component {

	render() {
		return (
			<div className = "nav-wrap" >
        <div className = "nav-background">
        
        </div>
          <ul className 	= "nav-list" >
            <li id = "profile-label" class 	= "highlighted" >
            Name
            </li>
            <li id = "info-label" >
            Name
            </li>
            <li id = "details-label" >
            Name </li>
            <li id = "confirm-label" >
            Name
            </li>
          </ul>
			</div>);
	}
}

export default Nav

