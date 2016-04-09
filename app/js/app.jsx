import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin';
import Main from './Main'; // Our custom react component
import Home from './pages/Home';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

//Render the main App into app:
ReactDOM.render(
    //Set up react-router for navigation. Use hashHistory so we can go directly to page.
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home}/>
            <Route path="/page1" component={Page1}/>
            <Route path="/page2" component={Page2}/>
        </Route>
    </Router>,
    document.getElementById('app')
);