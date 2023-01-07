import React from 'react';
import './styles/FilterPrice.css'

const FilterPrice = ({ setInputPrice }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputFrom = +e.target.from.value;
    const inputTo = +e.target.to.value;
    if (inputFrom && inputTo) {
      setInputPrice({
        from: inputFrom,
        to: inputTo,
      });
    } else if (!inputFrom && inputTo) {
      setInputPrice({
        from: 0,
        to: inputTo,
      });
    }else if(inputFrom && !inputTo){
        setInputPrice({
            from: inputFrom,
            to: Infinity,
        });
    }else{
        setInputPrice({
            from: 0,
            to: Infinity,
        });
    }
  };

  return (
    <section className='filter__price-container'>
      <h2 className='filter__price-title'>Price:</h2>
      <form className='filter__price-form' onSubmit={handleSubmit}>
        <div className='filter__price-item'>
          <label className='filter__price-label' htmlFor="from">From: </label>
          <input className='filter__price-input' type="number" id="from" />
        </div>
        <div className='filter__price-item'>
          <label className='filter__price-label' htmlFor="to">To: </label>
          <input className='filter__price-input' type="number" id="to" />
        </div>
        <button className='filter__price-btn'>Filter Price</button>
      </form>
    </section>
  );
};

export default FilterPrice;
