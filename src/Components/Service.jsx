const Service = (props) => {
  return (
    <div
      className="service"
      data-aos={props.aos}
      data-aos-duration={props.duration}
      data-aos-delay={props.delay}
    >
      <img className="cover-img" src={props.src} alt="" />
      <h4>{props.title}</h4>
      <p className="service_text">{props.children}</p>
    </div>
  );
};

export default Service;
