import React from "react"
import PropTypes from "prop-types"
import "./PupBasicInfo.scss";
class PupBasicInfo extends React.Component {

	render(){
		return (

				
<div class="basic-info-wrap">
	<div class="title-label">
		<p class="title">Sign up your dog now!</p>
		<p class="title-sub">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		</p>
	</div>

	<div class="basic-info-container">
		<div class="basic-info-input">
		<div class="form">
			<p class="input-title">Your fill name</p>
			<input class = "form-input"type="" name=""/>
			<p class="input-title">Your fill name</p>
			<input class = "form-input"type="" name=""/>
			<p class="input-title">Your fill name</p>
			<input class = "form-input"type="" name=""/>
			<p class="input-title">Gender</p>
			<div class="buttons-wrap">
				<button>Male</button>
				<button>Female</button>
			</div>
		</div>
		</div>
		<div class="basic-info-photo">
		</div>
	</div>
</div>


			)
	}
}

