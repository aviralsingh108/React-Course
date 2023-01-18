import logo from ".././assets/images/foodVillaLogo.png";

const Title = () => (
  <a href="/">
    <img className="logo" alt="logo" src={logo} />
  </a>
);

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
