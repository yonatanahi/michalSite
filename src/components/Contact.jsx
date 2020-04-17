import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div>
        <form action="">
          <label htmlFor="">Name:</label>
          <input type="text" />
          <br />
          <label htmlFor="">Email:</label>
          <input type="text" />
          <br/>
          <textarea placeholder="Leave a feedback..."></textarea>
          <br />
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}

export default Contact;
