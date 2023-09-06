 import React from "react";
import "./App.css";
import Item from "./components/Item";
 const App=()=>{
    return(
      <div className="app-container">
        <div className="content-container">
        <h1 className="main-heading">Add your plan</h1>
        <Item/>
      </div>
      </div>
    );
 };
 
 export default App;