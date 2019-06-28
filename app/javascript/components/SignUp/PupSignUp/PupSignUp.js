import React from "react"
import PropTypes from "prop-types"
import "./PupSignUp.scss";
class PupSignUp extends React.Component {

	render(){
		return (
			<div>
	<div class="title-label">
		<p class="title">Sign up your dog now!</p>
		<p class="title-sub">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		</p>
	</div>
	<div class="form">
		<p class="input-title">Your fill name</p>
		<input class = "form-input"type="" name=""/>
		<p class="input-title">Email</p>
		<input class = "form-input"type="email" name=""/>
		<p class="input-title">Password</p>
		<input class = "form-input"type="password" name=""/>
		<div class="sub-form">
			<button class="button sign-up-button">Sign up</button>
			<button class="already-signed-up">Already signed up sign in here</button>
		</div>
	</div>
</div>)
	}
}