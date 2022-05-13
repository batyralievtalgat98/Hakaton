import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <>
    <Link to='/'>
    <button className='btn_not'>Back to home</button>
    </Link>
    <div className='body'>
      <div className='notFound'>
    <h1 className='page'>404 PAGE NOT FOUND
    
    </h1>
    </div>
    </div>
    </>



  );
};

export default NotFoundPage;