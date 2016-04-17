/**
 * Main application component - with toolbar and navigation to pages
 */

import React from 'react';
import {deepPurple500} from 'material-ui/lib/styles/colors';

import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import ThemeManager from 'material-ui/lib/styles/theme-manager';

import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import NavigationMenuIcon from 'material-ui/lib/svg-icons/navigation/menu';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuItem from 'material-ui/lib/menus/menu-item';

import AppTheme from './themes/AppTheme';

import NavLink from "./NavLink.js";

const styles = {
    container: {
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-s'
    }
};

const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepPurple500,
    }
});

class Main extends React.Component {

    getChildContext() {
        return {
            muiTheme: ThemeManager.getMuiTheme(AppTheme)
        };
    }

    render() {
        return (

            <div style={styles.container}>
                <AppBar
                    className="toolbar"
                    title="App Starter Kit"
                    iconElementLeft={
                        <IconMenu
                           iconButtonElement={
                               <IconButton touch={true}>
                                    <NavigationMenuIcon />
                               </IconButton>
                           } role="nav">
                           <NavLink to="/" onlyActiveOnIndex><MenuItem primaryText="Home" /></NavLink>
                           <NavLink to="/material-ui-hello-world"><MenuItem primaryText="Material UI Hello World" /></NavLink>
                           <NavLink to="/filterable-selection-list"><MenuItem primaryText="React Filterable Selection List" /></NavLink>
                           <NavLink to="/to-do"><MenuItem primaryText="Redux To Do List" /></NavLink>
                        </IconMenu>
                    }
                />

                {this.props.children}
            </div>

        );
    }
}

Main.childContextTypes = {
    muiTheme: React.PropTypes.object
}

export default Main;
