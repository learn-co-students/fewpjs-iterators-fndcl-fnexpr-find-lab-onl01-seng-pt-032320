
function superbowlWin(array) {
  let result = array.find(function(e) { return e["result"] === "W"})
  if (result) { return result.year} 
}



