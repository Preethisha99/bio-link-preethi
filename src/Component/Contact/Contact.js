import React, { useRef, useState } from "react";
import contact1 from "./contact1.png";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k060909",
        "template_zkkrs9c",
        e.target,
        "V8Kv59mrOgq7HQGcT"
      )
      .then(
        (result) => {
          setData([...data]);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <section className="Contact" id="contact">
        <div className="container top">
          <div className="heading text-center">
            <h4>CONTACT</h4>
            <h1>Contact With Me</h1>
          </div>

          <div className="content d_flex">
            <div className="left">
              <div className="box box_shodow">
                <div className="img">
                  <img src={contact1} width="200px" alt="" />
                </div>
                <div className="details">
                  <h1>Preethi</h1>
                  <p>Web developer</p>
                  <p>
                    I am available for freelance work. Connect with me via and
                    call in to my account.
                  </p>{" "}
                  <br />
                  <p>Phone: +919488300654</p>
                  <p>Email: preethiinfo11@gmail.com</p> <br />
                  <span>FIND WITH ME</span>
                  <div className="button f_flex">
                    <button className="btn_shadow">
                      <a href="https://www.facebook.com/profile.php?id=100013207804688">
                        <i className="fab fa-facebook-f">FaceBook</i>
                      </a>
                    </button>
                    <button className="btn_shadow">
                      <a href="https://www.instagram.com/flexy.22/?next=%2F">
                        <i className="fab fa-instagram">Instagram</i>
                      </a>
                    </button>
                    <button className="btn_shadow">
                      <a href="https://twitter.com/preethi/likes">
                        {" "}
                        <i className="fab fa-twitter">Twitter</i>
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="right box_shodow">
              <form ref={form} onSubmit={sendEmail}>
                <div className="f_flex">
                  <div className="input row">
                    <span>YOUR NAME</span>
                    <input type="text" name="message" />
                  </div>
                  <div className="input row">
                    <span>PHONE NUMBER </span>
                    <input type="number" name="message" />
                  </div>
                </div>
                <div className="input">
                  <span>EMAIL </span>
                  <input type="email" name="user_email" />
                </div>
                <div className="input">
                  <span>SUBJECT </span>
                  <input type="text" name="message" />
                </div>
                <div className="input">
                  <span>YOUR MESSAGE </span>
                  <textarea cols="30" rows="10" name="message"></textarea>
                </div>

                <button className="btn_shadow">
                  SEND MESSAGE <i className="fa fa-long-arrow-right"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
