/**
 * Page 1: Example page of the app, with example Material-UI components
 */

import React from 'react';

import BuilderHeading from './BuilderHeading';
import List from '../../../../node_modules/material-ui/lib/lists/list';
import ListItem from '../../../../node_modules/material-ui/lib/lists/list-item';
import Checkbox from '../../../../node_modules/material-ui/lib/checkbox';
import Search from '../../../../node_modules/material-ui/lib/svg-icons/action/search';
import TextField from '../../../../node_modules/material-ui/lib/text-field';
import _ from 'lodash';
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

/**
 * Styles for the component
 */
const styles = {
    main: {
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        maxHeight: "100%",
        maxWidth: "100%",
        transition: "width 2s"
    },
    header: {
        padding: "10px 10px 10px 10px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flex: 0
    },
    filterField: {
        flexGrow: 1
    },
    searchIcon: {
        marginRight: "32px",
        marginLeft: "8px"
    },
    list: {
        overflowY: "auto",
        display: "flex",
        flexDirection: "column"
    },
    listItem: {
        paddingBottom: "10px"
    }
};

const filterItems = (items, filterTerm, selected) => {
    return items.filter( (item) => { return _.includes(selected, item.id) || item.display.toLowerCase().indexOf(filterTerm.toLowerCase()) != -1 });
}

class FilterableSelectionList extends React.Component {

    constructor(props, context) {
        super(props, context);

        //Initialised selected with elements that are already selected on input:
        var selected = [];

        _.forEach(props.data, (item) => {
            if(item.selected)
            {
                selected.push(item.id);
            }
        });

        this.state = {
            filter: '',
            selected : selected
        };

        //Bind this to filter change method
        this.handleFilterChange.bind(this);
    }

    handleFilterChange(e) {
        this.setState(
            {
                filter: e.target.value
            }
        );
    }

    handleSelectionEvent(itemId, e) {

        // Update state with whether the current item is selected:
        var selected = this.state.selected.slice();

        if(e.target.checked && !_.includes(selected, itemId))
        {
            selected.push(itemId);
        }
        else
        {
            // Remove item from array:
            _.pull(selected, itemId);
        }

        this.setState({
            selected: selected
        });
    }

    render() {

        let filteredItems;

        if( !this.state.filter || this.state.filter.length < 3 )
        {
            filteredItems = this.props.data;
        }
        else
        {
            filteredItems = filterItems(this.props.data, this.state.filter, this.state.selected);
        }

        let _this = this;

        var listItems = filteredItems.map(function(item) {

            return (
                <ListItem style={styles.listItem}
                          leftCheckbox={
                            <Checkbox key={item.id}
                                      onCheck={_this.handleSelectionEvent.bind(_this, item.id)}
                                      checked={_.includes(_this.state.selected, item.id)}
                            />
                          }
                          primaryText={item.display}
                          key={item.id} />
                )
            });

        return (

            <div className="filterableSelectionList" style={styles.main}>
                <BuilderHeading headingSections={["Restrictions", "Nationalities"]} />
                <div style={styles.header}>
                    <Search style={styles.searchIcon} />
                    <TextField style={styles.filterField} fullWidth={true} hintText="Filter" onChange={this.handleFilterChange.bind(this)} />
                </div>
                <List style={styles.list}>
                        {listItems}
                </List>
            </div>

        );
    }
}

export default FilterableSelectionList;