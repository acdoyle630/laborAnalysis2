/*jshint esversion: 6*/

import {
  LOAD_CLOCKEDINEMPLOYEES
} from '../action';

const initialState = [];

const clockedInEmployees = (state = initialState, action) =>{  switch(action.type){
    case LOAD_CLOCKEDINEMPLOYEES:
      return [...action.clockedInEmployees];

      default: return state;
  }
};


export default clockedInEmployees;
