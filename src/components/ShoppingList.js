import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchData, setSearchData] = useState("");

  function onSearchChange(event) {
    setSearchData(event.target.value);
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  let categoryToDisplay = items.filter((item) => {
    if (selectedCategory === "All") {
      return true
    } else{
      return item.category === selectedCategory;
    }
  });
  
  const itemsToDisplay = categoryToDisplay.filter((item) => {
    return item.name.toLowerCase().includes(searchData.toLowerCase())
  })

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit = {onItemFormSubmit} />
      <Filter search={searchData} onCategoryChange={handleCategoryChange} onSearchChange={onSearchChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
