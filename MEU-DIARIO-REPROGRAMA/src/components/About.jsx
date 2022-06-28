function About(props) {
  return (
    <div class="about-me">
      <img src={props.image} alt="profile image" class="about-me-img" />
      <div class="about-me-text">
        <h2>{props.title}</h2>
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default About;
