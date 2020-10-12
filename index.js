const testVar = {};

function testFunc() {
  return "hi";
}

function superbowlWin(scores) {
  if (scores.find(({ result }) => result === "W") != undefined) {
    let result = scores.find(({ result }) => result === "W");
    return result.year;
  } else {
    return undefined;
  }
}
