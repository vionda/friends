import React from "react";
import ContactCard from "./common/ContactCard";
import Header from "./common/header";
import Footer from "./common/footer";
import someday from "../../assets/audioclips/someday.mp3";
import wl from "../../assets/audioclips/wl.mp3";
import sunrise from "../../assets/audioclips/sunrise.mp3";
import adin from "../../assets/audioclips/adin.mp3";
import thetrip from "../../assets/audioclips/thetrip.mp3";
import lih from "../../assets/audioclips/lih.mp3";

class Apps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
      name: "",
      phone: "",
      email: "",
    };
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = (event) => {
    this.setState({ didSubmit: true });
  };

  render() {
    const isDay = new Date().getHours() < 18;
    const finalClassname = `container ${isDay ? "day" : "night"}`;
    const didSubmit = this.state.didSubmit;

    return (
      <div className={finalClassname}>
        <Header />
        <div className="contacts">
          <ContactCard
            className="contact-card"
            contact={{
              name: "Adonis Murati",
              imgUrl:
                "https://avatars1.githubusercontent.com/u/23533750?s=400&u=414d81697f80832d45fa60fafc6fe3b788df31f4&v=4",
              phone: "045-326-306",
              email: "adonismurati@gmail.com",
            }}
            url={adin}
            description="Vionda's favorite person of all time."
          />
          <ContactCard
            contact={{
              name: "Aulona Qerimi",
              imgUrl:
                "https://scontent.fbeg4-1.fna.fbcdn.net/v/t1.0-9/42388244_1898910263479270_7194218126588772352_o.jpg?_nc_cat=106&_nc_sid=7aed08&_nc_ohc=FYxYLOQETjoAX9a-BT8&_nc_ht=scontent.fbeg4-1.fna&oh=8d5978018c89e392aaef74ae3f9db178&oe=5E98808E",
              phone: "045-659-462",
              email: "aulonaqerimii@gmail.com",
            }}
            url={thetrip}
            description="Dentist to be & capturing everything I find beautiful!"
          />
          <ContactCard
            contact={{
              name: "Fjolla Avdiu",
              imgUrl:
                "https://scontent.fbeg4-1.fna.fbcdn.net/v/t1.0-9/54799641_1162991507203346_5112923184500310016_n.jpg?_nc_cat=109&_nc_sid=7aed08&_nc_ohc=6FIypV2orKoAX_bHZ-m&_nc_ht=scontent.fbeg4-1.fna&oh=27ea8ba460bec063770b4fecbe482f34&oe=5E97E637",
              phone: "049-127-993",
              email: "fjollaavdiu3@gmail.com",
            }}
            url={sunrise}
            description="Software developer, non-judgemental and very optimistic"
          />
          <ContactCard
            contact={{
              name: "Toti Kadriu",
              imgUrl:
                "https://avatars2.githubusercontent.com/u/23532665?s=460&u=b00cb561979ad86ef38aaa3f341d91b203520ed8&v=4",
              phone: "045-268-653",
              email: "kastriot.kadriu@gmail.com",
            }}
            url={someday}
            description="Web developer and, like, a billion things."
          />
          <ContactCard
            contact={{
              name: "Qendrese Sejdiu",
              imgUrl:
                "https://scontent.fprn4-1.fna.fbcdn.net/v/t1.0-9/42664050_1319416478195979_3660635497220276224_o.jpg?_nc_cat=102&_nc_sid=7aed08&_nc_ohc=GUcbBHPpM-MAX-16Dzz&_nc_ht=scontent.fprn4-1.fna&oh=f7fb44fe31680d6487e3b42a2542f46e&oe=5E99141C",
              phone: "045-688-596",
              email: "qendresesejdiu@gmail.com",
            }}
            url={wl}
            description="Architect by day & painter by night."
          />
          <ContactCard
            contact={{
              name: "Vionda Salihi",
              imgUrl:
                "https://avatars2.githubusercontent.com/u/44646691?s=400&u=8ad2ad9c8a79bdb01f888b5200657ed91ed725f1&v=4",
              phone: "044-251-776",
              email: "viondasalihu@gmail.com",
            }}
            url={lih}
            description="Tested positive for loving and supporting all the homies"
          />
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
            <h4>
              <i>Want to be loved?</i>
            </h4>
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
        <Footer />
      </div>
    );
  }
}
export default Apps;
