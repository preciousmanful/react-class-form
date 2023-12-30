import React, { Component } from 'react';

class ClassForm extends Component {
  constructor(props) {
    super(props);

    // Initial state with empty values for the form inputs
    this.state = {
      name: '',
      email: '',
      password: '',
    };
  }

  // Handle input changes and update state accordingly
  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  // Handle form submission
  handleSubmit = (e) => {
    e.preventDefault();

    // Log form data to the console (you can replace this with your desired functionality)
    console.log('Form data submitted:', this.state);
  };

  render() {
    return (
      
      <form onSubmit={this.handleSubmit}>
        <h3>React Class Form</h3>
        <label>
          Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
            placeholder='precious'
          />
        </label>
        <br />
        <label>
          Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
            placeholder='precious@gmail.com'
          />
        </label>
        <br />
        <label>
          Password:&nbsp;
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
            placeholder='***********'
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default ClassForm;
