import React from 'react';

const Header = ({ onAdd }) => {
  return (
    <header className='header'>
      <h1>Title</h1>
      <button className='btn btn-primary' onClick={onAdd}>
        Add
      </button>
    </header>
  );
};

export default Header;
