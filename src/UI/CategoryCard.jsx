import React from 'react';
import categoryCardStyle from "../css/categoryCard.module.css";

export default function CategoryCard({data}) {
  const {category,description}=data;
  return (
    <div className={categoryCardStyle.outerContainer}>
      <div className={categoryCardStyle.container}>
        <h2>{category}</h2>
        <p>{description}</p>
        <div className={categoryCardStyle.btn}>
          <button>See BLog</button>
        </div>
      </div>
    </div>
  )
}
