import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./images/foodVillaLogo.png";
import Data from "./data";

const Title = () => (
  <a href="/">
    <img className="logo" alt="logo" src={logo} />
  </a>
);

const HeadingComponent = () => {
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

const baseImgUrl =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

let restauList = [...Data];

const RestaurantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
  // const { cloudinaryImageId, name, cuisines, avgRating } =
  console.log("inside component", {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
  });
  return (
    <div className="card">
      <img src={baseImgUrl + cloudinaryImageId} />
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} ⭐ </h4>
      <h2>{name}</h2>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      {restauList.map((item) => (
        <RestaurantCard {...item.data} />
      ))}
    </div>
  );
};

const Footer = () => {
  return <h1>Footer</h1>;
};

const AppLayout = () => {
  return (
    <div>
      <HeadingComponent />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
