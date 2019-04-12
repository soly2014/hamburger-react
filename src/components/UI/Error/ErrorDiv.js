import React from 'react';
import bs from '../../../assets/global-styles/bootstrap.module.css';

const ErrorDiv = (props) => {
  return (
    <div className={[bs['alert'],bs['alert-danger']].join(' ')}>
        {props.errorMessage}
    </div>
  )
}

export default ErrorDiv;