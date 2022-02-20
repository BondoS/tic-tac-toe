export const handleWin = (list) => {
  /*
  [0][1][2]
  [3][4][5]
  [6][7][8]
  */
  const winnerArray = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winnerArray.length; i++) {
    const [x, y, z] = winnerArray[i];
    if (list[x] === list[y] && list[y] === list[z]) {
      return list[x];
    }
  }
  return false;
};
