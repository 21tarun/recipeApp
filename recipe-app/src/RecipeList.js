import React from 'react';


const RecipeList = ({ meals }) => {
    console.log(meals)
  return (
    <div>
        {
            meals.map(x=>
                <h3>{x.strMeal}</h3>
            )

        }
    </div>
  );
};

export default RecipeList;