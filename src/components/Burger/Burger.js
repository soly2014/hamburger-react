import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import bs from '../../assets/global-styles/bootstrap.module.css'
import Classes from './Burger.module.scss';
import CN from 'classnames';

const Burger = (props) => { 
    let transformedIngredients = Object.keys(props.ingredients)
      .map(ingredient => {
        return [...Array(props.ingredients[ingredient])].map((_,i)=>{
          return <BurgerIngredient type={ingredient} key={ingredient+i} />
        })
      })
      .reduce((arr, el) => {
          return arr.concat(el)
      }, []);

    if(transformedIngredients.length === 0 ){
      transformedIngredients = <h3 className={CN(bs['text-center'])}>There is No Ingredients</h3>
    }
    return (
      <div className={Classes.Burger}>
          <div className={Classes.TopLayer}>
              <span className={CN(Classes.seedOne)}></span>
              <span className={CN(Classes.seedTwo)}></span>
              <span className={CN(Classes.seedThree)}></span>
              <span className={CN(Classes.seedFour)}></span>
              <span className={CN(Classes.seedFive)}></span>
          </div>
          {transformedIngredients}
          <div className={Classes.BottomLayer}></div>
      </div>
    )
}

export default Burger;
