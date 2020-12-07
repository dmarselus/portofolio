import React from 'react';
import { CarouselProvider, Slider, Slide, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './AboutMe.css';
import {
	mongodb,
	antd,
	apollo,
	asp,
	aws,
	bootstrap,
	c,
	java,
	javascript,
	material,
	sql,
	html,
	css,
	reactpng
} from '../../../Assets/images';

const ABOUT_SUBTEXT =
	"Hi, my  name is David Marselus, I'm a full time software developer, currently focusing on Front End Development and still learning on UI/UX design, middleware and Back End Development. I am familiar with several imperative programming languages but currently I am highly interested in both Web and Mobile Application Development with React and React Native respectively.";

const CAROUSEL_ITEM = [
	html,
	css,
	javascript,
	reactpng,
	mongodb,
	bootstrap,
	aws,
	asp,
	apollo,
	antd,
	bootstrap,
	material,
	sql,
	c,
	java
];
export default function AboutMe() {
	function renderItem(src, key) {
		return (
			<Slide key={key}>
				<Image src={src} style={{ width: '68px', height: '68px' }} />
			</Slide>
		);
	}

	return (
		<div className="wrapper">
			<h4>About Me</h4>
			<span>{ABOUT_SUBTEXT}</span>

			<CarouselProvider
				isPlaying
				className="carousel"
				naturalSlideWidth={75}
				naturalSlideHeight={100}
				visibleSlides={4}
				totalSlides={CAROUSEL_ITEM.length}
				infinite={true}
				interval={2000}
			>
				<Slider>{CAROUSEL_ITEM.map((item, index) => renderItem(item, index))}</Slider>
			</CarouselProvider>
		</div>
	);
}

//Javascript Icon by Icon Mafia
// Css Icon by Icons8 on Iconscout
