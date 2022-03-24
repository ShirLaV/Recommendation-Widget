'use strict'


//default values for API:
//TODO: move to a config file
const defaultParams = {
    publisherId: 'taboola-templates',
    appType: 'desktop',
    apiKey: 'f9040ab1b9c802857aa783c469d0e0ff7e7366e4',
    sourceId: '214321562187',
    sourceType: 'video',
    sourceUrl: 'http://www.site.com/videos/214321562187.html',
    count: 8,
}

const gRecommendation = loadFromStorage('recommendationsDB') || {}

function getRecommendations(onSuccess, queryParams = defaultParams) {

    const { publisherId, appType, apiKey, sourceId, sourceType, sourceUrl, count } = queryParams
    if (gRecommendation[count]) {
        // console.log('from cache')
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
        }
        xhr.open('GET', url, true);
        xhr.send();

        //TODO: handle error
    }
}