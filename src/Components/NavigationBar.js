import React, { useState } from 'react';
import styled from 'styled-components';
import './NavigationBar.css';
import { Dialog, Fade } from '@material-ui/core';

import { Turn as Hamburger } from 'hamburger-react';
const Styles = styled.div`
	.navbar {
		background: #ff6a00; /* old browsers */
		background: -webkit-linear-gradient(to right, #ff6a00, #ee0979); /* Chrome 10-25, Safari 5.1-6 */
		background: linear-gradient(
			to right,
			#ff6a00,
			#ee0979
		); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
	}
	.navbar-brand,
	.navbar-nav .nav-link {
		color: white;
		&:hover {
			color: #0394fc;
		}
	}
`;

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
					<a href="/about">Resume</a>
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
	// return (
	// 	<Styles>
	// 		<Navbar style={{ fontFamily: 'Lobster', fontWeight: 'lighter' }} expand="lg">
	// 			<Navbar.Brand href="/">dmarselus</Navbar.Brand>
	// 			<Navbar.Toggle aria-controls="basic-navbar-nav" />
	// 			<Navbar.Collapse id="basic-navbar-nav">
	// 				<Nav style={{ fontFamily: 'Pacifico', fontWeight: 'lighter' }} className="ml-auto">
	// 					<Nav.Item>
	// 						<Nav.Link href="/">Home</Nav.Link>
	// 					</Nav.Item>
	// 					<Nav.Item>
	// 						<Nav.Link href="/about">About</Nav.Link>
	// 					</Nav.Item>
	// 					<Nav.Item>
	// 						<Nav.Link href="/timeline">Timeline</Nav.Link>
	// 					</Nav.Item>
	// 					<Nav.Item>
	// 						<Nav.Link onClick={() => setIsModalOpen(true)}>Timeline</Nav.Link>
	// 					</Nav.Item>
	// 					<p onClick={() => setSimpleMode(!simpleMode)}>{simpleMode.toString()}</p>

	// 					<Dialog
	// 						style={{ opacity: 0.5 }}
	// 						fullScreen
	// 						open={isModalOpen}
	// 						onClose={handleClose}
	// 						TransitionComponent={Transition}
	// 					>
	// 						<DialogTitle>{"Use Google's location service?"}</DialogTitle>
	// 						<DialogContent>
	// 							<DialogContentText id="alert-dialog-description">
	// 								Let Google help apps determine location. This means sending anonymous location data
	// 								to Google, even when no apps are running.
	// 							</DialogContentText>
	// 						</DialogContent>
	// 						<DialogActions>
	// 							<Button onClick={handleClose} color="primary">
	// 								Disagree
	// 							</Button>
	// 							<Button onClick={handleClose} color="primary">
	// 								Agree
	// 							</Button>
	// 						</DialogActions>
	// 					</Dialog>
	// 					{/* </Slide> */}
	// 				</Nav>
	// 			</Navbar.Collapse>
	// 		</Navbar>
	// 	</Styles>
	// );
}
