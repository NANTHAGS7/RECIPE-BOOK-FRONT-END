import React, { useState } from "react";
import axios from "axios";
import './FoodUpdatePage.css'
import Navbar from "../Components/Navbar";

function FoodUpdatePage() {
  const [recipe, setRecipe] = useState({
    recipeId: "",
    recipeName: "",
    mainIngrediant: "",
    origin: "",
    procedure: "",
  });

  const handleChange = (event) => {
    setRecipe({ ...recipe, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put("http://localhost:8080/update", recipe)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
        <Navbar></Navbar>
    
    <div className="food-update-page">
      <form className="form2" onSubmit={handleSubmit}>
        <label htmlFor="recipeId">Recipe ID</label>
        <input
          type="text"
          id="recipeId"
          name="recipeId"
          value={recipe.recipeId}
          onChange={handleChange}
        />

        <label htmlFor="recipeName">Recipe Name</label>
        <input
          type="text"
          id="recipeName"
          name="recipeName"
          value={recipe.recipeName}
          onChange={handleChange}
        />

        <label htmlFor="mainIngrediant">Main Ingredient</label>
        <input
          type="text"
          id="mainIngrediant"
          name="mainIngrediant"
          value={recipe.mainIngrediant}
          onChange={handleChange}
        />

        <label htmlFor="origin">Origin</label>
        <input
          type="text"
          id="origin"
          name="origin"
          value={recipe.origin}
          onChange={handleChange}
        />

        <label htmlFor="procedure">Procedure(Link)</label>
        <input
          type="url"
          id="procedure"
          name="procedure"
          value={recipe.procedure}
          onChange={handleChange}
        />

        <br></br>
        <button type="submit" className="yurn">Update Recipe</button>
      </form>
    </div>
    </div>
  );
}

export default FoodUpdatePage;
