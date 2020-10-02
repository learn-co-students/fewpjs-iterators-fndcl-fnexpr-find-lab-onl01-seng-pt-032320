const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = function(record) {
  let champ = record.find(record => record.result === "W");
    return champ? champ.year :undefined
}