import React, { useState } from "react";
import axios from "axios";
import './FoodDeletePage.css';
import Navbar from "../Components/Navbar";

function FoodDeletePage(props) {
  const [recipeId, setRecipeId] = useState("");

  const handleChange = (event) => {
    setRecipeId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.delete(`http://localhost:8080/delete?recipeId=${recipeId}`)
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
    
    <div className="food-delete-page">
      <form className="form3" onSubmit={handleSubmit}>
        <label htmlFor="recipeId">Recipe ID</label>
        <input
        className="db"
          type="text"
          id="recipeId"
          name="recipeId"
          value={recipeId}
          onChange={handleChange}
        />

        <button type="submit" className="wool">Delete Recipe</button>
      </form>
    </div>
    </div>
  );
}

export default FoodDeletePage;
