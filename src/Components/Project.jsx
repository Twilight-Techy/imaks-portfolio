const Project = (props) => {
  return (
    <div
      className="project"
      data-aos={props.aos}
      data-aos-duration={props.duration}
      data-aos-delay={props.delay}
    >
      <div className="img-div">
        <img src={props.img_src} className="project-img" alt={props.img_alt} />
      </div>
      <div className="project-info">
        <p className="project-title">{props.title}</p>
        <p className="project-text">{props.description}</p>
        <br />

        <div className="project_btn_div">
          <a href={props.live_link} className="project_btn_link">
            {" "}
            <button className="project_btn_1">Live</button>
          </a>
          <a href={props.code_link} className="project_btn_link">
            {" "}
            <button className="project_btn_2">Code</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
