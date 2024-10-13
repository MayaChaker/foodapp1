import { useEffect, useState } from "react";
import styles from "./fooddetails.module.css";
import ItemList from "./ItemList";

function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "9b804610e6a64000a510eb3fd5e9f74c";
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.receipeName}>{food.title}</h1>
        <img className={styles.receipeImage} src={food.image} alt="" />
        <div className={styles.receipeDetails}>
          <span>
            <strong>🕥 {food.readyInMinutes} Minutes </strong>
          </span>

          <span>
            👨‍👩‍👦‍👦<strong> Serves {food.servings}</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? "🥕Vegeterian" : "🍗Non-Vegeterian"}
            </strong>
          </span>

          <span>
            <strong>{food.vegan ? "🐮Vegan" : ""}</strong>
          </span>
        </div>
        <div>
          💲
          <span>
            <strong>{food.pricePerServing / 100} Per Serving</strong>
          </span>
        </div>
      </div>

      <div>
        <h2>Ingredients</h2>
        <ItemList food={food} isLoading={isLoading} />
        <h2>Instructions</h2>
        <div className={styles.receipeInstructions}>
          <ol>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default FoodDetails;
