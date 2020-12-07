import React from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import { TimelineEvent } from './Components';

export default function About() {
	return (
		<VerticalTimeline className="vertical-timeline">
			<TimelineEvent
				title="Application Developer"
				subtitle="Hughes Data System"
				date="May 2020 - Present"
				type="work"
				description="Developing a mobile application called PlayerWatch. An application that connects student athletes to teams, school, tournaments and scouts. Key features including live-streaming, media management (Photos and Videos), Scheduling Calendar for an event, etc. In charge fully on Front-End Development and partially on Middleware Development."
				tags={[ 'React Native', 'Apollo GraphQL', 'MongoDB' ]}
			/>
			<TimelineEvent
				title="Graduated"
				subtitle="Texas A&M University"
				date="May 2020"
				type="school"
				description="Got my Bachelor of Science degree concentrating in System Programming, Computer Science (ABET Accreditation) "
			/>
			<TimelineEvent
				title="Web Developer"
				subtitle="Texas A&M University (Final Project)"
				date="Jan 2020 - May 2020"
				customIcon
				type="school"
				description="Develop a Web Application called Indays for Mary & Jeff Bell Library TAMUCC. This Web App is built with interactive calendar looks for better UI/UX. Indays is a scheduling system that is programmed for the staff to do several key features such as Clock-in and Clock-out, Dropping and Swapping shifts, Autopopulation for scheduling, Blacking out dates, etc. "
				tags={[ 'ReactJS', 'MERN', 'School Project' ]}
			/>
			<TimelineEvent
				title="Front End Developer Trainee"
				subtitle="Hughes Data System"
				date="June 2019 - May 2020"
				type="work"
				description="Learnt React Native Framework, JavaScript ES6, FlexBox design, Expo SDK, and many more developing tools"
				tags={[ 'Internship', 'JavaScript', 'HTML', 'CSS', 'NodeJS' ]}
			/>
			<TimelineEvent
				title="Computer Science Grader"
				subtitle="Computer Science Department"
				date="Oct 2017 - Jan 2020"
				type="work"
				description="Graded several classes from Introduction to Problem Solving 1 and 2, Computer Architecture and Mobile Programming for Android"
				tags={[ 'Student Worker' ]}
			/>
			<TimelineEvent
				title="Front Desk Librarian"
				subtitle="Mary and Jeff Bell Library"
				date="Oct 2017 - Jan 2020"
				type="work"
				description="Worked as a student worker to assist students on their literature needs"
				tags={[ 'Student Worker' ]}
			/>
			<TimelineEvent title="Started My College" subtitle="Texas A&M University" date="Aug 2016" type="school" />
			{/* <TimelineEvent subtitle="Moved to United States" date="Jan 2016" icon={<FlightLandIcon />} /> */}

			<TimelineEvent
				title="Graduated"
				subtitle="Astra Manufacturing Polytechnic"
				date="Jul 2015"
				type="school"
				description="Got my Associate Degree of Automotive Engineering"
			/>
			<TimelineEvent
				title="Informational Internship"
				subtitle="PT. Astra International - Auto 2000"
				date="Jan 2015 - Jun 2015"
				type="work"
				description="Invented a new Car Delivery System that improves the efficiency for up to 300%. Assigned to be a team leader that in charge of Car Delivery System"
				tags={[ 'School Program' ]}
			/>
			<TimelineEvent
				title="Automotive Mechanic Internship"
				subtitle="PT. Astra International - Auto 2000"
				date="Aug 2013 - Jun 2014"
				type="work"
				tags={[ 'School Program' ]}
			/>
			<TimelineEvent
				title="Started my College"
				subtitle="Astra Manufacturing Polytechnic"
				date="Aug 2012"
				type="school"
			/>
			<TimelineEvent
				title="Graduated from High School"
				subtitle="Saint Jacob Catholic School"
				date="May 2012"
				type="school"
			/>
		</VerticalTimeline>
	);
}
