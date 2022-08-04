import "./learning.css";

function Learning(props) {
  return (
    <div className="cards-container">
      <div className="card">
        <h3 className="card-subtitle">{props.subtitle}</h3>
        <img src={props.gif} alt="git stranger things" />
        <p className="card-text">{props.text}</p>
      </div>
    </div>
  );
}

export default Learning;
