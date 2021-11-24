// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
function highAndLow(numbers) {
  // ...

  //   let sortedN= numbers.split('').sort((a,b)=>a-b)

  //   return `${sortedN[sortedN.length]},${sortedN[0]}`
  numbers = numbers.split(" ");
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}
