const fibonacci = function (carg) {
  let count;
  if (typeof carg !== "number") {
    count = parseInt(carg);
  } else {
    count = carg;
  }
  if (count < 0) return "OOPS";
  if (count == 0) return 0;
  let firstprev = 1;
  let secondprev = 0;
  for (let i = 2; i <= count; i++) {
    let current = firstprev + secondprev;
    secondprev = firstprev;
    firstprev = current;
  }
  return firstprev;
};

// Do not edit below this line
module.exports = fibonacci;
