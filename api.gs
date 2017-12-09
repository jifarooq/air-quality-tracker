function fetchAirQuality(city, state) {
  // API Key expires every 365 days. Next expiration date is 10-10-18
  const apiKey = PropertiesService.getScriptProperties().getProperty('airVisualApiKey')
  var state  = state || 'California'
  
  const url = "https://api.airvisual.com/v2/city?"
    + "city=" + encodeURI(city)
    + "&state=" + encodeURI(state)
    + "&country=USA"
    + "&key=" + apiKey
    
  try {
    return JSON.parse(UrlFetchApp.fetch(url)).data.current.pollution
  } catch (e) {
    Logger.log("Error occurred.\n" + e)
    return null
  }
}

function updateApiKey() {
  const msg = 'Update API key for AQI script'
  fireTextSms(msg)
}