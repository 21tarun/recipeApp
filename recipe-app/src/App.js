
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeList from './RecipeList';


const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');

  const fetchRecipes = async (s) => {
    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${s}`); // Replace with your API endpoint
      setRecipes(response.data);
    } catch (error) {
      console.error(error);
    }
  };






  return (
    <div>
      <input
        type="text"
        placeholder="Search recipes..."
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
      />
      <button onClick={()=>fetchRecipes(search)}>click</button>
      <RecipeList meals={recipes.meals} />
    </div>
  );
};

export default App;