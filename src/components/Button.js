import React from 'react';

const Button = ({ value, onClick }) => {
  return (
    <button style={{ width: '40px', height: '40px' }} onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;
