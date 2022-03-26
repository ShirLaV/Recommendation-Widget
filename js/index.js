function onInit() {
    getRecommendations(renderRecommmendations)
}

function renderRecommmendations(recommendations) {
    const strHTMLS = recommendations.list.map(recommendation => {
        const { thumbnail, url, origin, name, branding, id } = recommendation;

        return `<div class="recommendation-card flex column"  onclick="onOpenRecommendation('${url}', '${origin}')">
                    <div>
                        <img src="${thumbnail[0].url}" onerror="this.src='https://picsum.photos/400/200?random=${id}'"/>
                    </div>
                    <h4>${name}</h4>
                    ${origin === 'sponsored' && "<h6>" + branding + "</h6>"}
                </div>`
    }).join('');
    document.querySelector('.recommendation-container').innerHTML = strHTMLS;
}

function onOpenRecommendation(url, recommendationType) {

    switch (recommendationType) {
        case 'sponsored': {
            window.open(url, '_blank');
            break;
        }
        case 'organic': {
            window.open(url, '_self');
            break;
        }
        default:
            console.warn(`unknown recommendationType, ${recommendationType}`);
    }

}
