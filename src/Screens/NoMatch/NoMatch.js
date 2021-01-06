import { Icon } from '@material-ui/core';
import React from 'react';
export default function NoMatch() {
	return (
		<div
			style={{
				height: '100vh',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center'
			}}
		>
			<div>
				<Icon>error</Icon>
				<h2>You are not allowed here</h2>
				<Icon>error</Icon>
			</div>
			<a href="/">please go back</a>
		</div>
	);
}
