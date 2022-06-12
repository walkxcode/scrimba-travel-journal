import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

import data from "./data/data";

function App() {
  const cards = data.map((card) => {
    return <Card key={card.id} {...card} />;
  });
  return (
    <div className="container">
      <Navbar />
      <section className="cards">{cards}</section>
    </div>
  );
}

export default App;
