const moment = require('moment');

let date;

date = moment().format('dddd , MMMM Do YYYY');;

console.log(date);

let numberofyears;

numberofyears = moment("1976-11-26", "YYYYMMDD").fromNow();

console.log(numberofyears);