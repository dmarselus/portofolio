import React, { useState } from 'react';
import './Profile.css';
import SVG from '../../Assets/profile.svg';

export default function Profile() {
	return (
		<div className="profile">
			<h1>A Little About Me</h1>
			<hr className="solid" />
			<div className="profile-content">
				<h3>
					I'm a Software Developer who's currently focused on Front End Development. I have some experiences
					in Development in general that I got from self-learning, school experience, and professional
					experience.
					<br />
					<br />
					I spent the first 4 years in this industry to learn everything related to the Computer Science
					world, and decided to focus on Development this past couple years. I chose JavaScript as my to-go
					language for this career, simply because I find JavaScript is modern, simple and powerful. I got
					introduced with NodeJS back in 2018 and started to learn everything about it since then.
					<br />
					<br />
					These days I spend my time working on a full time (current job) project as well as my own side
					project (project that I found interesting to work with), because I think the fastest way to learn is
					learning by doing.
				</h3>

				<img src={SVG} height="500px" />
			</div>
			<br />
			<a
				className="link"
				href="https://drive.google.com/file/d/1-7aUwoldj_TrGREgRWO_K0BwoWBIeKtc/view"
				target="_blank"
			>
				Résumé ➞
			</a>
		</div>
	);
}
