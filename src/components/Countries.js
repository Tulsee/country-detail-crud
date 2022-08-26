import React, { useContext } from 'react';
import Country from './Country';
import { CountryContext } from './context/CountryContext';

const Countries = () => {
  const [countries, setCountries] = useContext(CountryContext);
  const onDeleteAction = (name) => {
    setCountries(countries.filter((country) => country.country_name !== name));
  };
  const editCountry = (state) => {
    const objIndex = countries.findIndex(
      (obj) => obj.country_name === state.name
    );
    if (objIndex === -1) {
      return;
    }
    const updatedCountry = {
      ...countries[objIndex],
      country_name: state.name,
      population: state.population,
      capital: state.capital,
      literacy_rate: state.literacy_rate,
    };
    // Here you can put updated country detail to api
    console.log(updatedCountry);
  };

  return (
    <div>
      {countries.length > 0 ? (
        <div>
          {countries?.map((country) => (
            <Country
              key={country.country_name}
              country={country}
              onDelete={onDeleteAction}
              editCountry={editCountry}
            />
          ))}
        </div>
      ) : (
        <h1>No countries list</h1>
      )}
    </div>
  );
};

export default Countries;
