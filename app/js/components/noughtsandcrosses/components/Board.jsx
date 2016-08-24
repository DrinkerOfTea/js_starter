import React from 'react';
import AppTheme from '../../../themes/AppTheme.jsx';
import RaisedButton from 'material-ui/RaisedButton/RaisedButton';

const styles = {
    board: {
       display: "flex",
       flexDirection: "column",
       alignItems: "flex-start"
    },
    boardRow: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start"
    }
}

class Board extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    getSquareLabel(x,y) {

        var state = this.props.board.get(x + "," + y);

        switch (state) {
            case "noughts":
                return "O";
            case "crosses":
                return "X";
            case "empty":
                return ".";
            default:
                return "?";
        }
    }

    squareChosen(x,y) {
        this.props.onSquareClick(x,y, this.props.turn);
    }

    render() {
        return (
            <div className="board">
                <div className="row1" style={styles.boardRow}>
                    <RaisedButton label={this.getSquareLabel(0,0)} onClick={this.squareChosen.bind(this,0,0)} />
                    <RaisedButton label={this.getSquareLabel(0,1)} onClick={this.squareChosen.bind(this,0,1)}/>
                    <RaisedButton label={this.getSquareLabel(0,2)} onClick={this.squareChosen.bind(this,0,2)}/>
                </div>
                <div className="row2" style={styles.boardRow}>
                    <RaisedButton label={this.getSquareLabel(1,0)} onClick={this.squareChosen.bind(this,1,0)} />
                    <RaisedButton label={this.getSquareLabel(1,1)}  onClick={this.squareChosen.bind(this,1,1)}/>
                    <RaisedButton  label={this.getSquareLabel(1,2)} onClick={this.squareChosen.bind(this,1,2)} />
                </div>
                <div className="row3" styles={styles.boardRow}>
                    <RaisedButton label={this.getSquareLabel(2,0)}  onClick={this.squareChosen.bind(this,2,0)}  />
                    <RaisedButton label={this.getSquareLabel(2,1)}  onClick={this.squareChosen.bind(this,2,1)} />
                    <RaisedButton label={this.getSquareLabel(2,2)}  onClick={this.squareChosen.bind(this,2,2)} />
                </div>
            </div>
        );
    }
}

Board.propTypes = {
    board: React.PropTypes.object.isRequired,
    turn: React.PropTypes.string.isRequired,
    onSquareClick: React.PropTypes.func
};

export default Board;