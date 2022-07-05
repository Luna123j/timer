let arr = process.argv.slice(2);
arr = arr.sort((a, b) => a - b);
for (let a of arr) {
  setTimeout(() => {
    if (a > 0 && !isNaN(a)) {
      console.log(`${a} seconds`);
      process.stdout.write('\x07');
    }
  }, a * 1000);

}
