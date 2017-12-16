const emotions = imageUrl =>
    fetch("https://westus.api.cognitive.microsoft.com/emotion/v1.0/recognize", {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "Ocp-Apim-Subscription-Key": "bb180a9186354adf8989c01fe408b497"
        },
        body: `{"url": "${imageUrl}"}`
    })
        .then(resp => resp.json())
        .then(console.log, console.error);

export default emotions;
