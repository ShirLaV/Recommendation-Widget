'use strict'

import { DEFAULT_PARAMS, BASE_URL } from '../config/config.js'
import { queryParamsHelper } from '../helpers/queryParams.helper.js'

export const recommendationService = {
    getRecommendations
}

function getRecommendations(onSuccess, onFailure, _queryParams = DEFAULT_PARAMS) {

    const queryParams = queryParamsHelper.isValidQueryObject(_queryParams)
        ? _queryParams
        : new URLSearchParams(_queryParams);

    const url = `${BASE_URL}.get?${queryParams}`;

    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) onSuccess(JSON.parse(xhr.responseText));
        else if (xhr.status === 400) onFailure()
    }
    xhr.open('GET', url, true);
    xhr.send();
}
