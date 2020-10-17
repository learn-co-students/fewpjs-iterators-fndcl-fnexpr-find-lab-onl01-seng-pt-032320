const testVar = {}

function testFunc() {
  return "hi"
}


const superbowlWin = (record) => {
 let found = record.find( function(year) {return year.result === "W" })
  if (!!found) {
    return found.year
  }
 }