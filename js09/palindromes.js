const palindromes = function (string) {
  const alpha = "abcdefghijklmnopqrstuvwxyz0123456789";

  const cleanedstring = string
    .toLowerCase()
    .split("")
    .filter((character) => alpha.includes(character))
    .join("");
  const reversestring = cleanedstring.split("").reverse().join("");
  return cleanedstring === reversestring;
};

// Do not edit below this line
module.exports = palindromes;
