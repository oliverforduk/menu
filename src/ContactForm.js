import React, { Component } from 'react';
import './ContactForm.css';

class ContactForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			company: "",
			email: "",
			message: ""
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({[e.target.name]: e.target.value});
	}

	handleSubmit(e) {
		e.preventDefault();
		alert("your name is: " + this.state.name);
	}

	render() {
		let { name, company, email, message } = this.state;
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
						placeHolder="Your Name"
						maxLength="25"
						required
					/>
					<input
						type="text"
						name="company"
						value={company}
						onChange={this.handleChange}
						placeHolder="Your Company Name"
						maxLength="25"
						
					/>
					<input
						type="email"
						name="email"
						value={email}
						onChange={this.handleChange}
						placeHolder="Your Email"
						maxLength="25"
						
					/>
					<textarea
            name="message"
            onChange={this.handleChange}
            placeHolder="Your Message"
            
            >
            {message}
          </textarea>
          <div className="Button-Holder">
          	<button>Send Message</button>
          </div>

				</form>
			</div>
		)
	}
}

export default ContactForm;