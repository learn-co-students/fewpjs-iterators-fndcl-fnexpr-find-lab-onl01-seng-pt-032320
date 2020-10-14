const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(records) {
  let winner = records.find(function(rec) { return rec.result === "W" });
  return (winner ? winner.year : winner);
}