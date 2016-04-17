export const makeMove = (x,y,player) => {
  return {
    type: 'MAKE_MOVE',
    x,
    y,
    player
  }
};
