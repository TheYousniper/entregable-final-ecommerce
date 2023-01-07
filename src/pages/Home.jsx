import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CardProduct from '../components/Home/CardProduct';
import FilterCategory from '../components/Home/FilterCategory';
import FilterPrice from '../components/Home/FilterPrice';
import ToOrderProducts from '../components/Home/ToOrderProducts';
import ToOrderProductsByName from '../components/Home/ToOrderProductsByName';
import './styles/Home.css';

const Home = () => {
  const [productsFilter, setProductsFilter] = useState();
  const [inputValue, setInputValue] = useState('');
  const [inputPrice, setInputPrice] = useState({
    from: 0,
    to: Infinity,
  });

  const products = useSelector((state) => state.products);

  useEffect(() => {
    if (products) {
      setProductsFilter(products);
    }
  }, [products]);

  const handleChange = (e) => {
    const inputValue = e.target.value.toLowerCase().trim();
    const filter = products?.filter((prod) =>
      prod.title.toLowerCase().includes(inputValue)
    );
    setProductsFilter(filter);
    setInputValue(e.target.value);
  };

  const filterCallBack = (prod) =>
    +prod.price > inputPrice.from && +prod.price <= inputPrice.to;

  return (
    <div className='home-container'>
      <div className='body-container'>
        <section className='filter-products'>
          <article className='home-filter'>
            <h2 className='filter-title'>Filter By: </h2>
            <FilterPrice setInputPrice={setInputPrice} />
            <FilterCategory setInputValue={setInputValue} />
          </article>
          <article className='home-order'>
            <div className='order-title'>
              <h2 className='orderBy-title'>Order By: </h2>
            </div>
            <div className='home-order-items'>
              <div className='order-price'>
                <h3 className='orderBy-price'>Price:</h3>
                <ToOrderProducts />
              </div>
              <div className='order-name'>
                <h3 className='orderBy-name'>Name:</h3>
                <ToOrderProductsByName />
              </div>
            </div>
          </article>
        </section>
        <section className='products-container'>
          <div className='search-container'>
            <input
              className='input-search'
              placeholder='What are you looking for?'
              value={inputValue}
              onChange={handleChange}
              type='text'
            />
          </div>
          {productsFilter?.filter(filterCallBack).length !== 0 ? (
            productsFilter
              ?.filter(filterCallBack)
              .map((product) => (
                <CardProduct key={product.id} product={product} />
              ))
          ) : (
            <img
              className='product-not-found'
              src='https://evgracias.com/images/no-products.jpg'
              alt=''
            />
          )}
        </section>
      </div>
    </div>
  );
};

export default Home;
