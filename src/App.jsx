import React from "react";
import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <h1>Padre Ginos's - Order Now</h1>
      <Pizza name="Pepperoni" description="pep, cheese, n stuff" />
      <Pizza name="Hawaiian" description="ham, pineapple, and cheese" />
      <Pizza name="Veggie" description="peppers, onions, mushrooms, and cheese" />
      <Pizza name="Meat Lovers" description="pepperoni, sausage, ham, and cheese" />
      <Pizza name="BBQ Chicken" description="bbq sauce, chicken, red onions, and cheese" />
      <Pizza name="Buffalo Chicken" description="buffalo sauce, chicken, blue cheese, and cheese" />
      <Pizza name="Margherita" description="tomato sauce, fresh mozzarella, basil, and cheese" />
      <Pizza name="Supreme" description="pepperoni, sausage, bell peppers, onions, and cheese" />
      </div>
  )
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
