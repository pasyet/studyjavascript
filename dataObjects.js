var d = new Date();
console.log(d);

//date method to extract the year (four digits)
year = d.getFullYear();
console.log(year);

//date method to get the month (0-11)
month = d.getMonth();
console.log(month);

//date method to set the year of a date object to 2020
year2 = d.setFullYear(2020);
console.log(year2);

//Date(year, month, day, hours, minutes, seconds, milliseconds)
var a = new Date(2019, 01, 13, 24, 54, 00, 0);
console.log(a);
