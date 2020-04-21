import React from "react";
import HomeCard from "./components/HomeContact";

class About extends React.Component {
  render() {
    return (
      <div>
        <div className="home">
          <HomeCard
            title="My first React Project"
            contact={{
              name: "Vionda Salihi",
              imgUrl:
                "https://avatars2.githubusercontent.com/u/44646691?s=400&u=8ad2ad9c8a79bdb01f888b5200657ed91ed725f1&v=4",
              phone: "044-251-776",
              email: "viondasalihu@gmail.com",
            }}
            description="A young and ambitious kid who is trying to accomplish her cherished desires"
          />
        </div>
      </div>
    );
  }
}
export default About;
