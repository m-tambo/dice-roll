'use strict'

const randomInt = (x, y) => {
  if(!y) { y = x, x = 1 }
  return Math.floor((Math.random() * (Number(y) - Number(x) + 1)) + Number(x));
}

module.exports = { randomInt }
