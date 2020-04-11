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
                "https://scontent.fprn4-1.fna.fbcdn.net/v/t1.0-9/78926905_2556134694465881_5973460469694857216_o.jpg?_nc_cat=108&_nc_sid=85a577&_nc_ohc=qg2ckJcUGRAAX_AodTb&_nc_ht=scontent.fprn4-1.fna&oh=2e609afcd25801bf959384e2c36dc44f&oe=5E9BB47B",
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
