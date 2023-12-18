const currencyValues = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    "ONE HUNDRED": 100,
  };
  
  function checkCashRegister(price, cash, cid) {
    let changeNeeded = cash - price;
    let changeAvailable = getTotalCash(cid);
  
    if (changeAvailable < changeNeeded) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    } else if (changeAvailable === changeNeeded) {
      return { status: "CLOSED", change: cid };
    } else {
      const change = getOptimalChange(changeNeeded, cid);
      if (getTotalCash(change) < changeNeeded) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
      } else {
        return { status: "OPEN", change: change };
      }
    }
  }
  
  function getTotalCash(cid) {
    let totalCash = 0;
    for (let [currency, amount] of cid) {
      totalCash += amount;
    }
    return totalCash;
  }
  
  function getOptimalChange(changeNeeded, cid) {
    const change = [];
  
    for (let i = cid.length - 1; i >= 0; i--) {
      const currency = cid[i][0];
      const currencyAmount = cid[i][1];
      const currencyValue = currencyValues[currency];
      let currencyCount = Math.floor(changeNeeded / currencyValue);
  
      if (currencyCount > 0) {
        if (currencyCount * currencyValue <= currencyAmount) {
          change.push([currency, currencyCount * currencyValue]);
          changeNeeded -= currencyCount * currencyValue;
          changeNeeded = Math.round(changeNeeded * 100) / 100;
        } else {
          change.push([currency, currencyAmount]);
          changeNeeded -= currencyAmount;
          changeNeeded = Math.round(changeNeeded * 100) / 100;
        }
      }
    }
  
    return change;
  }
  
  // Example tests
  console.log(
    checkCashRegister(19.5, 20, [
      ["PENNY", 1.01],
      ["NICKEL", 2.05],
      ["DIME", 3.1],
      ["QUARTER", 4.25],
      ["ONE", 90],
      ["FIVE", 55],
      ["TEN", 20],
      ["TWENTY", 60],
      ["ONE HUNDRED", 100],
    ])
  ); // { status: "OPEN", change: [["QUARTER", 0.5]] }
  
  console.log(
    checkCashRegister(3.26, 100, [
      ["PENNY", 1.01],
      ["NICKEL", 2.05],
      ["DIME", 3.1],
      ["QUARTER", 4.25],
      ["ONE", 90],
      ["FIVE", 55],
      ["TEN", 20],
      ["TWENTY", 60],
      ["ONE HUNDRED", 100],
    ])
  ); // { status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]] }
  
  // Add more tests if needed