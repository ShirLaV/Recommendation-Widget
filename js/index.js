function onInit() {
    getRecommendations(renderRecommmendations)
}

function renderRecommmendations(recommendations) {
    console.log(recommendations)
    const strHTMLS = recommendations.list.map(recommendation => {
        return `<div class="recommendation-card flex column"  onclick="onOpenRecommendation('')">
                    <div>
                        <img src="${recommendation.thumbnail[0].url}"/>
                    </div>
                    <p>${recommendation.name}</p>
                </div>`
    }).join('')
    document.querySelector('.recommendation-container').innerHTML = strHTMLS;
}