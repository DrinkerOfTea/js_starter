/**
 * Page 2 - Example page 2
 */

import React from 'react';

import Countries from '../models/Countries';
import FilterableSelectionList from '../components/filterableselectionlist/FilterableSelectionList';

const countries = Countries.getCountries();

const styles = {
    demo: {
        minWidth: 1000
    },
    sandbox: {
        width: 400,
        height: 600,
        borderStyle: "solid",
        borderColor: "#dddddd",
        borderWidth: "1px",
        overflowY: "hidden"
    }
}

class FilterableSelectionListDemo extends React.Component {

    render() {
        return (
            <div className="filterable-selection-list-demo" style={styles.demo}>
                <h1>Filterable Selection List Demo</h1>
                <p>Filterable selection list:</p>

                <div className="sandbox" style={styles.sandbox}>
                    <FilterableSelectionList data={countries} />
                </div>
            </div>
        );
    }
}

export default FilterableSelectionListDemo;