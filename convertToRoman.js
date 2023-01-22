function convertToRoman(num) {
  const romanMap = {
    1000: "M",
    900: "CM",
    500: "D",
    400: "CD",
    100: "C",
    90: "XC",
    50: "L",
    40: "XL",
    10: "X",
    9: "IX",
    5: "V",
    4: "IV",
    1: "I"
  };
  let result = "";
  const keysOfMap = Object.keys(romanMap).reverse();
 keysOfMap.forEach(key=>{
   while (key <= num){
     result += romanMap[key];
     num -= key;
   }
 })
  return result;
  
}
console.log(convertToRoman(14)); // should output "XIV"
