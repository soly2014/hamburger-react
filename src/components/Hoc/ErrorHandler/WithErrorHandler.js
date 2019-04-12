import React,{Component} from 'react';
import Modal from '../../UI/Modal/Modal';

const withErrorHandler = (WrappedComponent,axios) => {
    return class extends Component {
      constructor(props){
        super(props)
        this.state = {
          error:null
        }
      }
      componentWillMount () {
        axios.interceptors.request.use(req => {
            this.setState({error: null});
            return req;
        },error => {
            this.setState({error: error});
        });

        axios.interceptors.response.use(res => res, error => {
            this.setState({error: error});
        });
      }

      componentWillUnmount () {
        axios.interceptors.request.eject( this.reqInterceptor );
        axios.interceptors.response.eject( this.resInterceptor );
      }

      errorConfirmedHandler = () => {
        this.setState({error: null});
      }
    render(){
          return (
            <>
              <Modal
                show={this.state.error}
                cancelModal={this.errorConfirmedHandler}
                >{this.state.error ? this.state.error.message : null}</Modal>
              <WrappedComponent {...this.props}/>
            </>
          )
        }
      }
}

export default withErrorHandler;