import "../styles/AboutSection.css";
import TypeScript from "../assets/Images/tools svg/Typescript";
import Python from "../assets/Images/tools svg/Python";
import Figma from "../assets/Images/tools svg/Figma";
import Nodejs from "../assets/Images/tools svg/Node";
import NestJS from "../assets/Images/tools svg/NestJS";
import FastAPI from "../assets/Images/tools svg/FastAPI";
import Django from "../assets/Images/tools svg/Django";
import React from "../assets/Images/tools svg/React";
import JavaScript from "../assets/Images/tools svg/JavaScript";

const AboutSection = () => {
  return (
    <section id="about">
      <h2>A little about me</h2>
      <div className="info">
        <div className="info-text">
          <p>
            As a full-stack developer with a strong focus on backend development, I specialize in crafting robust and scalable web applications using Python (Django and FastAPI) and TypeScript (NestJS). I'm dedicated to delivering solutions that are both efficient and impactful. If you're seeking a skilled and experienced developer to bring your web app or website vision to life, let's collaborate and make it happen. <br />
            <br />I specialize in web application and backend development, focusing on creating reliable, scalable, and high-performing solutions. I'm committed to delivering top-notch applications that are both efficient and user-friendly.
          </p>
        </div>
        <div className="info-text-2">
          <h2>Tech stack</h2>
          <Python />
          <TypeScript />
          <JavaScript />
          <NestJS />
          <FastAPI />
          <Django />
          <React />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
