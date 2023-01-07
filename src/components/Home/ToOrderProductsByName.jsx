import React from 'react';
import { useDispatch } from 'react-redux';
import {
  ascendingOrderProductsByName,
  descendingOrderProductsByName,
} from '../../store/slices/products.slice';
import './styles/ToOrderProductsByName.css';

const ToOrderProductsByName = () => {
  const dispatch = useDispatch();

  const handleAscendingByName = () => {
    dispatch(ascendingOrderProductsByName());
  };
  const handleDescendingByName = () => {
    dispatch(descendingOrderProductsByName());
  };

  return (
    <div className='order-name'>
      <button className='btn-order-name' onClick={handleAscendingByName}>Ascending By Name</button>
      <button className='btn-order-name' onClick={handleDescendingByName}>Descending By Name</button>
    </div>
  );
};

export default ToOrderProductsByName;
