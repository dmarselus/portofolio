import React, { useState } from 'react';
import './NavigationBar.css';
import { Dialog, Fade } from '@material-ui/core';
import { Turn as Hamburger } from 'hamburger-react';

export default function NavigationBar() {
	const [ isModalOpen, setIsModalOpen ] = useState(false);

	function handleClose() {
		setIsModalOpen(false);
	}
	const Transition = React.forwardRef(function Transition(props, ref) {
		return <Fade direction="up" ref={ref} {...props} />;
	});
	function renderDialog() {
		return (
			<Dialog
				fullScreen
				open={isModalOpen}
				onClose={handleClose}
				TransitionComponent={Transition}
				PaperProps={{
					style: {
						backgroundColor: '#ffcaa4'
					}
				}}
			>
				<div className="dialog">
					<a href="/">Home</a>
					<a href="/about">Résumé</a>
					<a href="/timeline">Timeline</a>
				</div>
			</Dialog>
		);
	}

	return (
		<div className="nav">
			<Hamburger toggled={isModalOpen} toggle={setIsModalOpen} />
			{isModalOpen && renderDialog()}
		</div>
	);
}
