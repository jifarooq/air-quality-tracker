function writeAirQualityData(cityOb) {
  const sheet = SpreadsheetApp.getActive().getSheetByName(cityOb.sheet)
  var data    = fetchAirQuality(cityOb.city, cityOb.state)
  var failed  = false
  
  const lastAqi   = sheet.getRange(2, 3).getValue()
  const lastAqiCn = sheet.getRange(2, 4).getValue()
  
  // if fetch fails, just use last values
  if (!data) {
    data       = {}
    data.ts    = new Date().getTime()
    data.aqius = lastAqi
    data.aqicn = lastAqiCn
    failed     = true
  }
  
  var values = [
    new Date(data.ts),
    new Date().getHours(),
    data.aqius,
    data.aqicn
  ]
  
  sheet.insertRowBefore(2)
  sheet.getRange(2, 1, 1, 4).setValues([values])
  
  if (failed) {
    sheet.getRange(2, 1, 1, 4).setNote('fetch failed :(')
  }
  
  return {
    last: lastAqi,
    curr: data.aqius
  }
}