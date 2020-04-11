import React from "react";

class ContactCard extends React.Component {
  constructor(props) {
    super(props);
    this.audioRef = React.createRef();
  }

  handleImgClick = () => {
    if (this.audioRef.current.paused) {
      this.audioRef.current.play();
    } else {
      this.audioRef.current.pause();
    }
  };

  render() {
    return (
      <article>
        <div className="contact-card">
          <img
            src={this.props.contact.imgUrl}
            alt=""
            onClick={this.handleImgClick}
          />
          <h3 id="name">{this.props.contact.name}</h3>
          <h4 class="desc">{this.props.description}</h4>
          <p>Email: {this.props.contact.email}</p>
          <p>Phone: {this.props.contact.phone}</p>
          <audio src={this.props.url} controls ref={this.audioRef} />
          <hr></hr>
        </div>
      </article>
    );
  }
}
export default ContactCard;
