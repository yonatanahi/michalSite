import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      feedback: null,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    alert(this.state.name + " " + this.state.email + " " + this.state.feedback);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input type="text" name="name" onChange={this.handleInputChange} />
            :שם
          </label>
          <br />
          <label>
            <input type="text" name="email" onChange={this.handleInputChange} />
            :מייל
          </label>
          <br />
          <label>
            :תגובה
            <br />
            <textarea
              placeholder="השאר תגובה..."
              name="feedback"
              onChange={this.handleInputChange}
            ></textarea>
          </label>

          <br />
          <button>שלח</button>
        </form>
      </div>
    );
  }
}

export default Contact;
