import React, { Component } from 'react';
import './ContactForm.css';

//used to reset contact form
const initialState = {
	name: "",
	company: "",
	email: "",
	message: "",
	nameErr: "",
	companyErr: "",
	emailErr: "",
	messageErr: ""
}

class ContactForm extends Component {
	constructor(props) {
		super(props);
		this.state = initialState;

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({[e.target.name]: e.target.value});
	}

	validateForm() {
		let nameErr: "";
		let companyErr: "";
		let emailErr: "";
		let messageErr: "";

		//check name for length
		if(!this.state.name) {
			nameErr = "Please fill in your name."
		}
		//check company for length
		if(!this.state.company) {
			companyErr = "Please fill in your company name."
		}
		//check email for '@'
		if(!this.state.email.includes('@')) {
			emailErr = "Email address is invalid."
		}
		//check message for length
		if(!this.state.message) {
			messageErr = "Please write a message."
		}

		//if an err; set state/update err
		if(nameErr || companyErr || emailErr || messageErr) {
			this.setState({ nameErr, companyErr, emailErr, messageErr });
			return false;
		}
		
		return true;
	}

	//Faking a result of sending a form (70% chance of success)
	sendForm() {
		let rand = Math.floor(Math.random() * 101);
		if(rand <= 70) {
			return true;
		} else {
			return false;
		}
	}

	async handleSubmit(e) {
		e.preventDefault();
		//validate form
		let formValid = this.validateForm();
		if(formValid) {
			//send form & display success/failure
			let formSent = await this.sendForm()
			if(formSent) {
				alert("Form sent!");
				//clear form
				this.setState(initialState);
			} else {
				alert("There was a problem, please try again soon.");
			}
		} 
	}

	render() {
		let { name, company, email, message, nameErr, companyErr, emailErr, messageErr } = this.state;
		return (
			<div className="ContactForm-Holder">
				<form className="ContactForm" onSubmit={this.handleSubmit}>
					<h1>Contact Us</h1>

					<input
						type="text"
						name="name"
						value={name}
						onChange={this.handleChange}
						autoFocus
						placeholder="Your Name"
						maxLength="25"
					/>
					<span>{nameErr}</span>
					<input
						type="text"
						name="company"
						value={company}
						onChange={this.handleChange}
						placeholder="Your Company Name"
						maxLength="25"
					/>
					<span>{companyErr}</span>
					<input
						type="text"
						name="email"
						value={email}
						onChange={this.handleChange}
						placeholder="Your Email"
						maxLength="25"
					/>
					<span>{emailErr}</span>
					<textarea
            name="message"
            value={message}
            onChange={this.handleChange}
            placeHolder="Your Message"
            >
          </textarea>
          <span>{messageErr}</span>

          <div className="Button-Holder">
          	<button>Send Message</button>
          </div>
				</form>
			</div>
		)
	}
}

export default ContactForm;