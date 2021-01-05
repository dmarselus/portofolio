import React from 'react';
import { EmailMe, AboutMe } from '../Components';
import {
	LinkedInIcon,
	InstagramIcon,
	GitHubIcon,
	MapIcon,
	FacebookIcon,
	ArrowRightCircleFill,
	CodeIcon
} from '../Components/Icons';
import { about, astra, gh, indays, mail, profile, PW, tamucc } from '../../../Assets/images';

export function profileIcons() {
	return [
		{
			icon: <LinkedInIcon fontSize="large" />,
			link: 'https://www.linkedin.com/in/david-marselus-2993b2178/'
		},
		{
			icon: <InstagramIcon fontSize="large" />,
			link: 'https://www.instagram.com/marcellloki/'
		},
		{
			icon: <GitHubIcon fontSize="large" />,
			link: 'https://github.com/dmarselus'
		}
	];
}

export function TAMUCCIcons() {
	return [
		{
			icon: <FacebookIcon fontSize="large" />,
			link: 'https://www.facebook.com/islanduniversity/'
		},
		{
			icon: <LinkedInIcon fontSize="large" />,
			link: 'https://www.linkedin.com/school/texas-a&m-university-corpus-christi/'
		},
		{
			icon: <MapIcon fontSize="large" />,
			link:
				'https://www.google.com/maps/place/Texas+A%26M+University-Corpus+Christi/@27.7127448,-97.3241433,15z/data=!4m5!3m4!1s0x0:0x5d8c2c4e12efc0cb!8m2!3d27.7127448!4d-97.3241433'
		},
		{
			icon: <ArrowRightCircleFill />,
			link: 'https://tamucc.edu/'
		}
	];
}

export function AstraIcons() {
	return [
		{
			icon: <FacebookIcon fontSize="large" />,
			link: 'https://www.facebook.com/PoliteknikManufakturAstra/'
		},
		{
			icon: <LinkedInIcon fontSize="large" />,
			link: 'https://www.linkedin.com/company/politeknik-manufaktur-astra/'
		},
		{
			icon: <ArrowRightCircleFill />,
			link: 'https://www.polman.astra.ac.id/'
		}
	];
}

export function IndaysIcons() {
	return [
		{
			icon: <GitHubIcon fontSize="large" />,
			link: 'https://github.com/zgroppe/Bookworms/tree/develop'
		},
		{
			icon: <ArrowRightCircleFill />,
			link: 'https://zgroppe.github.io/Bookworms/'
		}
	];
}

export function GHIcons() {
	return [
		{
			icon: <CodeIcon fontSize="large" />,
			link: 'https://codesandbox.io/s/sharp-goldstine-5q0wh'
		}
	];
}

export const CONTENT = [
	// {
	// 	title: 'David Marselus',
	// 	bg: profile,
	// 	tags: [ 'Software Developer' ],
	// 	icons: profileIcons()
	// },
	{
		bg: about,
		doubleContent: <AboutMe />
	},
	{
		title: 'Texas A&M Corpus Christi',
		bg: tamucc,
		subtitle: '2016 - 2020',
		tags: [ 'Bachelor of Science' ],
		icons: TAMUCCIcons()
	},
	{
		title: 'Astra Manufacturing Polytechnic',
		bg: astra,
		subtitle: '2012 - 2015',
		tags: [ 'Associate Degree' ],
		icons: AstraIcons()
	},
	{
		title: 'PlayerWatch',
		bg: PW,
		subtitle: '2019 - Present',
		tags: [ 'Front End Developer' ]
	},
	{
		title: 'Indays',
		bg: indays,
		subtitle: '2020',
		tags: [ 'Front End Developer', 'School' ],
		icons: IndaysIcons()
	},
	{
		title: 'Github Challenge',
		bg: gh,
		tags: [ 'React Native', 'Personal' ],
		icons: GHIcons()
	},
	{
		bg: mail,
		doubleContent: <EmailMe />
	}
];
