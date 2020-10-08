

function superbowlWin(array) {
 let result = array.find(r => r.result === "W")
  if (!!result) {
    return result.year
  } else {
  return undefined
};
};
