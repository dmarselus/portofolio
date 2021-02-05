import educSVG from '../../Assets/education.svg';
import projSVG from '../../Assets/project.svg';

export const EDUCATIONS = {
	icon: educSVG,
	title: 'Education',
	content: [
		{
			title: 'Texas A&M University Corpus Christi',
			period: '2016 - 2020',
			subtitle: 'Bachelor of Science (System Programming)',
			menus: [
				{ title: 'Website', link: 'https://tamucc.edu/', icon: 'launch' },
				{ title: 'Facebook', link: 'https://www.facebook.com/islanduniversity/', icon: 'facebook' }
			]
		},
		{
			title: 'Astra Manufacturing Polytechnic',
			period: '2012 - 2015',
			subtitle: 'Associate Degree (Automotive Engineering)',
			menus: [
				{ title: 'Website', link: 'https://www.polman.astra.ac.id/', icon: 'launch' },
				{ title: 'Facebook', link: 'https://www.facebook.com/PoliteknikManufakturAstra/', icon: 'facebook' }
			]
		}
	]
};

export const PROJECTS = {
	icon: projSVG,
	title: 'Related Project',
	content: [
		{
			title: 'PlayerWatch',
			period: '2019 - Current',
			subtitle: 'Mobile Application Developer',
			locked: false,
			menus: [
				{
					title: 'Apple',
					link: 'https://apps.apple.com/us/app/player-watch/id1519027984',
					icon: 'customApple'
				},
				{
					title: 'Android',
					link: 'https://play.google.com/store/apps/details?id=com.playerwatch3',
					icon: 'android'
				}
			]
		},
		{
			title: 'Indays',
			period: '2020',
			subtitle: 'Front End Developer (School Project)',
			menus: [
				{ title: 'Website', link: 'https://zgroppe.github.io/Bookworms/', icon: 'launch' },
				{ title: 'Github', link: 'https://github.com/zgroppe/Bookworms/tree/develop', icon: 'code' }
			]
		},
		{
			title: 'Github Repo Finder',
			period: '2020',
			subtitle: 'Developer (Side Project)',
			menus: [ { title: 'CodeSandBox', link: 'https://codesandbox.io/s/sharp-goldstine-5q0wh', icon: 'code' } ]
		},
		{
			title: 'Response Time Graph',
			period: '2020',
			subtitle: 'Developer (Side Project)',
			menus: [ { title: 'CodeSandBox', link: 'https://codesandbox.io/s/hopeful-ride-ro1bw', icon: 'code' } ]
		}
	]
};
