/*jshint esversion: 6*/

export const LOAD_CLOCKEDINEMPLOYEES = 'LOAD_CLOCKEDINEMPLOYEES';

export const loadClockedInEmployees = clockedInEmployees =>{
  return {
    type : LOAD_CLOCKEDINEMPLOYEES,
    clockedInEmployees
  };
};