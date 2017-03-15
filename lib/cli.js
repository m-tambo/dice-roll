'use strict'




// const args = process.argv.slice(2) // const { argv : [,, ...args] } = process

// const maths = require('./math.js')

// console.log(maths.randomInt(parseInt(args[0]), parseInt(args[1])))


process.title = 'Dice Roll';

const { argv: [,, ...args] } = process,
      { count, sides } = require('./parse-args')(args),
      { roll, toDiceNotation } = require('./dice');

const dice = toDiceNotation({count, sides}),
      total = roll(dice);

console.log(total);
