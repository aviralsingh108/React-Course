import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement("h1", { id: "heading1" }, "First heading");
const heading2 = React.createElement(
  "h2",
  { id: "heading2" },
  "Second Heading"
);
const container = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
]);
console.log(container);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);

// JSX

const headingNew = <h1>This is a heading with JSX</h1>;

const root2 = ReactDOM.createRoot(document.getElementById("root"));

root2.render(headingNew);

// Functional Components

const HeaderComponent = () => {
  return <h1>Heading with a functional component</h1>;
};

const root3 = ReactDOM.createRoot(document.getElementById("root"));
// root3.render(HeaderComponent());  //Another Way of doing it

root3.render(<HeaderComponent />);
