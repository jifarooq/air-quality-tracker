function writeSfData() {
  const aqiOb = writeAirQualityData({
    city: 'San Francisco',
    sheet: 'sf'
  })
  
  const brink = 100
  
  if (aqiOb.curr >= brink && aqiOb.last < brink) {
    var msg  = "Last AQI was " + aqiOb.last + ".\n"
        msg += "Current AQI is " + aqiOb.curr + ".\n"
        msg += "Monitor it closely."
    fireTextSms(msg, 'AQI')
  }
}

function writeLaData() {
  writeAirQualityData({
    city: 'Los Angeles',
    sheet: 'la'
  })
}

function writeLbData() {
  writeAirQualityData({
    city: 'Long Beach',
    sheet: 'lb'
  })
}

function writeSeattleData() {
  writeAirQualityData({
    city: 'Seattle',
    sheet: 'seattle',
    state: 'Washington'
  })
}

function writeRandomData() {
  writeAirQualityData({
    city: 'Denver',
    sheet: 'random',
    state: 'Colorado'
  })
}