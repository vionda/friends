import React from "react";

class HomeCard extends React.Component {
  render() {
    return (
      <div>
        <div className="home-card">
          <h2>{this.props.title}</h2>
          <img
            src={this.props.contact.imgUrl}
            alt=""
            onClick={this.handleImgClick}
          />
          <h3>{this.props.contact.name}</h3>
          <h4>{this.props.description}</h4>
          <p>Email: {this.props.contact.email}</p>
          <p>Phone: {this.props.contact.phone}</p>
        </div>
      </div>
    );
  }
}
export default HomeCard;
