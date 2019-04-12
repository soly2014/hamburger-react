import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actionCreators from '../../../store/actions/index';
class Logout extends Component {
  componentDidMount() {
    this.props.onLogOut();
  }
  render(){
    return <Redirect to="/" />
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogOut: () => dispatch(actionCreators.authLogout())
  }
}

export default connect(null, mapDispatchToProps)(Logout)

