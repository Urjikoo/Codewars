// Write function bmi that calculates body mass index (bmi = weight / height2).

function bmi(weight, height) {
  let bmi = weight / (height * height);

  return bmi < 18.5
    ? "Underweight"
    : bmi <= 25
    ? "Normal"
    : bmi <= 30
    ? "Overweight"
    : "Obese";
}
// Write function bmi that calculates body mass index (bmi = weight / height2).
// our pram is a number
// declare a function that returns bmi based on the user's weight and height.
// ex if user's height 5ft and their weight is 150= their bmi is 150/1.60*1.60
// declare function that calculates the user input (height and weight)then returns what the bmi is.

function calculateBMI(userBMI){
  let mass= 75
  let height =1.70
return Math.floor(mass/height**2)

}
console.log(calculateBMI())
