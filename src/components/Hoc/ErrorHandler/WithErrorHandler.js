import React,{Component} from 'react';
import Modal from '../../UI/Modal/Modal';
import axios from '../../../axios-orders';

const withErrorHandler = (WrappedComponent) => {
    return class extends Component {
      constructor(props){
        super(props)
        this.state = {
          error:false
        }
      }
      componentWillMount () {
        axios.interceptors.request.use(req => {
            this.setState({error: false});
            return req;
        });
        axios.interceptors.response.use(res => res, error => {
            this.setState({error: error});
        });
      }

      errorConfirmedHandler = () => {
        this.setState({error: false});
      }
    render(){
          return (
            <>
              <Modal
                show={this.state.error}
                cancelPurchaseModal={this.errorConfirmedHandler}
                >{this.state.error ? this.state.error.message : null}</Modal>
              <WrappedComponent {...this.props}/>
            </>
          )
        }
      }
}

export default withErrorHandler;