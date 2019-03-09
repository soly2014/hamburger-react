import React from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const Layout = (props) => {
    return (
        <React.Fragment>
            <Toolbar />
            {props.children}
        </React.Fragment>
    )
}

export default Layout;