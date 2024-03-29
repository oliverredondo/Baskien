import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Popup from "../components/popup/Popup";
import { FiBook } from "react-icons/fi";
import { AiOutlineCar } from "react-icons/ai";
import { PiSunglasses } from "react-icons/pi";

const Home = () => {
  return (
    <div className="wrapper">
      <p className="intro-text">
        Welcome to the <span className="basque">Basque Country</span>! A region
        located in the western Pyrenees Mountains at the border between France
        and Spain. It is culturally and historically distinct, with its own
        language (Basque or Euskera) and a strong cultural identity.
        <br />
        <br />
        The <span className="basque">Basque Country</span> has earned a
        reputation as a food lover's paradise, but that's not all — this region
        also boasts amazing locations to explore and, for the adventurous,
        fantastic opportunities for hiking and surfing along its coastline.
        <br />
        <br />
        Whether it's a quick weekend escape or a leisurely week-long
        exploration, our page is your ultimate guide to unlocking the best of
        the <span className="basque">Basque Country</span>. Discover insider
        tips on where locals indulge in pintxos and uncover hidden attractions,
        and must-see museums. Prefer to venture solo? Find practical advice on
        airports, transportation, and essential Basque phrases for an authentic
        experience. Get ready to embark on your Basque adventure.
      </p>
      <section className="options">
        <div className="option">
          <Link to="/history">
            <FiBook size={70} />
            History
          </Link>
        </div>

        <div className="option">
          <Link to="/practical-information">
            <AiOutlineCar size={70} />
            Practical info
          </Link>
        </div>
        <div className="option">
          <Link to="/what-to-do">
            <PiSunglasses size={70} />
            What to do
          </Link>
        </div>
      </section>
      <Popup />
    </div>
  );
};

export default Home;
