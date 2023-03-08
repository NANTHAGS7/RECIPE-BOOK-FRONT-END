// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const RecipePage = () => {
//   const [recipes, setRecipes] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:8080/api/display')
//       .then(response => {
//         setRecipes(response.data);
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>Recipe List</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <br></br>
//             <th>Name</th>
//             <th>Ingredients</th>
//             <th>Preparation Time</th>
//             <th>Cooking Time</th>
//             <th>Total Time</th>
//             <th>Difficulty Level</th>
//             <th>Procedure</th>
//           </tr>
//         </thead>
//         <tbody>
//           {recipes.map(recipe => (
//             <tr key={recipe.recipeId}>
//               <td>{recipe.recipeId}</td>
//               <td>{recipe.recipeName}</td>
//               <td>
//                 <ul>
//                   {recipe.ingredients.map(ingredient => (
//                     <li key={ingredient}>{ingredient}</li>
//                   ))}
//                 </ul>
//               </td>
//               <td>{recipe.preparationTime}</td>
//               <td>{recipe.cookingTime}</td>
//               <td>{recipe.totalTime}</td>
//               <td>{recipe.difficultyLevel}</td>
//               <td><a href={recipe.procedure}>Procedure</a></td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default RecipePage;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const FoodGetPage = ({ recipeName }) => {
//   const [recipeId, setRecipeId] = useState('');
//   const [ingredients, setIngredients] = useState([]);
//   const [preparationTime, setPreparationTime] = useState('');
//   const [cookingTime, setCookingTime] = useState('');
//   const [totalTime, setTotalTime] = useState('');
//   const [difficultyLevel, setDifficultyLevel] = useState('');
//   const [procedure, setProcedure] = useState('');

//   useEffect(() => {
//     axios.get(`http://localhost:8080/api/recipeDetails/${recipeName}`)
//       .then(response => {
//         const { recipeId, ingredients, preparationTime, cookingTime, totalTime, difficultyLevel, procedure } = response.data;
//         setRecipeId(recipeId);
//         setIngredients(ingredients);
//         setPreparationTime(preparationTime);
//         setCookingTime(cookingTime);
//         setTotalTime(totalTime);
//         setDifficultyLevel(difficultyLevel);
//         setProcedure(procedure);
//       })
//       .catch(error => console.error(error));
//   }, [recipeId]);

//   return (
//     <div>
//       <p>Recipe ID: {recipeId}</p>
//       <p>Recipe Name: {recipeName}</p>
//       <p>Ingredients:</p>
//       <ul>
//         {ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)}
//       </ul>
//       <p>Preparation Time: {preparationTime}</p>
//       <p>Cooking Time: {cookingTime}</p>
//       <p>Total Time: {totalTime}</p>
//       <p>Difficulty Level: {difficultyLevel}</p>
//       <p>Procedure: <a href={procedure} target="_blank" rel="noopener noreferrer">{procedure}</a></p>
//     </div>
//   );
// };

// export default FoodGetPage;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const FoodGetPage = () => {
//   const [recipes, setRecipes] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:8080/display')
//       .then(response => setRecipes(response.data))
//       .catch(error => console.error(error));
//   }, []);

//   return (
//     <div>
//       {recipes.map(recipe => (
//         <div key={recipe.recipeId}>
//           <p>Recipe Name: {recipe.recipeName}</p>
//           <p>Recipe ID: {recipe.recipeId}</p>
//           <p>Ingredients:</p>
//           <ul>
//             {recipe.ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)}
//           </ul>
//           <p>Procedure: <a href={recipe.procedure} target="_blank" rel="noopener noreferrer">{recipe.procedure}</a></p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FoodGetPage;



// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const RecipePage = () => {
//   const [recipes, setRecipes] = useState([]);

//   useEffect(() => {
//     const fetchRecipes = async () => {
//       const response = await axios.get("http://localhost:8080/display");
//       setRecipes(response.data);
//     };
//     fetchRecipes();
//   }, []);

//   return (
//     <div>
//       <h1>Recipes</h1>
//       {recipes.map((recipe) => (
//         <div key={recipe.recipeId}>
//           <h2>
//             Recipe Name:{recipe.recipeName} 
//          </h2>
//           <p>Ingredients: {recipe.ingredients}</p>
          
//           <>
//             <p>Procedure:</p><a href={`/recipes/${recipe.recipeId}`}>{recipe.procedure}</a>
//           </>
          
//         </div>
//       ))}
//     </div>
//   );
// };

// export default RecipePage;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Components/Navbar';

const FoodPage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await axios.get('http://localhost:8080/display');
      setRecipes(response.data);
    };
    fetchRecipes();
  }, []);

  return (
    <div>
        <Navbar></Navbar>
        <div className="xy">
            
        
      <marquee><h1>All Recipes</h1></marquee>
      <div className="boxy">
      
      {recipes.map(recipe => (
        <div key={recipe.recipeId}>
          <h1>{recipe.recipeId} {recipe.recipeName}</h1>
          <h2>Main Ingredient: {recipe.mainIngrediant}</h2>
          <h3>Origin: {recipe.origin}</h3>
          <h5>Procedure: <a href={recipe.procedure}>{recipe.procedure}</a></h5>
        </div>
      ))}
      </div>
    </div>
    </div>
  );
};

export default FoodPage;
