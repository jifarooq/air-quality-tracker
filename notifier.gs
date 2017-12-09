function fireTextSms(body, subject) {
  const to = PropertiesService.getScriptProperties().getProperty('smsAddress')
  GmailApp.sendEmail(to, subject, body, {
    name: 'Me'
  })
}