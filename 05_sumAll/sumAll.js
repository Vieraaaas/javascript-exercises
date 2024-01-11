const sumAll = function(par1, par2) {
  if (par1 >= 0 && 
      par2 >= 0 && 
      Number.isInteger(par1) && 
      Number.isInteger(par2)) {
        if (par1 < par2) {
          let result = par1;
          let n = par1;
          for (let i = 0; i < (par2 - par1); i++) {
            n += 1;
            result += n;
          }
          return result;

      } else if (par1 > par2) {
          let result = par2;
          let n = par2;
          for (let i = 0; i < (par1 - par2); i++) {
            n += 1;
            result += n;
          }
          return result;
        } 
    } else {
      return "ERROR"
  }
};

// Do not edit below this line
module.exports = sumAll;
