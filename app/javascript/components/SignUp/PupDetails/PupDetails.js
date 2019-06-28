import React from "react"
import PropTypes from "prop-types"
import "./PupDetails.scss";
class PupDetails extends React.Component {

	render(){
		return (
			<div class="details-wrap">
				<div class="title-label">
					<p class="title">Sign up your dog now!</p>
					<p class="title-sub">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					</p>
					</div>

					<div>
					<p class="input-title">Bio</p>
					<textarea class = "form-input" name=""></textarea>
					<div class="extra-details">
					<div>
						<p class="input-title">Likes (Use commas)</p>
						<textarea></textarea>
					</div>
					<div>
						<p class="input-title">Dislikes (Use commas)</p>
						<textarea></textarea>
					</div>
					<div>
						<p class="input-title">Emergency contact</p>
						<input type="" name=""/>
					</div>
					<div>
						<p class="input-title">Notes</p>
						<textarea></textarea>
					</div>
				</div>
				</div>
			</div>
);
	}
}