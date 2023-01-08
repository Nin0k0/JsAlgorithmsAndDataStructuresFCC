function palindrome(str) {
  
  str = str.replace(/[\W_]/g,"");
  let newStr=str.split("");
  newStr = newStr.reverse();
  newStr = newStr.join("").toLowerCase();
  return str.toLowerCase()===newStr;

}


