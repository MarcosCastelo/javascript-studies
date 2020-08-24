export function min(n, m) {
  if (n < m) return n;
  return m;
}


export function isEven(n) {
  n = Math.abs(n);
  if (n > 1) 
    return isEven(n-2);
  if (n == 1) 
    return false; 
  if (n == 0)
    return true;
  
}

export function countBs(s) {
  var b = 0;
  for (var i = 0; i < s.length; i++)
    if (s[i] == 'B') b++;
  return b;
}

export function countChar(s, c) {
  var n = 0;
  for (var i = 0; i < s.length; i++)
    if (s[i] == c) n++;
  return n;
}
