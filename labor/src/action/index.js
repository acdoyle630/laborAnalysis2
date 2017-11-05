/*jshint esversion: 6*/

export const LOAD_CLOCKEDINEMPLOYEES = 'LOAD_CLOCKEDINEMPLOYEES';

export const loadClockedInEmployees = clockedInEmployees =>{
  console.log('hit action');
  return {
    type : LOAD_CLOCKEDINEMPLOYEES,
    clockedInEmployees
  };
};