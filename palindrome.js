// Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
  // your code

  x = x.toString().toLowerCase();

  for (let left = 0, right = x.length - 1; left < right; ) {
    if (x.charAt(left++) !== x.charAt(right--)) {
      return false;
    }
  }

  return true;
}
