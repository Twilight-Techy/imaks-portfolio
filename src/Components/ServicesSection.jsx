import webdev from "../assets/Images/website.png";
import Service from "./Service";

const ServicesSection = () => {
  return (
    <section id="services">
      <h2>My Services🚀</h2>
      <div className="services-container">
        <Service
          title="Landing Page"
          src={webdev}
          aos="zoom-in"
          duration="1000"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae,
          rerum aperiam voluptatem cum dolorum odit sit. Sit, aspernatur.
          Laboriosam ducimus aliquam sit? Eligendi eum beatae assumenda
          pariatur, nisi officiis tempore!
        </Service>
        <Service title="E-commerce" src={webdev} aos="zoom-in" duration="2500">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae,
          rerum aperiam voluptatem cum dolorum odit sit. Sit, aspernatur.
          Laboriosam ducimus aliquam sit? Eligendi eum beatae assumenda
          pariatur, nisi officiis tempore!
        </Service>
        <Service
          title="web development"
          src={webdev}
          aos="zoom-in"
          duration="3000"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae,
          rerum aperiam voluptatem cum dolorum odit sit. Sit, aspernatur.
          Laboriosam ducimus aliquam sit? Eligendi eum beatae assumenda
          pariatur, nisi officiis tempore!
        </Service>
      </div>
    </section>
  );
};

export default ServicesSection;
