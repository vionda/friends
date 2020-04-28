import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import StarRating from "./StarRating";

const photos = [
  {
    name: "1917",
    url:
      "https://www.newstatesman.com/sites/default/files/styles/cropped_article_image/public/blogs_2020/01/2020_01_film.jpg?itok=em0BZYap&c=16c2447c11295df8990f8cd853cb5e18",
    description:
      "It's been already three devastating years into the costly World War I, and the Imperial German Army seems to have retreated from their position in the battle-scarred Western Front--an elaborate scheme designed to lure the Allies into a deadly trap. On April 6, 1917--with the lives of 1,600 fellow soldiers hanging by a thread--the best friends and British Army Lance Corporals, Tom Blake and Will Schofield, undertake a peril-laden mission to hand-deliver an urgent, life-saving message to Colonel MacKenzie's Second Battalion of the Devonshire line infantry regiment. With this in mind, amid the horrors of an uncannily silent no man's land, the young brothers-in-arms must traverse nine long miles of hostile enemy terrain in the French countryside, to reach the 2nd Devons in time and call off the imminent attack. Now, two ordinary troopers walk into certain death. What makes a true hero?",
  },
  {
    name: "Little Women",
    url:
      "https://static.rogerebert.com/uploads/review/primary_image/reviews/little-women-movie-review-2019/little-women-movie-review-2019.jpg",
    description:
      "In the years after the Civil War, Jo March (Saoirse Ronan) lives in New York City and makes her living as a writer, while her sister Amy March (Florence Pugh) studies painting in Paris. Amy has a chance encounter with Theodore Laurence (Timothée Chalamet), a childhood crush who proposed to Jo, but was ultimately rejected. Their oldest sibling, Meg March (Emma Watson), is married to a schoolteacher, while shy sister Beth (Eliza Scanlen) develops a devastating illness that brings the family back together.",
  },
  {
    name: "Blue Velvet",
    url:
      "https://static.rogerebert.com/uploads/review/primary_image/reviews/blue-velvet-1986/Blue_Velvet.jpg",
    description:
      "Home from college, Jeffrey Beaumont (Kyle MacLachlan) makes an unsettling discovery: a severed human ear, lying in a field. In the mystery that follows, by turns terrifying and darkly funny, writer-director David Lynch burrows deep beneath the picturesque surfaces of small-town life. Driven to investigate, Jeffrey finds himself drawing closer to his fellow amateur sleuth, Sandy Williams (Laura Dern), as well as their person of interest, lounge singer Dorothy Vallens (Isabella Rossellini)—and facing the fury of Frank Booth (Dennis Hopper), a psychopath who will stop at nothing to keep Dorothy in his grasp. With intense performances and hauntingly powerful scenes and images, Blue Velvet is an unforgettable vision of innocence lost, and one of the most influential American films of the past few decades.",
  },
  {
    name: "Marriage Story",
    url:
      "https://occ-0-1723-1722.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABai0uN9F3dFeDLzNegHYnLnRJzrxrRUfczTIwrzOPEAWuw2ys9v5ggieIo8v_gVlGqtFlVFihGi6YMIA2fKPlXyDvYhB.jpg?r=494",
    description:
      "Sadly, after numerous disastrous sessions of marital mediation, New York City's brilliant theatre director, Charlie, and the one-time Los Angeles movie actress, Nicole, decided to split up, putting an end to their decade-long marriage. However, divorce is horrible--and as the once-close-knit couple struggles to make it work for the sake of their eight-year-old son, Henry--vitriolic accusations and bitter resentment threaten the very foundation of Charlie and Nicole's so-called amicable separation. Now, shrewd and absurdly costly lawyers take over, and things are bound to get messy. But, why are love's wounds so deep, and cruelly painful? In the end, is love always forever?",
  },
  {
    name: "Good Will Hunting",
    url:
      "https://cdn1.thr.com/sites/default/files/2016/12/good_will_hunting_-_h_-_2016.jpg",
    description:
      "Will Hunting (Matt Damon) has a genius-level IQ but chooses to work as a janitor at MIT. When he solves a difficult graduate-level math problem, his talents are discovered by Professor Gerald Lambeau (Stellan Skarsgard), who decides to help the misguided youth reach his potential. When Will is arrested for attacking a police officer, Professor Lambeau makes a deal to get leniency for him if he will get treatment from therapist Sean Maguire (Robin Williams).",
  },
  {
    name: "Joker",
    url:
      "https://cnet1.cbsistatic.com/img/Z1VlNI0m6a9gWon8I6Hu1wVxp6w=/2018/07/16/87518406-dde9-41e5-b99b-8ae54755b4c6/jokers-heathledger-1.jpg",
    description:
      "Arthur Fleck is a wannabe stand-up comic who suffers from many mental illnesses, including one which causes him to laugh uncontrollably when he is nervous, and often gets him into bad situations. Arthur's mental health causes almost all people in society to reject and look down upon him, even though all he wants is to be accepted by others. After being brutally beaten, having his medication cut off, Arthur's life begins to spiral downward out-of-control into delusions, violence, and anarchy until he eventually transforms into Gotham's infamous Clown-Prince of Crime.",
  },
  {
    name: "Eternal Sunshine of The Spotless Mind",
    url:
      "https://i2.wp.com/movieassault.com/wp-content/uploads/2018/07/eternalsunshine.jpg?resize=810%2C360&ssl=1",
    description:
      "Joel (Jim Carrey) is stunned to discover that his girlfriend Clementine (Kate Winslet) has had her memories of their tumultuous relationship erased. Out of desperation, he contacts the inventor of the process, Dr. Howard Mierzwiak (Tom Wilkinson), to have Clementine removed from his own memory. But as Joel's memories progressively disappear, he begins to rediscover his love for Clementine. From deep within the recesses of his brain, Joel attempts to escape the procedure. As Dr. Mierzwiak and his crew (Kirsten Dunst, Mark Ruffalo, Elijah Wood) chase him through the maze of his memories, it's clear that Joel just can't get Clementine out of his head.",
  },
  {
    name: "Mulholland Drive",
    url:
      "https://movies-b26f.kxcdn.com/wp-content/uploads/2020/04/Mxdwn-Movies-Mulholland-Drive.2.jpg",
    description:
      "A dark-haired woman (Laura Elena Harring) is left amnesiac after a car crash. She wanders the streets of Los Angeles in a daze before taking refuge in an apartment. There she is discovered by Betty (Naomi Watts), a wholesome Midwestern blonde who has come to the City of Angels seeking fame as an actress. Together, the two attempt to solve the mystery of Rita's true identity. The story is set in a dream-like Los Angeles, spoilt neither by traffic jams nor smog.",
  },
  {
    name: "Parasite",
    url: "https://d.newsweek.com/en/full/1580312/parasite-watch-online.jpg",
    description:
      "Jobless, penniless, and, above all, hopeless, the unmotivated patriarch, Ki-taek, and his equally unambitious family--his supportive wife, Chung-sook; his cynical twentysomething daughter, Ki-jung, and his college-age son, Ki-woo--occupy themselves by working for peanuts in their squalid basement-level apartment. Then, by sheer luck, a lucrative business proposition will pave the way for an ingeniously insidious scheme, as Ki-woo summons up the courage to pose as an English tutor for the teenage daughter of the affluent Park family. Now, the stage seems set for an unceasing winner-take-all class war. How does one get rid of a parasite?",
  },
];
class Movies extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      arrows: true,
      slidesToScroll: 1,
      className: "slides",
    };
    return (
      <div className="Movie" style={{ padding: 24 }}>
        <Slider {...settings}>
          {photos.map((photos) => {
            return (
              <div>
                <img src={photos.url} className="picture" />
                <h4>{photos.name}</h4>
                <p>{photos.description}</p>
              </div>
            );
          })}
        </Slider>
        <br /> <br />
        <StarRating />
      </div>
    );
  }
}
export default Movies;
