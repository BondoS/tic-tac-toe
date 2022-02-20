import React, { useState } from 'react';
import Button from './Button';
import { handleWin } from '../utils/handleWin';

const Main = () => {
  const [list, setList] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);

  const status = handleWin(list);
  let message;
  if (status) {
    message = `Winner is ${status}`;
  } else {
    message = `Nest player is ${isX ? 'X' : 'O'} `;
  }

  const handleClick = (element) => {
    if (handleWin(list) || list[element]) return;
    list[element] = isX ? 'X' : 'O';
    setList(list);
    setIsX(!isX);
  };

  const renderButton = (i) => (
    <Button value={list[i]} onClick={() => handleClick(i)} />
  );

  const reset = () => {
    setList(Array(9).fill(null));
    setIsX(true);
  };
  return (
    <>
      <div style={{ display: 'flex' }} key={'row-1'}>
        <span>{renderButton(0)}</span>
        <span>{renderButton(1)}</span>
        <span>{renderButton(2)}</span>
      </div>
      <div style={{ display: 'flex' }} key={'row-2'}>
        <span>{renderButton(3)}</span>
        <span>{renderButton(4)}</span>
        <span>{renderButton(5)}</span>
      </div>
      <div style={{ display: 'flex' }} key={'row-3'}>
        <span>{renderButton(6)}</span>
        <span>{renderButton(7)}</span>
        <span>{renderButton(8)}</span>
      </div>
      {message}
      <div>
        <button onClick={() => reset()}>Reset Game</button>
      </div>
    </>
  );
};

export default Main;
