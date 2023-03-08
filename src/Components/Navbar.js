import React from 'react';
import './Navbar.css';
import {Outlet,Link} from "react-router-dom";


function Navbar() {
  return (
    <div>
      <nav>
      <div className="logo">aLL rECIPES</div>
      <ul className="nav-links">
        <Link className="p1" to="/"><li>Home</li></Link>
        <Link className="p1" to="/all"><li>All Recipes</li></Link>
        <Link className="p1" to="/byname"><li>Recipe</li></Link>
        <Link className="p1"to="/create"><li>Add Recipe</li></Link>
        <Link className="p1" to="/update"><li>Update Recipe</li></Link>
        <Link className="p1" to="/delete"><li>Delete Recipe</li></Link>  
      </ul>
      </nav>
<Outlet/>
    </div>
  );
}

export default Navbar;



// import React from "react";
// import { Outlet, Link} from "react-router-dom";
// import './Navbar.css';

// function Navbar() {
//   const [click, setClick] = React.useState(false);

//   const handleClick = () => setClick(!click);
//   const Close = () => setClick(false);
  
//   return (
//     <div>
//      <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
//       <nav className="navbar" onClick={e => e.stopPropagation()}>
//         <div className="nav-container">
//           <a className="nav-logo">
//             Expense Tracker
//             <i className="fa fa-code"></i>
//           </a>
//           <ul className={click ? "nav-menu active" : "nav-menu"}>
//             <li className="nav-item">
//             <Link to="/">
//               <a
//                 activeClassName="active"
//                 className="nav-links"
//                 onClick={click ? handleClick : null}
//               >
                
//                 Home
//               </a>
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/category">
//               <a
//                 activeClassName="active"
//                 className="nav-links"
//                 onClick={click ? handleClick : null}
//               >
//                 Add Expense
//               </a>
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/expense">
//               <a
//                 activeClassName="active"
//                 className="nav-links"
//                 onClick={click ? handleClick : null}
//               >
//                 Expense
//               </a>
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/category">
//               <a
//                 activeClassName="active"
//                 className="nav-links"
//                 onClick={click ? handleClick : null}
//               >
//                 Add Expense
//               </a>
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/category">
//               <a
//                 activeClassName="active"
//                 className="nav-links"
//                 onClick={click ? handleClick : null}
//               >
//                 Add Expense
//               </a>
//               </Link>
//             </li>
//             <li className="nav-item">
//               <a
//                 activeClassName="active"
//                 className="nav-links"
//                onClick={click ? handleClick : null}
//               >
//                 Profile
//               </a>
//             </li>
//           </ul>
//           <div className="nav-icon" onClick={handleClick}>
//             <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
//           </div>
//         </div>
//       </nav>
//       <Outlet/>
//     </ div>
//   );
// }
// export default Navbar;