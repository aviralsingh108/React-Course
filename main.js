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
