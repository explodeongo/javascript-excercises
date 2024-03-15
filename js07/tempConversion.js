const convertToCelsius = function (f) {
  x = Math.round((f - 32) * (5 / 9) * 10) / 10;
  return x;
};

const convertToFahrenheit = function (c) {
  x = Math.round(((c * 9) / 5 + 32) * 10) / 10;
  return x;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
