import React, { useState } from 'react';
import { FaTimes, FaPen } from 'react-icons/fa';
import EditCountry from './EditCountry';

const Country = ({ country, onDelete, editCountry }) => {
  const [showEditForm, setShowEditForm] = useState(false);

  return (
    <div className='country'>
      <h3>
        Name: {country.country_name}{' '}
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(country.country_name)}
        />
        <FaPen
          style={{ color: 'green', cursor: 'pointer' }}
          onClick={() => setShowEditForm(!showEditForm)}
        />
      </h3>
      <p>Population: {country.population}</p>
      <p>Capital: {country.capital}</p>
      <p>Literacy Rate:{country.literacy_rate}</p>
      {showEditForm && (
        <EditCountry country={country} editCountry={editCountry} />
      )}
    </div>
  );
};

export default Country;
