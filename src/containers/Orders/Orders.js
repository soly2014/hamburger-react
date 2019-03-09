import React,{Component} from 'react';
import Classes from './Orders.module.scss';
import bs from '../../assets/global-styles/bootstrap.module.css';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import Order from '../../components/Order/Order';
import WithErrorHandler from  '../../components/Hoc/ErrorHandler/WithErrorHandler';
class Orders extends Component {
  constructor(props){
    super(props)
    this.state= {
      orders:[],
      loading:false
    };
  }
  componentDidMount(){
      this.setState({loading:true});
      axios.get('/orders.json')
      .then(response => {
        this.setState({orders:Object.values(response.data)});
        this.setState({loading:false});
      })
      .catch(error => {
        this.setState({loading:false});
      });
  }
  render(){
    let orders = this.state.orders.map(order => {
      return <Order price={order.price}
                ingredients={order.ingredients}
                key={this.makeId()}/>;
    });
    if (this.state.loading) {
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

export default WithErrorHandler(Orders,axios);