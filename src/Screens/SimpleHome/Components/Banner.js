import React, { useRef, useEffect, useState } from 'react';
import NET from 'vanta/dist/vanta.net.min';

import './Banner.css';
import * as THREE from 'three';
export default function Banner() {
	const [ vantaEffect, setVantaEffect ] = useState(0);
	const myRef = useRef(null);

	useEffect(
		() => {
			if (!vantaEffect) {
				setVantaEffect(
					NET({
						el: myRef.current,
						THREE: THREE,
						mouseControls: true,
						touchControls: true,
						gyroControls: false,
						minHeight: 200.0,
						minWidth: 200.0,
						scale: 1.0,
						scaleMobile: 1.0,
						backgroundColor: 0x232324,
						color: 0xff9966
					})
				);
			}
			return () => {
				if (vantaEffect) vantaEffect.destroy();
			};
		},
		[ vantaEffect ]
	);
	// #ee0979
	return (
		<div ref={myRef} className="Container">
			<div className="Container-Content">
				<div className="heading">
					<h1>David Marselus </h1>
					<h2>is a software developer who focused on UI/UX and Efficiency</h2>
				</div>
				<a href="/about">About me</a>
				<p> or see below</p>
			</div>
		</div>
	);
}
//Sam Small is a designer focused on creating user-centric experiences and meaningful identities.
