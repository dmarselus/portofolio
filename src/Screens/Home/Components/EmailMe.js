import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import emailjs from 'emailjs-com';

const SERVICE = process.env.REACT_APP_EMAIL_SERVICE_ID;
const TEMPLATE = process.env.REACT_APP_EMAIL_TEMPLATE_ID;
const USER = process.env.REACT_APP_EMAIL_USER_ID;
export default function EmailMe() {
	const [ sendObject, setSendObject ] = useState({ email: '', subject: '', message: '' });

	function sendEmail(e) {
		emailjs.sendForm(`${SERVICE}`, `${TEMPLATE}`, e.target, `${USER}`).then(
			(result) => {
				console.log(result.text);
			},
			(error) => {
				console.log(error.text);
			}
		);
	}

	function capitalize(text) {
		return text.charAt(0).toUpperCase() + text.slice(1);
	}
	function renderFormGroup(state) {
		return (
			<Form.Group>
				<Form.Control
					name={state}
					as={state === 'message' ? 'textarea' : 'input'}
					placeholder={`Enter ${capitalize(state)}`}
					value={sendObject[state]}
					onChange={({ target: { value } }) => setSendObject({ ...sendObject, [state]: value })}
				/>
			</Form.Group>
		);
	}
	return (
		<Form onSubmit={sendEmail}>
			{renderFormGroup('email')}
			{renderFormGroup('subject')}
			{renderFormGroup('message')}
			<Button variant="primary" type="submit">
				Submit
			</Button>
		</Form>
	);
}
