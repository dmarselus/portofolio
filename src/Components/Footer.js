import React from 'react';
import './Footer.css';
const FOOTER = [
	{
		title: 'David Marselus'
	},
	{
		title: 'Contact',
		links: [ { text: 'davidmarselus28@gmail.com', link: 'mailto:davidmarselus28@gmail.com' } ]
	},
	{
		title: 'Connect',
		links: [
			{
				text: 'LinkedIn',
				link: 'https://www.linkedin.com/in/david-marselus-2993b2178/'
			},
			{
				text: 'Instagram',
				link: 'https://www.instagram.com/marcellloki/'
			},
			{
				text: 'Github',
				link: 'https://github.com/dmarselus'
			}
		]
	}
];

export default function Footer() {
	return (
		<div className="footer">
			<hr className="solid" />
			<div className="footer-content">
				{FOOTER.map(({ title, links = [] }) => {
					return (
						<div className="part">
							<p className="title">{title}</p>
							<div className="column">
								{links.map(({ text, link }) => {
									return (
										<a className="link" href={link} target="_blank">
											{text}
										</a>
									);
								})}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
