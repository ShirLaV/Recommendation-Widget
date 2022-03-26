'use strict'

const gRecommendation = loadFromStorage('recommendationsDB') || {};
const BASE_URL = `http://api.taboola.com/1.0/json/${publisherId}/recommendations`;

function getRecommendations(onSuccess, _queryParams = DEFAULT_PARAMS) {

    const queryParams = isValidQueryObject(_queryParams)
        ? _queryParams
        : new URLSearchParams(_queryParams);

    const count = queryParams.get('count');

    if (gRecommendation[count]) {
        onSuccess(gRecommendation[count])
    }

    else {
        const url = `${BASE_URL}.get?${queryParams}`;

        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                const res = JSON.parse(xhr.responseText);
                gRecommendation[count] = res;
                saveToStorage('recommendationsDB', gRecommendation);
                onSuccess(res);
            }
            //TODO: handle error
        }
        xhr.open('GET', url, true);
        xhr.send();

    }
}