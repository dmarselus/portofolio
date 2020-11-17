import React from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import { TimelineEvent } from './Components';
import { SchoolIcon, BriefcaseFill, Award, DescriptionIcon, FlightLandIcon } from './Components/Icons';
import './About.css';

export default function About() {
	return (
		<div>
			<h2>About</h2>

			<VerticalTimeline className="vertical-timeline">
				<TimelineEvent
					title="React Native Developer"
					subtitle="Hughes Data System"
					date="May 2020 - Present"
					icon={<BriefcaseFill />}
				/>
				<TimelineEvent
					title="Graduated"
					subtitle="Texas A&M University"
					date="May 2020"
					icon={<SchoolIcon />}
				/>
				<TimelineEvent
					title="Web Developer"
					subtitle="Texas A&M University (Final Project)"
					date="Jan 2020 - May 2020"
					icon={<DescriptionIcon />}
				/>
				<TimelineEvent
					title="Internship"
					subtitle="Hughes Data System"
					date="June 2019 - May 2020"
					icon={<BriefcaseFill />}
				/>
				<TimelineEvent
					title="Grader"
					subtitle="Computer Science Department"
					date="Oct 2017 - Jan 2020"
					icon={<BriefcaseFill />}
				/>
				<TimelineEvent
					title="Front Desk Librarian"
					subtitle="Mary and Jeff Bell Library"
					date="Oct 2017 - Jan 2020"
					icon={<BriefcaseFill />}
				/>
				<TimelineEvent
					title="Started My College"
					subtitle="Texas A&M University"
					date="Aug 2016"
					icon={<SchoolIcon />}
				/>
				<TimelineEvent
					title="Moved to United States"
					// subtitle="Mary and Jeff Bell Library"
					date="Jan 2016"
					icon={<FlightLandIcon />}
				/>
				<TimelineEvent
					title="Graduated"
					subtitle="Astra Manufacturing Polytechnic"
					date="Jul 2015"
					icon={<SchoolIcon />}
				/>
				<TimelineEvent
					title="Informational Intern"
					subtitle="PT. Astra International - Auto 2000"
					date="Jan 2015 - Jun 2015"
					icon={<BriefcaseFill />}
				/>
				<TimelineEvent
					title="Mechanical Intern"
					subtitle="PT. Astra International - Auto 2000"
					date="Aug 2013 - Jun 2014"
					icon={<BriefcaseFill />}
				/>
				<TimelineEvent
					title="Started my College"
					subtitle="Astra Manufacturing Polytechnic"
					date="Aug 2012"
					icon={<SchoolIcon />}
				/>
				<TimelineEvent
					title="Graduated from High School"
					subtitle="Saint Jacob Catholic School"
					date="May 2012"
					icon={<SchoolIcon />}
				/>
			</VerticalTimeline>
		</div>
	);
}
