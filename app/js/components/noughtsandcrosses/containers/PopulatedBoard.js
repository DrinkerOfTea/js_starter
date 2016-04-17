//Wire up store model to Board component

import { connect } from 'react-redux'
import { makeMove } from '../actions/actions'
import Board from '../components/Board'

const mapStateToProps = (state) => {
  return {
    board: state.board,
    turn: state.turn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSquareClick: (x,y, player) => {
      dispatch(makeMove(x,y, player));
    }
  }
}

const PopulatedBoard = connect(
  mapStateToProps,
  mapDispatchToProps
)(Board)

export default PopulatedBoard
