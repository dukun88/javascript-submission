function fibonacci(n) {
  function findFibonacci(n) {
    if (n <= 1) {
      return n;
    } else {
      return findFibonacci(n - 1) + findFibonacci(n - 2);
    }
  }
  let deret = [];
  for (let i = 0; i <= n; i++) {
    deret.push(findFibonacci(i));
  }
  return deret;
}
// Jangan hapus kode di bawah ini!
export default fibonacci;
