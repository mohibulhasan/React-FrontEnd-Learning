const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizza, {
      name: "The Pepparoni Pizza",
      description: "A classic pizza with pepperoni and cheese.",
    }),
    React.createElement(Pizza, {
      name: "The Margherita Pizza",
      description: "A simple pizza with fresh tomatoes, mozzarella, and basil.",
    }),
    React.createElement(Pizza, {
      name: "The Veggie Pizza",
      description: "A pizza loaded with fresh vegetables and cheese.",
    }),
    React.createElement(Pizza, {
      name: "The BBQ Chicken Pizza",
      description: "A delicious pizza with BBQ sauce, chicken, and cheese.",
    }),
    React.createElement(Pizza, {
      name: "The Hawaiian Pizza",
      description: "A controversial pizza with ham, pineapple, and cheese.",
    }),
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
