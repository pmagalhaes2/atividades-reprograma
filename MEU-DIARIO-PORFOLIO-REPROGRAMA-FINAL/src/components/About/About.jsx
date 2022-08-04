import "./about.css";

function About(props) {
  return (
    <div className="about-me">
      <img src={props.image} alt="profile image" className="about-me-img" />
      <div className="about-me-text">
        <h2>{props.title}</h2>
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default About;
