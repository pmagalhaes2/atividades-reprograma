function NavLink(props) {
  return (
    <div className="nav-link">
      <a class="link" href={props.href} target="_blank">
        {props.name}
        <img src="/src/images/simple-icon-arrow-white.png" alt="icon" />
      </a>
    </div>
  );
}

export default NavLink;
