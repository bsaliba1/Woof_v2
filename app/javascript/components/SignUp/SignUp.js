import React from "react"
import PropTypes from "prop-types"
import "./SignUp.scss";
import Nav from "./Nav/Nav";
import PupSignUp from "./PupSignUp/PupSignUp";
import PupBasicInfo from "./PupBasicInfo/PupBasicInfo";
import PupDetails from "./PupDetails/PupDetails";

class SignUp extends React.Component {
  render () {
    return (
    	<div class="sign-up-wrap">
			<div class="sign-up-container">
				<Nav/>
				<div class="sign-up-process">
					<PupSignUp/>
				</div>
			</div>
		</div>
    	);
	}
}