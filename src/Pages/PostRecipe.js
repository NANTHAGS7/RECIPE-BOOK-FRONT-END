import React, { useState } from "react";
import axios from "axios";
import "./FoodPostPage.css";
import Navbar from "../Components/Navbar";

const FoodPostPage = () => {
  const [recipeId, setRecipeId] = useState("");
  const [recipeName, setRecipeName] = useState("");
  const [mainIngrediant, setMainIngrediant] = useState("");
  const [origin, setOrigin] = useState("");
  const [procedure, setProcedure] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const recipe = { recipeId, recipeName, mainIngrediant, origin, procedure };
    axios.post("http://localhost:8080/create", recipe)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
        <Navbar></Navbar>
    
    <div className="food-post-container">
      <h2>Food Post Page</h2>
      <form className="form1" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="recipeId">Recipe ID</label>
          <input
            type="text"
            id="recipeId"
            value={recipeId}
            onChange={(event) => setRecipeId(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="recipeName">Recipe Name</label>
          <input
            type="text"
            id="recipeName"
            value={recipeName}
            onChange={(event) => setRecipeName(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="mainIngredient">Main Ingredient</label>
          <input
            type="text"
            id="mainIngredient"
            value={mainIngrediant}
            onChange={(event) => setMainIngrediant(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="origin">Origin</label>
          <input
            type="text"
            id="origin"
            value={origin}
            onChange={(event) => setOrigin(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="procedure">Procedure (YouTube link)</label>
          <input
            type="text"
            id="procedure"
            value={procedure}
            onChange={(event) => setProcedure(event.target.value)}
          />
        </div>

        <button type="submit" className="cotton">Post Recipe</button>
      </form>
    </div>
    </div>
  );
};

export default FoodPostPage;
