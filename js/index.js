function onInit() {
    getRecommendations(renderRecommmendations)
}


//TODO: handle broken images
function renderRecommmendations(recommendations) {
    console.log(recommendations)
    const strHTMLS = recommendations.list.map(recommendation => {
        const { thumbnail, url, origin, name, branding } = recommendation
        return `<div class="recommendation-card flex column"  onclick="onOpenRecommendation('${url}', '${origin}')">
                    <div>
                        <img src="${thumbnail[0].url}"/>
                    </div>
                    <h4>${name}</h4>
                    ${origin === 'sponsored' && '<h6>' + branding + '</h6>'}
                </div>`
    }).join('')
    document.querySelector('.recommendation-container').innerHTML = strHTMLS;
}

function onOpenRecommendation(url, recommendationType) {

    switch (recommendationType) {
        case 'sponsored': {
            window.open(url, '_blank');
            break;
        }
    }
    
}
