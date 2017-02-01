'use strict'

const array = process.argv;
const numList = array.map(a => +a)
                     .filter(b => !isNaN(+b));
// NOTICE: typeof NaN === 'number'

const sum = numList.reduce((sum, order) => sum + order, 0);

console.log(sum);
