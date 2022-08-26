import React, { useState, createContext } from 'react';
import countryList from './countryList.json';

export const CountryContext = createContext();

export const CountryProvider = (props) => {
  const [Countries, setCountries] = useState(countryList);
  return (
    <CountryContext.Provider value={[Countries, setCountries]}>
      {props.children}
    </CountryContext.Provider>
  );
};
