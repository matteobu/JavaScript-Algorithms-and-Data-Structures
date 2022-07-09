function palindrome(str) {
    let firsString = str
        .split("")
        .join("")
        .replace(/[^A-Za-z0-9]/g, "")
        .toLowerCase();
    let palindrome = str
        .split("")
        .reverse("")
        .join("")
        .replace(/[^A-Za-z0-9]/g, "")
        .toLowerCase();

    if (firsString === palindrome){
      return true
      } else 
      return false
      }

palindrome("eye");