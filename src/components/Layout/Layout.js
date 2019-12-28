import React,{Component} from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import {connect} from 'react-redux';

class Layout extends Component {
    constructor(props){
        super(props)
        this.state ={
            showSideDrawer:false
        };
        this.onClickBurgerMenu = this.onClickBurgerMenu.bind(this);
    }
    onClickBurgerMenu(){
        this.setState(prevState=>{
            return {
                showSideDrawer:!prevState.showSideDrawer
            }
        })
    }
    render(){
        return (
            <React.Fragment>
                <Toolbar onClickBurgerMenu={this.onClickBurgerMenu} isAuth={this.props.isAuthenticated}/>
                <SideDrawer open={this.state.showSideDrawer} onClickBurgerMenu={this.onClickBurgerMenu}/>
                {this.props.children}
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

export default connect( mapStateToProps )( Layout );