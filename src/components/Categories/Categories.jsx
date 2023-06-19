import React from 'react';
import classes from "./style.module.css";
import clsx from 'clsx';

const Categories = (props) => {
  const { categories, handleCategoryClick, activeCategory } = props;
  return (
    <div className={classes.tabSection}>
      {categories.map((category) => (
        <button
          key={category}
          className={clsx(classes.tab, category===activeCategory&&classes.active )}
          
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
