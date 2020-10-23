const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(object)
{
  const model = object.find(obj => {if(obj["result"]==="W"){return obj["year"]}});
  if(model){return model.year;}
  else{ return model;}
}