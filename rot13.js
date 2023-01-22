function rot13(str) {
 const letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

   let result = '';


  for (let i = 0; i < str.length; i++) {
    const currentletter = str[i];
    const isLetter = letters.includes(currentletter);
    
    if (isLetter === false) {
      result += currentletter;
    } else {
      
      const currentIndex = letters.findIndex((c) => c === currentletter);

      result += letters[currentIndex + 13] || letters[currentIndex - 13];
    }
  }
  return result;
}

rot13("SERR YBIR?");