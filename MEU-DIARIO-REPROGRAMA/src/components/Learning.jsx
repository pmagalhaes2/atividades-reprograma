function Learning(props) {
  return (
      <div class="cards-container">
        <div class="card">
          <h3 class="card-subtitle">{props.subtitle}</h3>
          <img src={props.gif} alt="git stranger things" />
          <p class="card-text">{props.text}</p>
        </div>
      </div>
  );
}

export default Learning;
