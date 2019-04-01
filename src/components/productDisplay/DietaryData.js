import React from 'react';

const DietaryData = (product) => (
  <div className="productDisplay__section">
    <h3 className="productDisplay__sectionTitle">Did You voidIt?</h3>
    <div className="productDisplay__list--item">
      <span> Is this a plant based food?</span>
      <span className="productDisplay__list--value">
        {product.product.isPlantBased() === undefined ?
        "Sorry, we're not sure"
        :
        product.product.isPlantBased() ? 'Yes' : 'No'}
      </span>
    </div>
    <div className="productDisplay__list--item">
      <span>Does this product contain gluten?</span>
      <span className="productDisplay__list--value">
        {product.product.containsGluten() === undefined ?
        "Sorry, we're not sure"
        :
        product.product.containsGluten() ? 'Yes' : 'No, you voidIt'}
      </span>
    </div>
    <div className="productDisplay__list--item">
      <span>Does this product contain dairy?</span>
      <span className="productDisplay__list--value">
        {product.product.containsLactose() === undefined ?
        "Sorry, we're not sure"
        :
        product.product.containsLactose() ? 'Yes, not vegan friendly' : "No, you voidIt"}
      </span>
    </div>
    
  </div>
);

export default DietaryData;
