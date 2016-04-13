/**
 * Page 2 - Example page 2
 */

import React from 'react';

import Countries from '../models/Countries';
import FilterableSelectionList from '../components/FilterableSelectionList';

const countries = Countries.getCountries();

const styles = {
    sandbox: {
        width: 400,
        height: 600,
        borderStyle: "solid",
        borderColor: "#dddddd",
        borderWidth: "1px",
        overflowY: "hidden"
    }
}

class Page2 extends React.Component {

    render() {
        return (
            <div className="page2">
                <h1>Page 2</h1>
                <p>Filterable selection list:</p>

                <div className="sandbox" style={styles.sandbox}>
                    <FilterableSelectionList data={countries} />
                </div>
            </div>
        );
    }
}

export default Page2;