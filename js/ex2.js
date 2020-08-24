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

