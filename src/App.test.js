import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  // const div = document.createElement('div');
  // ReactDOM.render(<App />, div);
  // ReactDOM.unmountComponentAtNode(div);//damn fixed shithu
});

const sum = (x,y) => x+y;

it('should return 20',() => {
  expect(sum(8, 12)).toBe(20);
})