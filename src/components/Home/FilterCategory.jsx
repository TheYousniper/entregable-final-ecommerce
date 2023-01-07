import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles/FilterCategory.css';
import { getProductsByCategory } from '../../store/slices/products.slice';
import { useDispatch } from 'react-redux';
import { getAllProducts } from './../../store/slices/products.slice';

const FilterCategory = ({setInputValue}) => {
  const [categories, setCategories] = useState();
  

  useEffect(() => {
    const URL =
      'https://e-commerce-api.academlo.tech/api/v1/products/categories';
    axios
      .get(URL)
      .then((res) => setCategories(res.data.data.categories))
      .catch((err) => console.log(err));
  }, []);
  
  const dispatch = useDispatch();

  const handleClick = id => {
    dispatch(getProductsByCategory(id));
    setInputValue('');
  };
  
  const handleAllProducts = () => {
    dispatch(getAllProducts());
    setInputValue('');
  }

  return (
    <section className='category-container'>
      <h3 className='category-title'>Categories:</h3>
      <ul className='category-list'>
        <li className='category-item' onClick={handleAllProducts}>All Products</li>
        {categories?.map((category) => (
          <li className='category-item' onClick={() => handleClick(category.id)} key={category.id}>
            {category.name}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FilterCategory;
