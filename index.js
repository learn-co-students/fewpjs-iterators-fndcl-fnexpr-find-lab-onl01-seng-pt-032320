const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arrays) {
  let row = arrays.find(a => a.result === "W")
  if (row) {
    return row.year
  }
  
}