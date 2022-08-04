import "./header.css";

function Header(props) {
  return (
    <div className="header">
      <h1>{props.children}</h1>
      <img src={props.image} alt={props.description} />
    </div>
  );
}

export default Header;
