function onInit() {
    getRecommendations(renderRecommmendations)
}

function renderRecommmendations(recommendations) {
    console.log(recommendations)
    const strHTMLS = recommendations.list.map(recommendation => {
        const { thumbnail, url, origin, name, branding } = recommendation
        return `<div class="recommendation-card flex column"  onclick="onOpenRecommendation('${url}', '${origin}')">
                    <div>
                        <img src="${thumbnail[0].url}"/>
                    </div>
                    <h4>${name}</h4>
                    ${isSponsored(origin) && '<h6>' + branding + '</h6>'}
                </div>`
    }).join('')
    document.querySelector('.recommendation-container').innerHTML = strHTMLS;
}

function onOpenRecommendation(url, recommendationType) {
    if (isSponsored(recommendationType)) {
        window.open(url, '_blank');
    }
}

function isSponsored(recommendationType) {
    return recommendationType === 'sponsored'
}
