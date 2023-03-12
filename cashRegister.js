function checkCashRegister(price, cash, cid) {
  const currencyUnits = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
  };
  
  let changeDue = cash - price;
  let totalCash = cid.reduce((acc, curr) => acc + curr[1], 0);
  
  if (totalCash < changeDue) {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  } else if (totalCash === changeDue) {
    return {status: "CLOSED", change: cid};
  } else {
    cid = cid.reverse();
    let change = [];
    
    for (let i = 0; i < cid.length; i++) {
      let currCurrency = cid[i][0];
      let currAmount = cid[i][1];
      let currValue = currencyUnits[currCurrency];
      let amountToReturn = 0;
      
      while (changeDue >= currValue && currAmount > 0) {
        amountToReturn += currValue;
        changeDue -= currValue;
        changeDue = Math.round(changeDue * 100) / 100;
        currAmount -= currValue;
      }
      
      if (amountToReturn > 0) {
        change.push([currCurrency, amountToReturn]);
      }
    }
    
    if (changeDue > 0) {
      return {status: "INSUFFICIENT_FUNDS", change: []};
    } else {
      return {status: "OPEN", change: change};
    }
  }
}



checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);