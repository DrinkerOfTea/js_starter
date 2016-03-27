// Component for a navigation link button used in Main

import React from 'react'
import { Link } from 'react-router'

// Remove the underlining from links as they are used in a menu
const styles = {
  a: {
    textDecoration: 'none'
  },
};

export default React.createClass({
  render() {
    return <Link {...this.props} activeClassName="active" style={styles.a}/>
  }
})