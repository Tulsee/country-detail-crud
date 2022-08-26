import React, { useState } from 'react';
import Countries from './components/Countries';
import Header from './components/Header';
import AddCountry from './components/AddCountry';
import { CountryProvider } from './components/context/CountryContext';

function App() {
  const [addButton, setAddButton] = useState(false);

  return (
    <CountryProvider>
      <div className='container'>
        <Header onAdd={() => setAddButton(!addButton)} />
        {addButton && <AddCountry />}
        <Countries />
      </div>
    </CountryProvider>
  );
}

export default App;
