// debugger;
// import './index.css'

var numeral = require('numeral');
// require('src/index.css')
// require('index.css');
// import numeral from 'numeral';
var  courseValue = numeral(1000).format('$0,0.00');
// debugger;

/* eslint-disable no-console */
console.log(`I would pay  ${courseValue} for this application`);
