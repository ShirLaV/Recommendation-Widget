'use strict';

import { recommendationService } from './services/recommendation.service.js'

export const recommendationController = {
    onInit,
    renderRecommmendations,
    renderError
}

document.body.onload = onInit

function onInit() {
    recommendationService.getRecommendations(renderRecommmendations, renderError)
}

function renderRecommmendations(recommendations) {
    const strHTMLS = recommendations.list.map(recommendation => {
        const { thumbnail, url, origin, name, branding, id } = recommendation;
        return `<a  class="recommendation-card flex column"  href="${url}" target=${isSponsored(origin) ? "_blank" : "_self" }>
                        <div>
                            <img src="${thumbnail[0].url}" onerror="this.src='https://picsum.photos/400/200?random=${id}'"/>
                        </div>
                        <h4>${name}</h4>
                        ${isSponsored(origin) && "<h6>" + branding + "</h6>"}
                </a>`
    }).join('');

    document.querySelector('.recommendation-container').innerHTML = strHTMLS;
}

function renderError() {
    document.querySelector('.recommendation-container').innerHTML = '<p>Something went wrong...</p>'
}

function isSponsored(recommendationType) {
    return recommendationType === 'sponsored'
}




