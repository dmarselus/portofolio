import React, { useState, useEffect } from 'react';
import './Card.css';
import { Icon, Menu, MenuItem, ListItemText } from '@material-ui/core';

export default function Card({ content: { title, icon, content: subContent }, rightIcon }) {
	const [ anchorEl, setAnchorEl ] = useState([]);

	useEffect(() => {
		let tempAnchorEl = [];
		subContent.forEach(() => tempAnchorEl.push(null));
		setAnchorEl(tempAnchorEl);
	}, []);

	function handleArrowClick(event, index) {
		let tempAnchorEl = [ ...anchorEl ];
		tempAnchorEl[index] = event.currentTarget;
		setAnchorEl(tempAnchorEl);
	}

	function handleClose(index, link) {
		let tempAnchorEl = [ ...anchorEl ];
		tempAnchorEl[index] = null;
		setAnchorEl(tempAnchorEl);
		if (link) window.open(link);
	}
	function renderText() {
		return (
			<div className="card-text">
				<ul>
					{subContent.map(({ title, period, subtitle, locked = false, menus = [] }, subIndex) => {
						return (
							<li>
								<div className="text-detail">
									<h5>{title}</h5>
									<p>{period}</p>
									<p>{subtitle}</p>
								</div>

								<Icon
									className="hvr-grow"
									fontSize="large"
									onClick={(event) => !locked && handleArrowClick(event, subIndex)}
								>
									{locked ? 'lock' : 'keyboard_arrow_right'}
								</Icon>
								<Menu
									id="simple-menu"
									anchorEl={anchorEl[subIndex] || null}
									open={!!anchorEl[subIndex]}
									onClose={() => handleClose(subIndex)}
								>
									{menus.map(({ title, link, icon }) => {
										return (
											<MenuItem onClick={() => handleClose(subIndex, link)}>
												<Icon fontSize="small">{icon}</Icon>
												<ListItemText inset primary={title} href={link} target="_blank" />
											</MenuItem>
										);
									})}
								</Menu>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}

	function renderSVG() {
		return <img width="350px" height="350px" src={icon} />;
	}

	return (
		<div className="home_card">
			<h3>{title}</h3>
			<div className="content">
				{rightIcon ? renderText() : renderSVG()}
				{/* {rightIcon ? renderText() : renderSVG()} */}
				{rightIcon ? renderSVG() : renderText()}
			</div>
		</div>
	);
}
