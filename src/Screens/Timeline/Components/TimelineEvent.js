import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { BriefcaseFill, SchoolIcon,DescriptionIcon } from './Icons';
import Badge from 'react-bootstrap/Badge';

const style={color: '#fff'}
export default function TimelineEvent({ title, subtitle,date, description,customIcon, type, tags = [] }) {
	let bgColor = 'rgb(33, 150, 243)';
	let icon
	if (type === 'work') {
		icon = <BriefcaseFill />;
		bgColor = '#ff6a00';
	} else if (type === 'school') {
		if(customIcon)	icon = <DescriptionIcon />;
		else icon = <SchoolIcon />;
		bgColor = '#ee0979';
	}

	function renderTags() {
		return (
			<>
      			{tags.map(tag => <Badge style={{margin:'0 10px 10px 0'}} pill variant="light">{tag}</Badge>)}
     		</>
		);
	}

	return (
		<VerticalTimelineElement
			className="vertical-element"
			contentStyle={{ background: bgColor, color: 'black', padding: '10px',  }}
			contentArrowStyle={{ borderRight: `7px solid ${bgColor}` }}
			date={date}
			iconStyle={{ background: bgColor,...style }}
			icon={icon}
		>
			{renderTags()}
			{title && <h3 style={style}>{title}</h3>}
			{subtitle && <h5 style={style}>{subtitle}</h5>}
			{description && <p style={style}>{description}</p>}
		</VerticalTimelineElement>
	);
}
