/**
 * Created by James on 10/04/2016.
 */

import React from 'react';
import ImageNavigateNext from 'material-ui/lib/svg-icons/image/navigate-next';

import AppTheme from '../themes/AppTheme.jsx';

/**
 * Styles for the component
 */
const styles = {

    main: {
        padding: 10,
        display: "flex",
        flexDirection: "horizontal",
        alignItems: "center",
        fontSize: 18,
        backgroundColor: AppTheme.palette.primary1Color,
        color: AppTheme.palette.alternateTextColor
    },
    dividerIcon: {

    }
};

class BuilderHeading extends React.Component {

    /*propTypes: {
        headingSections:  React.PropTypes.array.isRequired
    }*/

    constructor(props, context) {
        super(props, context);

        this.state = {
        };
    }

    render() {

        var contents = [];

        for(let i=0; i < this.props.headingSections.length; i++)
        {
            if(i!=0) {
                contents.push(<ImageNavigateNext key={"nav" + i} style={styles.dividerIcon} color={AppTheme.palette.alternateTextColor}/>);
            }

            contents.push(<span key={"section" + i}>{this.props.headingSections[i]}</span>)
        }

        return (
            <div className="builderHeading" style={styles.main}>
                {contents}
            </div>
        );
    }
}

export default BuilderHeading;