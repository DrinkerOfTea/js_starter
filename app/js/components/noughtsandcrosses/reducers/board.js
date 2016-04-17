import {Map} from 'immutable';

// Return a board in its initial state
const setupBoard = () => {

  // Set up a board with every square empty:
  let board = Map( [
    ["0,0", "empty"], ["0,1", "empty" ], ["0,2", "empty"],
    ["1,0", "empty"], ["1,1", "empty" ], ["1,2", "empty"],
    ["2,0", "empty" ], ["2,1", "empty"], ["2,2", "empty" ]
  ] );

  // Create initial state object:
  return {
    board,
    winner: "noone",
    turn: "noughts"
  }
};

const checkWinner = (board) => {

    //Check columns:
    for(let x=0; x < 3; x++) {
        if(board.get(x + "," + 0) === "noughts" && board.get(x + "," + 1) === "noughts" && board.get(x + "," + 2) === "noughts" ) {
            return "noughts";
        }
        if(board.get(x + "," + 0) === "crosses" && board.get(x + "," + 1) === "crosses" && board.get(x + "," + 2) === "crosses" ) {
            return "crosses";
        }
    }

    //Check rows:
    for(let y=0; y < 3; y++) {
        if(board.get(0 + "," + y) === "noughts" && board.get(1 + "," + y) === "noughts" && board.get(2 + "," + y) === "noughts" ) {
            return "noughts";
        }
        if(board.get(0 + "," + y) === "crosses" && board.get(1 + "," + y) === "crosses" && board.get(2 + "," + y) === "crosses" ) {
            return "crosses";
        }
    }

    //Check diagonals:
    if(board.get(0+","+0) === "noughts" && board.get(1+","+1) === "noughts" && board.get(2+","+2) === "noughts")
    {
        return "noughts";
    }
    if(board.get(0+","+0) === "crosses" && board.get(1+","+1) === "crosses" && board.get(2+","+2) === "crosses")
    {
        return "crosses";
    }

    if(board.get(0+","+2) === "noughts" && board.get(1+","+1) === "noughts" && board.get(2+","+0) === "noughts")
    {
        return "noughts";
    }
    if(board.get(0+","+2) === "crosses" && board.get(1+","+1) === "crosses" && board.get(2+","+0) === "crosses")
    {
        return "crosses";
    }

    return "noone";
};

const checkBoardFull = (board) => {

    for(let x=0; x <3; x++) {
        for(let y=0; y < 3; y++) {
            if(board.get(x + "," + y) === "empty") {
                return false;
            }
        }
    }

    console.log("FULL");

    return true;
};

const makeMove = (state, action) => {

    // Turn must equal the player making the move (return otherwise):
    if( action.player !== state.turn )
    {
        return state;
    }

    let square = action.x + "," + action.y;

    var squareStatus = state.board.get(square);

    if(squareStatus === "empty")
    {
        let newBoard = state.board.set(square, action.player);

        //Check win condition:
        let winner = checkWinner(newBoard);

        let turn = "noone";

        if( checkBoardFull(newBoard) ) {
            turn = "noone";
        }
        else if(winner == "noone") {
            if(state.turn === "noughts") {
                turn = "crosses";
            }
            else{
                turn = "noughts";
            }
        }

        return {
            board: newBoard,
            winner,
            turn
        }
    }

    return state;
}

const board = (state, action) => {

  if(!state) {
    state = setupBoard();
  }

  switch (action.type) {
    case 'MAKE_MOVE':
      return makeMove(state, action);
    default:
      return state;
  }
}

export default board
