const testVar = {}

function testFunc() {
  return "hi"
}

const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
]

superbowlWin(record);

function superbowlWin(arrObject){
  let value = arrObject.find(function(s) { 
    return s.result === "W"
  })

  console.log(value);

  return value ? value.year : undefined
  
}
