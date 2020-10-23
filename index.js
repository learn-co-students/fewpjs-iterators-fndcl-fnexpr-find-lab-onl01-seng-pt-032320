const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(object)
{
  const year = object.find(obj => {if(obj["result"]==="W"){return obj["year"]}});
  return year
}