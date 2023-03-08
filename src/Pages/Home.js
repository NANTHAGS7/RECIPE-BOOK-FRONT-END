import React from "react";
import Navbar from "../Components/Navbar";
import './Home.css'; 

function Home(){
    return(
        <div>
            <Navbar></Navbar>
            <div className="container">
      <h1 className="title">wELCOME tO aLL rECIPES...</h1>
      <h1 >Top 3 Recipes of all time</h1>
      <div className="recipes">
        <div className="recipe">
          <img src="https://c.ndtvimg.com/2022-03/jcliv9dg_shahi-paneer_625x300_15_March_22.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886" alt="Recipe 1" />
          <h2>Recipe 1</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et purus sit amet nunc suscipit suscipit vel vel sapien. Quisque consequat faucibus leo, eu consectetur eros venenatis eu.</p>
        </div>
        <div className="recipe">
          <img src="https://c.ndtvimg.com/2020-05/9iuj3h1g_indian-food_625x300_19_May_20.jpg" alt="Recipe 2" />
          <h2>Recipe 2</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et purus sit amet nunc suscipit suscipit vel vel sapien. Quisque consequat faucibus leo, eu consectetur eros venenatis eu.</p>
        </div>
        <div className="recipe">
          <img src="https://sunright.in/wp-content/uploads/2019/11/nov-blog1.png" alt="Recipe 3" />
          <h2>Recipe 3</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et purus sit amet nunc suscipit suscipit vel vel sapien. Quisque consequat faucibus leo, eu consectetur eros venenatis eu.</p>
        </div>
      </div>
    </div>
        </div>
    );
}

export default Home;