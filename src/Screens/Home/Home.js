import React from 'react';
import './Home.css';
import { CONTENT } from './Constants/Constant';
import { GridCard } from './Components';

import Grid from '@material-ui/core/Grid';
export default function Home() {
	return (
		<div className="home">
			<Grid container spacing={1}>
				{CONTENT.map(({ title, subtitle, bg, icons, tags, doubleContent }, index) => {
					if (doubleContent) {
						return (
							<Grid item xs={8}>
								<GridCard key={index} bg={bg} doubleContent={doubleContent} />
							</Grid>
						);
					} else
						return (
							<Grid item xs={4}>
								<GridCard
									key={index}
									bg={bg}
									title={title}
									subtitle={subtitle}
									tags={tags}
									icons={icons}
								/>
							</Grid>
						);
				})}
			</Grid>
		</div>
	);
	// return (
	// 	<div className="home">
	// 		{CONTENT.map(({ title, subtitle, bg, icons, tags, doubleContent }, index) => {
	// 			if (doubleContent) {
	// 				return <GridCard key={index} bg={bg} doubleContent={doubleContent} />;
	// 			} else
	// 				return <GridCard key={index} bg={bg} title={title} subtitle={subtitle} tags={tags} icons={icons} />;
	// 		})}
	// 	</div>
	// );
}
