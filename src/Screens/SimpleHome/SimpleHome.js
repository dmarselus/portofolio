import React from 'react';
import { Card, Banner } from './Components';
import { EDUCATIONS, PROJECTS } from './Constant';
import './SimpleHome.css';
export default function SimpleHome() {
	return (
		<div>
			<Banner />
			<div className="simple-home">
				<Card content={EDUCATIONS} rightIcon />
				<hr className="solid" />
				<Card content={PROJECTS} />
			</div>
		</div>
	);
}
