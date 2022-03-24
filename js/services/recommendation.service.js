'use strict'

const gRecommendation = loadFromStorage('recommendationsDB') || {}

function getRecommendations(onSuccess, queryParams = defaultParams) {

    const { publisherId, appType, sourceId, sourceType, sourceUrl, count } = queryParams
    if (gRecommendation[count]) {
        onSuccess(gRecommendation[count])
    }

    else {

        
        const url = `http://api.taboola.com/1.0/json/${publisherId}/recommendations.get?app.type=${appType}&app.apikey=${apiKey}&count=${count}&source.type=${sourceType}&source.id=${sourceId}&source.url=${sourceUrl}`
        
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                const res = JSON.parse(xhr.responseText)
                console.log(res)
                gRecommendation[count] = res
                saveToStorage('recommendationsDB', gRecommendation)
                onSuccess(res)
            }
            //TODO: handle error
        }
        xhr.open('GET', url, true);
        xhr.send();

    }
}