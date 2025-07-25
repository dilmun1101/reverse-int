module.exports = function reverse(n) {
  const str = String(Math.abs(n));
  let a = '';
  for (let i = 0; i < str.length; i += 1) {
    a = str[i] + a;
  }
  return +a;
};
