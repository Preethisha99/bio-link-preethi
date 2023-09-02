import React from "react";
import logo from "./pic/my.jpg";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="conatiner text-center top">
          <div className="logo">
            <img src={logo} width="50px" alt="" />
          </div>
          <div className="hero_btn d_flex">
            <div className="container text-center">
              <h4>FIND WITH ME</h4>
              <div className="button">
                <button className="btn_shadow">
                  <a href="https://github.com/Preethisha99">
                    {" "}
                    <i class="fab fa-github">Git-hub</i>
                  </a>
                </button>
                <button className="btn_shadow">
                  <a href="https://www.instagram.com/accounts/onetap/?next=%2F">
                    <i className="fab fa-instagram">Instagram</i>
                  </a>
                </button>
                <button className="btn_shadow">
                  <a href="www.linkedin.com/in/preethisha99">
                    {" "}
                    <i class="fab fa-linkedin-in">LinkedIn</i>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
