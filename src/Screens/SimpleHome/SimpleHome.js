import React from 'react';
import { Card, Banner } from './Components';
import { EDUCATIONS, PROJECTS } from './Constant';

export default function SimpleHome() {
	return (
		<div className="simple-home">
			<Banner />
			<Card content={EDUCATIONS} rightIcon />
			<Card content={PROJECTS} />
		</div>
	);
}
