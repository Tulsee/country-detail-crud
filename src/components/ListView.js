import React from 'react';

const ListView = () => {
  return (
    <div className='card container mt-3'>
      <div className='card text-black bold bg-info m-3'>
        <h2 className='card-header'>Header</h2>
        <div className='card-body'>
          <h4 className='card-title'>Warning card title</h4>
          <p className='card-text'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>

        <div class='modal-footer m-2'>
          <button type='button' class='btn btn-warning btn-lg ml-2'>
            Edit
          </button>
          <button type='button' class='btn btn-danger btn-lg ml-1'>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListView;
