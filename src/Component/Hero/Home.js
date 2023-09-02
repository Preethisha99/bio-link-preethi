import React from "react";
import "./Home.css";

import react from "../pic/react.png";
import nodejs from "../pic/nodejs.png";
import expresjs from "../pic/express.png";

import java from "../pic/java.png";
import js from "../pic/js.png";
import html from "../pic/html-5.png";
import css from "../pic/css-3.png";
import mysql from "../pic/mysql(1).png";
import mongodb from "../pic/mongodb.png";

import my from "../pic/my.png";

import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <>
      <section className="hero" id="home">
        <div className="container f_flex top">
          <div className="left top">
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hello It's Me <span>Preethisha R</span>
            </h1>
            <h2>
              And I'm a 
              <span>
                <Typewriter
                  words={[" Web Application.", " Developer."]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>

            <p>
              {" "}
              I am an entry level fullstack developer. I have developed a few
              number of project using MERN tools which I have posted on my
              protfolio tab. Exceptionally creative and dependable Web Developer
              with an good record of project completion and superb work ethic.
              Highly adept at conveying complex technical information to a
              variety of professional and lay audiences in a clear and
              understandable manner.
            </p>

            <div className="hero_btn d_flex">
              <div className="col_1">
                <h4>BEST SKILL ON</h4>
                <button className="btn_shadow">
                  <img src={html} alt="" />
                </button>
                <button className="btn_shadow">
                  <img src={css} alt="" />
                </button>
                <button className="btn_shadow">
                  <img src={js} alt="" />
                </button>
                <button className="btn_shadow">
                  <img src={react} alt="" />
                </button>

                <button className="btn_shadow">
                  <img src={expresjs} alt="" />
                </button>

                <button className="btn_shadow">
                  <img src={nodejs} alt="" />
                </button>
                <button className="btn_shadow">
                  <img src={java} alt="" />
                </button>
                <button className="btn_shadow">
                  <img src={mysql} alt="" />
                </button>
                <button className="btn_shadow">
                  <img src={mongodb} alt="" />
                </button>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="right_img">
              <img src={my} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
