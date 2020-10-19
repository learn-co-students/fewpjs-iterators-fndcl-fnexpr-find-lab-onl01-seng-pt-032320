const testVar = {}

function testFunc() {
  return "hi"
}



// const record = [
//   {year: "2018", result: "L"},
//   {year: "2017", result: "W"},
//   {year: "2016", result: "N/A"}
//   //...
// ]

function superbowlWin(array){
  let result = array.find(obj => obj.result === "W")
  // record.find( function(s) { return s === "W" })
  return result ? result.year : undefined

  
}
