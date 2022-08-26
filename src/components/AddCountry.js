import React, { useState, useContext } from 'react';
import { CountryContext } from './context/CountryContext';

const AddCountry = () => {
  const [Countries, setCountries] = useContext(CountryContext);
  const [name, setName] = useState('');
  const [capital, setCapital] = useState('');
  const [population, setPopulation] = useState('');
  const [literacyRate, setLiteracyRate] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const rate = literacyRate + '%';
    setCountries([
      ...Countries,
      { country_name: name, capital, population, literacy_rate: rate },
    ]);
    setName('');
    setCapital('');
    setPopulation('');
    setLiteracyRate('');
  };
  return (
    <div className='card'>
      <form className='add-form card-body' onSubmit={onSubmit}>
        <div className='form-control'>
          <label>Country Name</label>
          <input
            type='text'
            placeholder='Enter Country Name'
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <label>Capital</label>
          <input
            type='text'
            placeholder='Enter Country capital'
            value={capital}
            onChange={(e) => setCapital(e.target.value)}
            required
          />
        </div>
        <div className='form-control'>
          <label>Country Population</label>
          <input
            type='number'
            placeholder='Enter Country Population'
            required
            value={population}
            onChange={(e) => setPopulation(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <label>Country Literacy Rate</label>
          <input
            type='number'
            placeholder='Enter Country Literacy rate'
            required
            value={literacyRate}
            onChange={(e) => setLiteracyRate(e.target.value)}
          />
        </div>
        <input
          type='submit'
          value='Save Country Detail'
          className='btn btn-block btn-info'
        />
      </form>
    </div>
  );
};

export default AddCountry;
