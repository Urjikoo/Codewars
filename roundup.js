// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

function litres(time) {
  return Math.floor(time * 0.5);
}
// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
// param is a array of number; returning how much liter of water Nathan drank given a time.; ex 5*0.5=>2.5liters since the quesiton is asking to rounded to the smallest value, the answer is 2 litres.
// declare a function: declare a loop to iterate; calculate teh time by 0.5 and use Math.floor to round it to smallest value.
function water(hour){
let litere= Math.floor(hour*0.5)
  console.log(`you drank ${litere} litres of water woah`)
   return litere

}
water(13)
