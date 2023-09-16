import React, {useEffect, useState} from "react";
import './App.css';

const App = () =>{

  const APP_ID = '07ca0c74';
  const APP_KEY = '490834c8ef1735f3c75b9038c7bfe6ee';
  
  useEffect(() => { //runs each time the page is rendered
    getRecipes();
    }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    console.log(data)
  }


  return(
    <div className="App">
      <form className='search-form'>
        <input className='search-bar' type="text" name="" id=""/>
        <button className='search-button' type='submit'>
          Search
        </button>
      </form>
    </div>
  );
};



export default App;
