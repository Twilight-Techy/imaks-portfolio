import React, { useState, useEffect } from "react";
import bitmoji from "../assets/Images/iMaks.png";
import "../styles/HomeSection.css";

const HomeSection = () => {
  const [words, setWords] = useState([
    "AI/ML Enthusiast",
    "Technical Writer",
  ]);
  const [currentWord, setCurrentWord] = useState("");

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setCurrentWord(words[index]);
      index = (index + 1) % words.length;
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [words]);

  return (
    <>
      <section id="home">
        <div className="main">
          <div className="home-1">
            <div className="hero_head_container animate__animated animate__fadeInLeft">
              <p className="my_name_is"> Hi, my name is</p>
              <h1 className="name">Ibrahim <br />Makanjuola</h1>
              <span className="techie">Full-Stack Developer</span>
            </div>
            <p className="home_title">{currentWord}</p>

            {/* <button className="blog_btn"> */}
            <a href="#" className="blog_btn_link">
              Visit my blog!
            </a>
            {/* </button> */}

            <div className="icons animate__animated animate__fadeInUp">
              <a href="https://github.com/Twilight-Techy">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/ibrahim-makanjuola/">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://www.instagram.com/twilight_techy/">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://x.com/Twilight_Techie">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="home-2">
            <img
              src={bitmoji}
              className="bitmoji"
              alt="Image of Ibrahim Makanjuola"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeSection;
