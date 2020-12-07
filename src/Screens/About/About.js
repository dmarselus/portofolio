import React, { useState, useEffect } from 'react';
import Slide from 'react-reveal/Slide';
import { Element } from 'react-scroll';
import useScrollPosition from '@react-hook/window-scroll';
import { useWindowSize } from '@react-hook/window-size/';
import AboutCard from './Components/AboutCard';
import { CONTENT } from './Constant/Constant';

export default function About() {
	const [ isElementFocused, setIsElementFocused ] = useState([ true, false, false ]);
	const [ width, height ] = useWindowSize({ fps: 30 });
	const scrollY = useScrollPosition(30 /*frames per second*/);
	useEffect(
		() => {
			let slide1 = scrollY < height * 1.5;
			let slide2 = scrollY > height * 0.5 && scrollY < height * 2.5;
			let slide3 = scrollY > height * 1.5 && scrollY < height * 3.5;
			setIsElementFocused([ slide1, slide2, slide3 ]);
		},
		[ scrollY ]
	);

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				width: '100%',
				alignItems: 'center',
				marginTop: '2%'
			}}
		>
			{CONTENT.map(({ title, bg, text, tags }, index) => {
				return (
					<Element>
						<Slide left when={isElementFocused[index]}>
							<AboutCard title={title} imageSource={bg} text={text} tags={tags} />
						</Slide>
					</Element>
				);
			})}
		</div>
	);
}
