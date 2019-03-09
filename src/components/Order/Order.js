import React from 'react';
import bs from '../../assets/global-styles/bootstrap.module.css';
import Classes from './Order.module.scss';

const Order = (props) => {
  const spanStyle = {
    border:'1px solid #CCC',
    padding:'2px 10px',
    display:'inline-block',
    fontSize:'18px',
    fontWeight:'normal'

  };
  const parStyle ={
    textAlign:'left',
    fontSize:'25px',
    fontWeight:'bold'
  };
  const ingredientsSpan = [];
  for (const ig in props.ingredients) {
    if (props.ingredients.hasOwnProperty(ig)) {
      ingredientsSpan.push(<span key={ig} style={spanStyle}>{ig}({props.ingredients[ig]})</span>);
    }
  }

  return (
    <div className={bs['row']}>
      <div className={[bs['col-md-12'],Classes.Order].join(' ')}>
        <p style={parStyle}>Ingredients: { ingredientsSpan } </p>
        <p style={parStyle}>Price: <span style={spanStyle}>{props.price} LE</span></p>
      </div>
    </div>
  );
}

export default Order;