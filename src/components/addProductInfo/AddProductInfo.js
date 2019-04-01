import React from 'react';

import  './addProductInfo.css';

const AddProductInfo = (status) => (
  <div className="off_disclaimer">
    <p>
    voidIt gets all of their nutrition information from the
    <a target="_blank" href="https://world.openfoodfacts.org/">database</a> at Open Food Facts
    </p>
    <div>
    {status.status === 1 ?
      <p>For More Nurtrition Information Click
        <a target="_blank" href={`https://world.openfoodfacts.org/product/${status.barcode}`}>here</a> 
      </p>
      :
      <p>Learn how to contribute in
        <a target="_blank" href="https://world.openfoodfacts.org/contribute">here</a> 
      </p>
    }
    </div>
  </div>
);

export default AddProductInfo;
