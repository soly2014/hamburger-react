import React,{Component} from 'react';
import Classes from './Orders.module.scss';
import bs from '../../assets/global-styles/bootstrap.module.css';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import Order from '../../components/Order/Order';
import WithErrorHandler from  '../../components/Hoc/ErrorHandler/WithErrorHandler';
import {connect} from 'react-redux';
import * as actionCreators from '../../store/actions/index'
class Orders extends Component {
  componentDidMount(){
    this.props.onFetchingOrders(this.props.token);
  }
  render(){
    let orders = this.props.orders.map(order => {
      return <Order price={order.price}
                ingredients={order.ingredients}
                key={this.makeId()}/>;
    });
    if (this.props.loading) {
      orders = <Spinner />;
    }
    return (
      <div className={[Classes.Orders,bs['container'],bs['text-center']].join(' ')}>
        <h1>My Orders List</h1>
        <div className={Classes.Order}>
          {orders}
        </div>
      </div>
    );
  }

    makeId() {
      let text = "";
      let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for (let i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
    }

}

const mapStateToProps = (state, ownProps) => {
  return {
    orders: state.orders.orders,
    loading:state.orders.loading,
    token:state.auth.token
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onFetchingOrders: (token) => { dispatch(actionCreators.fetchOrders(token)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WithErrorHandler(Orders,axios))
