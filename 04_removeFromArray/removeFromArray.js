const removeFromArray = function(array, ...argument) {
  const result = [];
  array.forEach((item) => {
    if(!argument.includes(item)) {
      result.push(item);
    }
  })
  return result;

}

// Do not edit below this line
module.exports = removeFromArray;
