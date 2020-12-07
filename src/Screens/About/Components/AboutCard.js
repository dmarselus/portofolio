import React from 'react';
import { Jumbotron as Jumbo, Container, Badge } from 'react-bootstrap';
import { Typography } from '@material-ui/core';
import './AboutCard.css';

export default function AboutCard({ title, imageSource, text, tags }) {
	return (
		<Jumbo
			fluid
			className="aboutcard"
			style={{
				backgroundImage: `url(${imageSource})`,
				backgroundSize: 'cover'
			}}
		>
			<div className="overlay">
				<Container>
					<Typography classes="title" variant="h2" align="right">
						{title}
					</Typography>
					<div className="body">
						<div className="text">
							<Typography variant="h6">{text}</Typography>
						</div>
						<div className="tags">
							{tags.map((tag) => (
								<Badge style={{ margin: '0 10px 10px 0', fontSize: '1rem' }} pill variant="light">
									{tag}
								</Badge>
							))}
						</div>
					</div>
				</Container>
			</div>
		</Jumbo>
	);
}
