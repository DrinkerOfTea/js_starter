import React from 'react';
import PopulatedBoard from '../containers/PopulatedBoard'
import PopulatedScoreboard from '../containers/PopulatedScoreboard'

class NoughtsAndCrosses extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {

        return (
            <div className="noughts-and-crosses">
                <PopulatedScoreboard />
                <PopulatedBoard />
            </div>
        );
    }
}

NoughtsAndCrosses.propTypes = {
};

export default NoughtsAndCrosses;