import React from 'react';
import { useDispatch } from 'react-redux';
import {
  ascendingOrderProducts,
  descendingOrderProducts,
} from '../../store/slices/products.slice';
import './styles/ToOrderProducts.css'

const ToOrderProducts = () => {
  const dispatch = useDispatch();

  const handleAscending = () => {
    dispatch(ascendingOrderProducts());
  };
  const handledescending = () => {
    dispatch(descendingOrderProducts());
  };

  return (
    <div className='order-price'>
      <button className="btn-order-price" onClick={handleAscending}>
        Ascending By Price
      </button>
      <button className="btn-order-price" onClick={handledescending}>
        Descending By Price
      </button>
    </div>
  );
};

export default ToOrderProducts;
