import React from 'react';
import { Product } from '../../components/Product';
import { client } from '../../lib/client';

const collection = ({ products }) => {
  return (
    <div>
      <div className='products-heading'>
      <h2>Shop all</h2>
      <p>speaker There are many variations passages</p>
      </div>
    <div className="products-container">
    {products?.map((product) => (
      <Product key={product._id} product={product} />
    ))}
  </div> 
  </div>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  

  return {
    props: { products },
  };
};

export default collection;