const input = [1,1,1,1,2,1,1,4,1,4,3,1,1,1,1,1,1,1,1,4,1,3,1,1,1,5,1,3,1,4,1,2,1,1,5,1,1,1,1,1,1,1,1,1,1,3,4,1,5,1,1,1,1,1,1,1,1,1,3,1,4,1,1,1,1,3,5,1,1,2,1,1,1,1,4,4,1,1,1,4,1,1,4,2,4,4,5,1,1,1,1,2,3,1,1,4,1,5,1,1,1,3,1,1,1,1,5,5,1,2,2,2,2,1,1,2,1,1,1,1,1,3,1,1,1,2,3,1,5,1,1,1,2,2,1,1,1,1,1,3,2,1,1,1,4,3,1,1,4,1,5,4,1,4,1,1,1,1,1,1,1,1,1,1,2,2,4,5,1,1,1,1,5,4,1,3,1,1,1,1,4,3,3,3,1,2,3,1,1,1,1,1,1,1,1,2,1,1,1,5,1,3,1,4,3,1,3,1,5,1,1,1,1,3,1,5,1,2,4,1,1,4,1,4,4,2,1,2,1,3,3,1,4,4,1,1,3,4,1,1,1,2,5,2,5,1,1,1,4,1,1,1,1,1,1,3,1,5,1,2,1,1,1,1,1,4,4,1,1,1,5,1,1,5,1,2,1,5,1,1,1,1,1,1,1,1,1,1,1,1,3,2,4,1,1,2,1,1,3,2
]

// Template object which will store the number of days remaining for them to give birth as key
// and the amount of aliens as value
let aliensDays = {
  0: 0,
  1: 0, 
  2: 0, 
  3: 0, 
  4: 0, 
  5: 0, 
  6: 0, 
  7: 0, 
  8: 0, 
}

// Function that extract the data from an array into a new object(based on the aliensDays object) to set up the initial state
function initialStateObjCreator(arr) {
  const initialStateObj = {...aliensDays};
  for (let day = 0; day < 9; day++) {
    let aliensQuantity = arr.filter((num) => num === day).length;
    initialStateObj[day] = aliensQuantity;
  }
  return initialStateObj;
}

// Function to manage the data(days of aliens) in alienDays's object after one day
function dayAfter(currObj) {
  const newAliensDayObj = {};
  for (let day = 7; day >= 0; day--) {
    newAliensDayObj[day] = currObj[day+1];
  }
  newAliensDayObj[8] = currObj[0];
  newAliensDayObj[6] += currObj[0];
  return newAliensDayObj;
}

// Function to get aliens quantity after "n" number of days
function aliensQuantityAfterNDays(arr, daysNum) {
  let alienDaysObj = initialStateObjCreator(arr);
  for(let day=0; day < daysNum; day++) {
    alienDaysObj = dayAfter(alienDaysObj);
    if (day === daysNum - 1) {
      const aliensQuantityPerDay = Object.values(alienDaysObj);
      const finalAliensQuantity = aliensQuantityPerDay.reduce((prevValue, currValue) => prevValue + currValue, 0);
      return finalAliensQuantity;
    }
  }
}

console.log("¿Cuantos aliens tendríamos en el planeta luego de 80 días?")
console.log(aliensQuantityAfterNDays(input, 80)); // 386536
console.log("¿Cuantos aliens tendríamos en el planeta luego de 256 días?")
console.log(aliensQuantityAfterNDays(input, 256)); // 1732821262171
