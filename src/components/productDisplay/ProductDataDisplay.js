import React from 'react';
import { Redirect } from 'react-router-dom';

import { HistoryHandler } from '../history';

import ProductDataFilter from './ProductDataFilter';
import ProductDisplayTitle from './ProductDisplayTitle';
import DietaryData from './DietaryData';
import AddProductInfo from '../addProductInfo';

const ProductDataDisplay = (data) => {
  const { code, status, product } = data.data;
  let p;

  if (status !== 1) {
    return <Redirect
            to={{
              pathname: '/product/not-found',
              search: `?code=${code}`
            }}
            />;
  }

  p = new ProductDataFilter(product);

  HistoryHandler.addProduct(code, p.productDataThumbView());

  return (
    <div className="productDisplay__container">
      <ProductDisplayTitle code={code} productName={product.product_name} thumb={product.image_thumb_url}/>
    
      <DietaryData product={p} />
  
      <AddProductInfo status={status} barcode={code} />
    </div>
    );
};

export default ProductDataDisplay;
