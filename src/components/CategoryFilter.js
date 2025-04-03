import React, { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem, Box } from "@mui/material";

const CategoryFilter = ({ onCategorySelect }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const categories = ["Meme Pages", "Bollywood", "Tech", "Lifestyle", "Fitness"];

  const handleChange = (event) => {
    const value = event.target.value;
    console.log("CategoryFilter change:", value);
    setSelectedCategories(value);
    onCategorySelect(value);
  };

  return (
    <Box sx={{ mb: 3 }}>
      <FormControl fullWidth>
        <InputLabel>Select Categories</InputLabel>
        <Select
          multiple
          value={selectedCategories}
          onChange={handleChange}
          label="Select Categories"
          sx={{ borderRadius: 2 }}
        >
          {categories.map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default CategoryFilter;