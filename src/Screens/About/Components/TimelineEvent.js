import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
export default function TimelineEvent({
	title = 'Title',
	subtitle,
	description = 'description',
	date = '',
	icon,
	iconStyle = { background: 'rgb(33, 150, 243)', color: '#fff' }
}) {
	return (
		<VerticalTimelineElement
			className="vertical-timeline-element--work"
			contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
			contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
			date={date}
			iconStyle={iconStyle}
			icon={icon}
		>
			<h3 className="vertical-timeline-element-title">{title}</h3>
			{subtitle && <h5 className="vertical-timeline-element-subtitle">{subtitle}</h5>}
			<p>{description}</p>
		</VerticalTimelineElement>
	);
}
