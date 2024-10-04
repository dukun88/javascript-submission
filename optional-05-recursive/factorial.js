function factorial(n) {
  if (n == 0) {
    return 1;
  } else if (n >= 1) {
    return n * factorial(n - 1);
  } else {
    return `Mohon masukan Bilangan Bulat`;
  }
}

// Jangan hapus kode di bawah ini!
export default factorial;
