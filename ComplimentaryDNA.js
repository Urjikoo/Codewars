// Complementary DNA
// 142033688% of 13,27539,336 of 123,056JustyFY2 Issues Reported
// JavaScript
// Node v14.x
// VIM
// EMACS
// Instructions
// Output
// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

function DNAStrand(dna) {
  return dna
    .split("")
    .map((l) =>
      l === "A" ? "T" : l === "T" ? "A" : l === "G" ? "C" : l === "C" ? "G" : ""
    )
    .join("");
}
