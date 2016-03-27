/**
 * Page 1: Example page of the app, with example Material-UI components
 */

import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import FlatButton from 'material-ui/lib/flat-button';
import Dialog from 'material-ui/lib/dialog';

class Page1 extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.handleRequestClose = this.handleRequestClose.bind(this);
        this.handleTouchTap = this.handleTouchTap.bind(this);

        this.state = {
            open: false,
        };
    }

    handleRequestClose() {
        this.setState({
            open: false,
        });
    }

    handleTouchTap() {
        this.setState({
            open: true,
        });
    }

    render() {
        const standardActions = (
            <FlatButton
                label="Okey"
                secondary={true}
                onTouchTap={this.handleRequestClose}
                />
        );

        return (
            <div className="page1">
                <h1>Page 1</h1>
                <p>This page shows a couple of example Material-UI components. Click the raised button to get a dialog.</p>
                <Dialog
                    open={this.state.open}
                    title="Super Secret Password"
                    actions={standardActions}
                    onRequestClose={this.handleRequestClose}
                    >
                    1-2-3-4-5
                </Dialog>

                <RaisedButton
                    label="Super Secret Password"
                    primary={true}
                    onTouchTap={this.handleTouchTap}
                />
            </div>
        );
    }
}

export default Page1;