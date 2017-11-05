/*jshint esversion: 6*/

import {
  LOAD_CLOCKEDINEMPLOYEES
} from '../action';

const initialState = {
   arr : []
  };

const clockedInEmployees = (state = initialState, action) =>{
  console.log('hit reducer ');
  console.log(action.clockedInEmployees);
  switch(action.type){
    case LOAD_CLOCKEDINEMPLOYEES:

      return [...action.clockedInEmployees];

      default: return state;
  }
};


export default clockedInEmployees;
