//Coding Challenge 2024
//1/366
//https://www.codewars.com/kata/57f780909f7e8e3183000078/javascript

const grow = (x) => x.reduce((acc, curr) => acc * curr,1);

console.log(grow([2,2,2,2,2,2]));