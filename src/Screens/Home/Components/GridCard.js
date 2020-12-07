import { IconButton } from '@material-ui/core';
import React from 'react';
import { Badge, Card } from 'react-bootstrap';
import './GridCard.scss';
export default function GridCard({
	bg,
	title,
	subtitle,
	tags = [],
	icons = [],
	doubleContent = null
}) {
	function renderIcons() {
		return (
			<div className="info-bottom">
				{icons.map(({ icon, link }) => {
					return (
						<IconButton href={link} target="_blank" color="inherit">
							{icon}
						</IconButton>
					);
				})}
			</div>
		);
	}

	function renderBadges() {
		return (
			<div className="info-bottom">
				{tags.map((tag) => {
					return (
						<Badge style={{ margin: '5px' }} pill variant="primary">
							{tag}
						</Badge>
					);
				})}
			</div>
		);
	}

	function renderRegularContent() {
		return (
			<div className="info">
				<div className="info-top">
					<Card.Title style={{ textAlign: 'center' }}>
						{title}
					</Card.Title>
					{subtitle && <Card.Text>{subtitle}</Card.Text>}
					{renderBadges()}
				</div>
				{renderIcons()}
			</div>
		);
	}
	function renderDoubleContent() {
		return <div className="info">{doubleContent}</div>;
	}

	return (
		<Card
			className={doubleContent ? 'double' : 'card'}
			style={{
				borderRadius: '15px'
			}}
		>
			<Card.Img src={bg} alt="Card image" />
			<Card.ImgOverlay>
				{doubleContent ? renderDoubleContent() : renderRegularContent()}
			</Card.ImgOverlay>
		</Card>
	);
}
