### 1. Palindrome Checker
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such as 2A3\*3a2, 2A3 3a2, and 2_A3\*3\#A2.



### 2. Convert the given number into a roman numeral.

Roman numerals	Arabic numerals
* M = 1000
* CM = 900
* D = 500
* CD = 400
* C = 100
* XC = 90
* L = 50
* XL = 40
* X = 10
* IX = 9
* V = 5
* IV = 4
* I = 1

All roman numerals answers should be provided in upper-case.

### Caesars Cipher

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.