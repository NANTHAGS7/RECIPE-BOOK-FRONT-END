import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Components/Navbar';
import './GetRecipeByName.css';

const FoodStartPage = () => {
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleInputChange = (event) => {
        setSearchValue(event.target.value);
    }

    const handleSearch = (event) => {
        event.preventDefault();
        axios.get(`http://localhost:8080/recipeDetails/${searchValue}`)
            .then(response => {
                setSearchResults(response.data);
            })
            .catch(error => console.log(error));
    }


    return(
        <div>
            <Navbar></Navbar>
            <div className="cont4">
            <form className="cont3" onSubmit={handleSearch}>
                <h1>Recipe Details</h1>
                <input className="cont1" type="text" value={searchValue} onChange={handleInputChange} />
                <br></br>
                <button className="cont2" type="submit">Search</button>
            </form>
            <ul>
                {searchResults.map(recipe => (
                    <li key={recipe.id}>
                        <h3><a href={recipe.procedure}>{recipe.recipeName}</a></h3>
                        <h4>Main Ingredient: {recipe.mainIngrediant}</h4>
                        <h5>Origin: {recipe.origin}</h5>
                    </li>
                ))}
            </ul>
        </div>
        
        </div>
    );
}

export default FoodStartPage;


