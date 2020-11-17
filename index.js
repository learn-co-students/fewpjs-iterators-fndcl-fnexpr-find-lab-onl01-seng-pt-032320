function superbowlWin(array) {
  let result =  array.find(x => x.result === 'W')
  if (!!result) return result.year
  return undefined
}

// vim!