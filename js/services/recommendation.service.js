'use strict'


//default values for API:
const defaultParams = {
    publisherId: 'taboola-templates',
    appType: 'desktop',
    apiKey: 'f9040ab1b9c802857aa783c469d0e0ff7e7366e4',
    sourceId: '214321562187',
    sourceType: 'video',
    sourceUrl: 'http://www.site.com/videos/214321562187.html',
    count: 4,

}

// function getRecommendationsWithCache() {
//     const storageKey = 'reccomendationDB'
//     let cache = loadFromStorage(storageKey) || ''
//     return function (onSuccess, queryParams = defaultParams) {
//         console.log('cache', cache)
//         if (cache) onSuccess(cache)
//         else {
//             const { publisherId, appType, apiKey, sourceId, sourceType, sourceUrl, count } = queryParams
//             const url = `http://api.taboola.com/1.0/json/${publisherId}/recommendations.get?app.type=${appType}&app.apikey=${apiKey}&count=${count}&source.type=${sourceType}&source.id=${sourceId}&source.url=${sourceUrl}`

//             var xhr = new XMLHttpRequest();
//             xhr.onreadystatechange = () => {
//                 if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
//                     const res = JSON.parse(xhr.responseText)
//                     cache = res
//                     saveToStorage(storageKey, res)
//                     onSuccess(res)
//                 }
//             }
//             xhr.open('GET', url, true);
//             xhr.send();
//         }
//     }
// }

// const getRecommendations = getRecommendationsWithCache()

const gRecommendation = loadFromStorage('recommendationsDB') || {}

function getRecommendations(onSuccess, queryParams = defaultParams) {

    const { publisherId, appType, apiKey, sourceId, sourceType, sourceUrl, count } = queryParams
    if (gRecommendation[count]) {
        console.log('from cache')
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
    }
}