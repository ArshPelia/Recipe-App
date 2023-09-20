import React, {useEffect, useState} from "react";
import './search.css';
import Recipe from "../recipe/Recipe";

const Search = () =>{

  const APP_ID = process.env.REACT_APP_EDEMAM_APP_ID;
  const APP_KEY = process.env.REACT_APP_EDEMAM_APP_KEY;

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken')
  
  useEffect(() => { //runs when the submit button is run
    getRecipes();
    }, [query]);

  const getRecipes = async () => {
    try {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      if (!response.ok) {
        throw new Error('Failed to fetch recipes');
      }
      const data = await response.json();
      setRecipes(data.hits)
      console.log(data.hits)
    } catch (error) {
      console.error(error);
      // handle the error, e.g. display an error message to the user
    }
  }
  
  const updateSearch = e => {
    setSearch(e.target.value)
    console.log(search)
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }
  
  return(
    <div className="search">
      <form className='search-form' onSubmit={getSearch}>
        <input className='search-bar' type="text" value={search} onChange={updateSearch}/>
        <button className='btn' type='submit'>
          Search
        </button>
      </form>
	    <section id='recipe'>
        <div className='container recipe__container'>
          {recipes.map(recipe => (
            <Recipe
              key={recipe.recipe.label}
              title={recipe.recipe.label} 
              calories={Math.round(recipe.recipe.calories)}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
              dishType={recipe.recipe.dishType}
              />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Search;
