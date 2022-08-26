import React, { useState } from 'react';

const EditCountry = ({ country, editCountry }) => {
  const [name, setName] = useState(country.country_name);
  const [capital, setCapital] = useState(country.capital);
  const [population, setPopulation] = useState(country.population);
  const [literacyRate, setLiteracyRate] = useState(
    country.literacy_rate.split('%')[0]
  );

  const onSubmit = (e) => {
    e.preventDefault();
    const rate = literacyRate + '%';
    editCountry({
      name,
      capital,
      population,
      literacy_rate: rate,
    });
  };
  return (
    <div className='card'>
      <form className='add-form card-body' onSubmit={onSubmit}>
        <div className='form-control'>
          <label>Country Name</label>
          <input type='text' required value={name} readOnly />
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
          value='Save Edited Detail'
          className='btn btn-block btn-info'
        />
      </form>
    </div>
  );
};

export default EditCountry;
