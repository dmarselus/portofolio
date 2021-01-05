import React from 'react';
import Container from 'react-bootstrap/Container';

export default function Layout(props) {
	return (
		<Container style={{ padding: 0 }} fluid>
			{props.children}
		</Container>
	);
}
