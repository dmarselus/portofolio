import React from 'react';
import './Home.css';
import { CONTENT } from './Constants/Constant';
import { GridCard } from './Components';
export default function Home() {
	return (
		<div className="home">
			{CONTENT.map(
				({ title, subtitle, bg, icons, tags, doubleContent }) => {
					if (doubleContent) {
						return (
							<GridCard bg={bg} doubleContent={doubleContent} />
						);
					} else
						return (
							<GridCard
								bg={bg}
								title={title}
								subtitle={subtitle}
								tags={tags}
								icons={icons}
							/>
						);
				}
			)}
		</div>
	);
}
