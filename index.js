const record =[ 
  {year: "1969", result: 'W'},
  {year: "2016", result: 'N/A'},
  {year: "2017", result: 'N/A'},
  {year: "2018", result: 'N/A'},
  {year: "2019", result: 'W'}
]

function superbowlWin(record) {
  let outcome = record.find(record => record.result === "W")
  return outcome ? outcome.year : undefined
}
