azure api 

Endpoint: https://westus.api.cognitive.microsoft.com/emotion/v1.0

Key 1: bb180a9186354adf8989c01fe408b497

Key 2: 36faf7238f814d7b9c253856a218871c

Ocp-Apim-Subscription-Key

resp.scores - display maximum


face api:

url: 'https://randomuser.me/api/',
  dataType: 'json',


CLIENT INFO
CLIENT ID	770053a1c5514ee59178d9f0aadf79ab

fetch('https://westus.api.cognitive.microsoft.com/emotion/v1.0/recognize', {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
    'Ocp-Apim-Subscription-Key': bb180a9186354adf8989c01fe408b497
  },
  body: `{"url": "${imageUrl}"}`
})
.then(resp => resp.json())
.then(console.log, console.error)

