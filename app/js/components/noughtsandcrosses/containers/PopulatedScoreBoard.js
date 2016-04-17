//Wire up store model to Board component

import { connect } from 'react-redux'
import ScoreBoard from '../components/ScoreBoard'

const mapStateToProps = (state) => {
  return {
    winner: state.winner,
    turn: state.turn
  }
}

const PopulatedScoreBoard = connect(
  mapStateToProps,
  null
)(ScoreBoard)

export default PopulatedScoreBoard
