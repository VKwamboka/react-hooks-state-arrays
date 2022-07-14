import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    const newFoodArray = [...foods,newFood];
    setFoods(newFoodArray);
    console.log(newFood);
  }

  const foodList = foods.map((food) => (
    <li key={food.id} onClick ={()=>handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));
//updatinhg state
  function handleLiClick(id) {
    const newFoodArray = foods.map((food) => {
      if (food.id === id) {
        return {
          ...food,
          heatLevel: food.heatLevel + 1,
        };
      } else {
        return food;
      }
    });
    setFoods(newFoodArray);
  }

  //removing elements from array
  // function handleLiClick(id){
  //   const newFoodArray = foods.filter((food)=> food.id !== id);
  //   setFoods(newFoodArray)
  // }
  
  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );

  // function handleFilterChange(event) {
  // const [filterBy, setFilterBy] = useState("All");
    
  //   const foodsToDisplay = foods.filter((food) => {
  //     if (filterBy === "All") {
  //       return true;
  //     } else {
  //       return food.cuisine === filterBy;
  //     }
  //   });
  //   setFilterBy(event.target.value);
  //   return (
  //     <select name="filter" onChange={handleFilterChange}>
  //       <option value="All">All</option>
  //       <option value="American">American</option>
  //       <option value="Sichuan">Sichuan</option>
  //       <option value="Thai">Thai</option>
  //       <option value="Mexican">Mexican</option>
  //     </select>
  //   );
   
  // }
  
}

export default SpicyFoodList;
