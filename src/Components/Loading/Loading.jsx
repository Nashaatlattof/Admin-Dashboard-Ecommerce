import React from 'react'
import { Spinner } from 'react-bootstrap';

const Loading = () => {
  return (
    <div className='loading'>
      <Spinner animation="border"  style={{fontSize: "30px", color:"#416d6d"}}/>
    </div>
  );
}

export default Loading
