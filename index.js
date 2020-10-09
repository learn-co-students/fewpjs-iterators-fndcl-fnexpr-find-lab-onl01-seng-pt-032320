const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record) {
  //console.log(team)
  //let win = record.find( function(result) { return result === "W"} )
  let win = record.find(team => team.result === "W")
  
  if (win === undefined) {
    return undefined
  } else {
    return win.year
  } 
}
