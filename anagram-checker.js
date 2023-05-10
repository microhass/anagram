module.exports = function (string1, string2) {
  const newStr1 = string1.replace(/[^0-9A-Z]+/gi, '').toLowerCase();
  const newStr2 = string2.replace(/[^0-9A-Z]+/gi, '').toLowerCase();

  if (newStr1.length !== newStr2.length) return false;

  let frequencyObject = {};
  for (const el of newStr1) {
    frequencyObject[el]
      ? ++frequencyObject[el]
      : (frequencyObject[el] = 1);
  }

  for (const el of newStr2) {
    if (!(el in frequencyObject)) return false;
    frequencyObject[el] -= 1;
  }

  return true;
};
