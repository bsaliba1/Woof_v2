import React from "react"
import PropTypes from "prop-types"
import "./DogCardExtended.scss";
class DogCardExtended extends React.Component {
	render(){
		return (
			<div>
				<div class="dog-ext-info-banner">
					<div class="dog-profile"></div>
					<div class="dog-info">
						<p>Dog name</p>
						<p>Human owner name</p>
						<p>Loerem ehrwrw ewrhew whew rw</p>
						<div>
							<div>
								<p>Birthday</p>
								<p>MM/DD/YY</p>
							</div>
							<div>
								<p>Gender</p>
								<p>Female/male</p>
							</div>
						</div>
					</div>
				</div>
				<div class="dog-ext-info-middle">
					<div>
						<p>Likes</p>
						<ul>
							<li>Like</li>
							<li>Like</li>
							<li>Like</li>
							<li>Like</li>
						</ul>
					</div>
					<div>
						<p>Dislikes</p>
						<ul>
							<li>Dislike</li>
							<li>Dislike</li>
							<li>Dislike</li>
							<li>Dislike</li>
						</ul>
					</div>
					<div>
						<p>Notes</p>
						<p>Lorem lorem afd fds fdsfdsfsdfsf sdfsdfsd fsdfdsfd</p>
					</div>
				</div>
			</div>
);
	}
}