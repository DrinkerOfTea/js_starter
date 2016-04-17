/**
 * Home page: Replace this with a new home page
 */

import React from 'react';

const styles = {
    testArea: {
        height: 500,
        width: 500
    },
};

class Home extends React.Component {

    render() {
        return (
            <div className="home">
                <h1>Welcome to Starter App</h1>
                <p>Please select a demo from the menui above</p>

                <div style={styles.testArea}>

                </div>

            </div>
        );
    }
}

export default Home;