const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(theArrayProvided) {
  const win = theArrayProvided.find(obj => obj.result === "W");

  if (win === undefined) {
  	return undefined;
  } else {
  	return win.year;
  }
}
