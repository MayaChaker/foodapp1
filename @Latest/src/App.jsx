//import React from "react";
import { useState } from "react";
import Search from "./components/Search";
// import "./App.css";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import FoodDetails from "./components/FoodDetails";
import Nav from "./components/Nav";
import FoodList from "react";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("656329");
  return (
    <div className="App">
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <FoodList setFoodId={setFoodId} foodData={foodData} />
        </InnerContainer>
        <FoodDetails foodId={foodId} />
      </Container>
    </div>
  );
}

export default App;
