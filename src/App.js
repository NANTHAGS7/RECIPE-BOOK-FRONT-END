import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";

import FoodDeletePage from "./Pages/DeleteRecipe";
import FoodPage from "./Pages/GetRecipe";
import FoodStartPage from "./Pages/GetRecipeByName";
import Home from "./Pages/Home";
import FoodPostPage from "./Pages/PostRecipe";
import FoodUpdatePage from "./Pages/UpdateRecipe";

function App() {
    return (
      <div className="App">
        <BrowserRouter>
      <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="/all" element={<FoodPage />} />
          <Route path="/byname" element={<FoodStartPage />} />
          <Route path="/create" element={<FoodPostPage />} />
          <Route path="/update" element={<FoodUpdatePage />} />
          <Route path="/delete" element={<FoodDeletePage />} />
      </Routes>
    </BrowserRouter>
    </div>
      );
    }

    export default App;

