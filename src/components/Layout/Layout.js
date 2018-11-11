import React from 'react';
const Layout = (props) => {
    return (
        <React.Fragment>
            <p> Toolbar, SideDrawer, Backdrop </p>
             {props.children}
        </React.Fragment>
    )
}

export default Layout;