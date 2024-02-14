import { useState } from "react";
import Axios from "axios";
import "./App.css";
import Recipetile from "./recipetile/Recipetile";

function App() {
  const YOUR_APP_ID = "7184cf21";
  const YOUR_APP_KEY = "a9337d6a73353c7c9921eb69850b411c";
  const [query, setQuery] = useState("");
  const [healthLabel, setHealthLabel] = useState("vegetarian");
  const [recipes, setRecipes] = useState([]);

  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabel}`;
  const getRecipeInfo = async () => {
    var result = await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(result.data.hits);
  };

  const onSubmit = (e) => {
    e.preventDefault(); //this will prevent page from reloading.
    getRecipeInfo();
  };

  return (
    <div className="app">
      <h1 onClick={getRecipeInfo}>
        <img
          src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Food%20and%20Drink/Sandwich.webp"
          alt="Sandwich"
          width="55"
          height="55"
        />
        🍃 Food Recipe Hub 🍃
        <img
          src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Food%20and%20Drink/Hamburger.webp"
          alt="Hamburger"
          width="55"
          height="55"
        />
      </h1>
      <form className="app__searchForm" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Type the ingredient..."
          className="app__input"
          autoComplete="Off"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <select className="app__healthLabels">
          <option
            value="vegan"
            onClick={() => {
              setHealthLabel("vegan");
            }}
          >
            Vegan
          </option>
          <option
            value="vegetarian"
            onClick={() => {
              setHealthLabel("vegetarian");
            }}
          >
            vegetarian
          </option>
          <option
            value="low-sugar"
            onClick={() => {
              setHealthLabel("low-sugar");
            }}
          >
            low-sugar
          </option>
          <option
            value="dairy-free"
            onClick={() => {
              setHealthLabel("dairy-free");
            }}
          >
            dairy-free
          </option>
          <option
            value=" immuno-supportive "
            onClick={() => {
              setHealthLabel(" immuno-supportive ");
            }}
          >
            immuno-supportive
          </option>
          <option
            value="wheat-free"
            onClick={() => {
              setHealthLabel("wheat-free");
            }}
          >
            wheat-free
          </option>
        </select>
        <input type="submit" value="Get Recipe" className="app__submit" />
      </form>
      <div className="app__recipes">
        {recipes.map((recipe, i) => {
          return <Recipetile key={i} recipe={recipe} />;
        })}
      </div>
    </div>
  );
}

export default App;
