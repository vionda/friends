import React from "react";
import ContactCard from "./ContactCard";

class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      email: "",
      image: "",
    };
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = (event) => {
    this.setState({ didSubmit: true });
    event.preventDefault();
  };
  render() {
    const didSubmit = this.state.didSubmit;
    return (
      <div>
        <p>
          {didSubmit && (
            <ContactCard
              contact={{
                image: this.state.image,
                name: this.state.name,
                phone: this.state.phone,
                email: this.state.email,
              }}
            />
          )}
        </p>
        <form className="form-style" onSubmit={this.handleSubmit}>
          <p>Upload your picture!</p>
          <input
            type="file"
            value={this.state.image}
            name="image"
            onChange={this.handleChange}
          />
          <p id="form-name">Enter your name:</p>
          <input
            type="text"
            placeholder="Enter your name here"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <p>Phone:</p>{" "}
          <input
            type="tel"
            placeholder="Enter your phone number here"
            name="phone"
            value={this.state.phone}
            onChange={this.handleChange}
          />
          <p>Email:</p>
          <input
            type="email"
            placeholder="Enter your email here"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />{" "}
          <br />
          <button id="submit-btn" onClick={this.handleSubmit} name="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default Forms;
