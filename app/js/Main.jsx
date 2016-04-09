/**
 * Main application component - with toolbar and navigation to pages
 */

import React from 'react';
import {deepPurple500} from 'material-ui/lib/styles/colors';

import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider';

import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import NavigationMenuIcon from 'material-ui/lib/svg-icons/navigation/menu';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuItem from 'material-ui/lib/menus/menu-item';

import NavLink from "./NavLink.js";

const styles = {
    container: {
        textAlign: 'left'
    },
};

const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepPurple500,
    },
});

class Main extends React.Component {

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
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
                               <NavLink to="/page1"><MenuItem primaryText="Page 1" /></NavLink>
                               <NavLink to="/page2"><MenuItem primaryText="Page 2" /></NavLink>
                            </IconMenu>
                        }
                    />

                    {this.props.children}
                </div>
            </MuiThemeProvider>
        );
    }
}

export default Main;
