import React from 'react';

class ScoreBoard extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {

        var message;

        if(this.props.turn === "noone")
        {
            message = "Game over: " +  this.props.winner + " has won";
        }
        else{
            message = this.props.turn + " to move";
        }

        return (
            <div className="noughts-and-crosses">
                <p>{message}</p>
            </div>
        );
    }
}

ScoreBoard.propTypes = {
    winner: React.PropTypes.string.isRequired,
    turn: React.PropTypes.string.isRequired
};

export default ScoreBoard;