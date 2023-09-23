import React, { useEffect, useState } from "react";
import './search.css';
import Recipe from "../recipe/Recipe";

const Search = () => {
  const APP_ID = process.env.REACT_APP_EDEMAM_APP_ID;
  const APP_KEY = process.env.REACT_APP_EDEMAM_APP_KEY;

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');
  const [healthFilter, setHealthFilter] = useState('');
  const [dietFilter, setDietFilter] = useState('');

  useEffect(() => {
    getRecipes();
  }, [query, healthFilter, dietFilter]);

  const getRecipes = async () => {
    try {
      const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
      let filterParams = '';

      if (healthFilter) {
        filterParams += `&health=${healthFilter}`;
      }

      if (dietFilter) {
        filterParams += `&diet=${dietFilter}`;
      }

      const response = await fetch(url + filterParams);

      if (!response.ok) {
        throw new Error('Failed to fetch recipes');
      }

      const data = await response.json();
      setRecipes(data.hits);
    } catch (error) {
      console.error(error);
      // handle the error, e.g. display an error message to the user
    }
  }

  const updateSearch = (e) => {
    setSearch(e.target.value);
  }

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  const handleHealthFilterChange = (e) => {
    setHealthFilter(e.target.value);
  }

  const handleDietFilterChange = (e) => {
    setDietFilter(e.target.value);
  }

  return (
    <section>
    <div className="container">
      <form className='search-form' onSubmit={getSearch}>
        <input className='search-bar' type="text" value={search} onChange={updateSearch} />
        <button className='btn' type='submit'>
          Search
        </button>
        <div>
          <label htmlFor="healthFilter">Health Filter:</label>
          <select id="healthFilter" onChange={handleHealthFilterChange} value={healthFilter}>
            <option value="">Any</option>
            <option value="vegan">Vegan</option>
            <option value="vegetarian">Vegetarian</option>
            {/* Add more health filter options as needed */}
          </select>
        </div>
        <div>
          <label htmlFor="dietFilter">Diet Filter:</label>
          <select id="dietFilter" onChange={handleDietFilterChange} value={dietFilter}>
            <option value="">Any</option>
            <option value="low-carb">Low Carb</option>
            <option value="high-protein">High Protein</option>
            {/* Add more diet filter options as needed */}
          </select>
        </div>
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
    </section>
  );
};

export default Search;
