import { expect } from '@jest/globals'
import { recommendationController } from './recommandation.controller.js'

describe('Recommendation controller tests', () => {

    document.body.innerHTML = `<section class="recommendation-widget">
        <header>
            <h1>More for you</h1>
        </header>
        <div class="recommendation-container"></div>
    </section>`

    const mockData = {
        "id": "__f2256152b78cac62b3748f36ac3601a3__f47553b59b9baeb616186c84c23ee3a7__~~V1~~8042771502501587546~~d1n4_gLDuMkBW5ynPq6RSS5dKLQe2REsTFN8A2PneMe9OSd03RFk211LqYDaWXBnlD6CtweKIb_hxshbJxLBaL3Gzi67IULKH_cPQniqvf34JR2BZr0JwlZJK_n38LmXBznfstAxgHxK10DUnx__IOZshTJzHV6HG2_zDL-kFQ13_izeigIffesEqmaKiJEas_GFMw3gipRQaEEG_D8sPsIsedhgFCKLEuHtmyrqKIH6JeqbAF41EmUILOdKREMS-YMiEKt5faBg_LXVQLbnXZlLeXUHShw0g_iEThBuayk,~~V1~~2055184657886535235~~YW00NQfnhcdBprg1RU2OKC5dKLQe2REsTFN8A2PneMe9OSd03RFk211LqYDaWXBnlD6CtweKIb_hxshbJxLBaL3Gzi67IULKH_cPQniqvf34JR2BZr0JwlZJK_n38LmXBznfstAxgHxK10DUnx__IOZshTJzHV6HG2_zDL-kFQ0_PYVVa4cmhkb6sgZzY501DeThOGHjSoqB1Ur5dwVW2rv5vUbL2X2u0jXsevYjewK5TFTIT0IGnWTGd7mb56SZ-YMiEKt5faBg_LXVQLbnXZlLeXUHShw0g_iEThBuayk,~~V1~~-7626569155943893181~~d1n4_gLDuMkBW5ynPq6RSS5dKLQe2REsTFN8A2PneMe9OSd03RFk211LqYDaWXBnlD6CtweKIb_hxshbJxLBaL3Gzi67IULKH_cPQniqvf34JR2BZr0JwlZJK_n38LmXBznfstAxgHxK10DUnx__IOZshTJzHV6HG2_zDL-kFQ3JpQKlDH6nPzmMPUD_WgEHs_GFMw3gipRQaEEG_D8sPsIsedhgFCKLEuHtmyrqKIH6JeqbAF41EmUILOdKREMS-YMiEKt5faBg_LXVQLbnXZlLeXUHShw0g_iEThBuayk,~~V1~~6539513834589967190~~xSbQTNLb6Tga0aUpXB3saoSLiAOdc-6sgy8bU56LA-AZDaMJce4jup1Fuc1iPZHBRMn_0S_e1214ALcf-kGSlPoew2qHyISbADwBJUzKmw6bqfbiC5U7nuJn7Tl_mglu6oa8rQs37CF5XIAAK4U_fKlF8NqAQJAWjIC2OyS850XZFjv5pnOHUjtyO1PYpeS4sXJpWQrfTRVttn6hzA5K4VGelGL2LpVPBK5hi3Trj9G2AWZlk2PN0lmKS_F9cTwLJs-uC3-WWmrUP_51FzAi-ETIjLFrfyefcx_ooZsGHf4__video,video,video,video",
        "list": [
            {
                "description": "Ungewollter Haarausfall trifft nicht nur Männer. Zwei Experten beantworten die wichtigsten Fragen.",
                "type": "video",
                "name": "*** BILDplus Inhalt *** Albtraum Haarausfall bei Frauen – was hilft?",
                "created": "Mon, 25 Jan 2016 09:47:54 UTC",
                "branding": "Bild",
                "duration": "0",
                "views": "0",
                "thumbnail": [
                    {
                        "url": "http://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A%2F%2Fwww.vanityfair.fr%2Fuploads%2Fimages%2Fthumbs%2F201405%2F5f%2Fjames_dean_anniversaire_18_7821.jpeg_north_1024x_white.jpg"
                    }
                ],
                "categories": [
                    "de"
                ],
                "id": "~~V1~~8042771502501587546~~d1n4_gLDuMkBW5ynPq6RSS5dKLQe2REsTFN8A2PneMe9OSd03RFk211LqYDaWXBnlD6CtweKIb_hxshbJxLBaL3Gzi67IULKH_cPQniqvf34JR2BZr0JwlZJK_n38LmXBznfstAxgHxK10DUnx__IOZshTJzHV6HG2_zDL-kFQ13_izeigIffesEqmaKiJEas_GFMw3gipRQaEEG_D8sPsIsedhgFCKLEuHtmyrqKIH6JeqbAF41EmUILOdKREMS-YMiEKt5faBg_LXVQLbnXZlLeXUHShw0g_iEThBuayk",
                "origin": "sponsored",
                "url": "http://api.taboola.com/1.0/json/taboola-templates/recommendations.notify-click?app.type=desktop&app.apikey=f9040ab1b9c802857aa783c469d0e0ff7e7366e4&response.id=__f2256152b78cac62b3748f36ac3601a3__f47553b59b9baeb616186c84c23ee3a7&response.session=v2_9065131c7598d5134275c0fa1ba12eb6_9eb0c085-6696-47d1-a70c-84edc21e5bdf-tuct938b991_1648309265_1648309265_CNawjgYQswsY98mNt_wvIAEoATBmOIjrCkCvkBBImNPYA1D___________8BWABgAGi3kpOG1q-B2S1wAQ&item.id=%7E%7EV1%7E%7E8042771502501587546%7E%7Ed1n4_gLDuMkBW5ynPq6RSS5dKLQe2REsTFN8A2PneMe9OSd03RFk211LqYDaWXBnlD6CtweKIb_hxshbJxLBaL3Gzi67IULKH_cPQniqvf34JR2BZr0JwlZJK_n38LmXBznfstAxgHxK10DUnx__IOZshTJzHV6HG2_zDL-kFQ13_izeigIffesEqmaKiJEas_GFMw3gipRQaEEG_D8sPsIsedhgFCKLEuHtmyrqKIH6JeqbAF41EmUILOdKREMS-YMiEKt5faBg_LXVQLbnXZlLeXUHShw0g_iEThBuayk&item.type=video&sig=ce0c29025ee811b99b595f28c7eba0e401df19a7695d&redir=http%3A%2F%2Fwww.bild.de%2Fbild-plus%2Flifestyle%2Fmode-beauty%2Fhaarausfall%2Ffrauen-haarausfall-44257962%2Cvar%3Dx%2Cview%3DconversionToLogin.bild.html%3Futm_source%3Dtaboola%26utm_medium%3Dreferral%26tblci%3DGiAh7MKX3N-lHoAho60FXUGWK-X2kszKZL0YCNKeMqD7jyC5BCjq2M3wt5Td8mk%23tblciGiAh7MKX3N-lHoAho60FXUGWK-X2kszKZL0YCNKeMqD7jyC5BCjq2M3wt5Td8mk&ui=9eb0c085-6696-47d1-a70c-84edc21e5bdf-tuct938b991&cpb=GIkFIJz__________wEqFnRhYm9vbGFzeW5kaWNhdGlvbi5jb20yCHRyYzAwMTE5OIDOqMwFQIjrCkivkBBQmNPYA1j___________8BYwjd__________8BEN3__________wEYI2RjCJYUEJscGBhkYwjSAxDgBhgIZGMI9AUQiwoYC2RjCPQUEJ4dGB9kYwikJxCDNRgvZHgBgAECiAG2r-3GAZABHA"
            },
            {
                "description": "Des idées pour bosser dans d'autres conditions ?",
                "type": "video",
                "name": "Top 10 des plus Beaux Bureaux à la Maison",
                "created": "Thu, 23 Jan 2014 11:34:59 UTC",
                "branding": "Buzzly",
                "duration": "0",
                "views": "0",
                "thumbnail": [
                    {
                        "url": "http://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A%2F%2Fwww.buzzly.fr%2Fphoto%2Ffromupload%2F8374390431168.jpg"
                    }
                ],
                "categories": [
                    "fr"
                ],
                "id": "~~V1~~2055184657886535235~~YW00NQfnhcdBprg1RU2OKC5dKLQe2REsTFN8A2PneMe9OSd03RFk211LqYDaWXBnlD6CtweKIb_hxshbJxLBaL3Gzi67IULKH_cPQniqvf34JR2BZr0JwlZJK_n38LmXBznfstAxgHxK10DUnx__IOZshTJzHV6HG2_zDL-kFQ0_PYVVa4cmhkb6sgZzY501DeThOGHjSoqB1Ur5dwVW2rv5vUbL2X2u0jXsevYjewK5TFTIT0IGnWTGd7mb56SZ-YMiEKt5faBg_LXVQLbnXZlLeXUHShw0g_iEThBuayk",
                "origin": "organic",
                "url": "http://api.taboola.com/1.0/json/taboola-templates/recommendations.notify-click?app.type=desktop&app.apikey=f9040ab1b9c802857aa783c469d0e0ff7e7366e4&response.id=__f2256152b78cac62b3748f36ac3601a3__f47553b59b9baeb616186c84c23ee3a7&response.session=v2_9065131c7598d5134275c0fa1ba12eb6_9eb0c085-6696-47d1-a70c-84edc21e5bdf-tuct938b991_1648309265_1648309265_CNawjgYQswsY98mNt_wvIAEoATBmOIjrCkCvkBBImNPYA1D___________8BWABgAGi3kpOG1q-B2S1wAQ&item.id=%7E%7EV1%7E%7E2055184657886535235%7E%7EYW00NQfnhcdBprg1RU2OKC5dKLQe2REsTFN8A2PneMe9OSd03RFk211LqYDaWXBnlD6CtweKIb_hxshbJxLBaL3Gzi67IULKH_cPQniqvf34JR2BZr0JwlZJK_n38LmXBznfstAxgHxK10DUnx__IOZshTJzHV6HG2_zDL-kFQ0_PYVVa4cmhkb6sgZzY501DeThOGHjSoqB1Ur5dwVW2rv5vUbL2X2u0jXsevYjewK5TFTIT0IGnWTGd7mb56SZ-YMiEKt5faBg_LXVQLbnXZlLeXUHShw0g_iEThBuayk&item.type=video&sig=a3d166a7e834fb1a5c77d4e8351321f66eef188a7d8c&redir=http%3A%2F%2Fwww.buzzly.fr%2Ftop-10-des-plus-beaux-bureaux-a-la-maison.html%3Futm_source%3Dtaboola%26utm_medium%3Dreferral%26tblci%3DGiAh7MKX3N-lHoAho60FXUGWK-X2kszKZL0YCNKeMqD7jyC5BCjXy43RtPrp3akB%23tblciGiAh7MKX3N-lHoAho60FXUGWK-X2kszKZL0YCNKeMqD7jyC5BCjXy43RtPrp3akB&ui=9eb0c085-6696-47d1-a70c-84edc21e5bdf-tuct938b991&cpb=GIkFIJz__________wEqFnRhYm9vbGFzeW5kaWNhdGlvbi5jb20yCHRyYzAwMTE5OIDOqMwFQIjrCkivkBBQmNPYA1j___________8BYwjd__________8BEN3__________wEYI2RjCJYUEJscGBhkYwjSAxDgBhgIZGMI9AUQiwoYC2RjCPQUEJ4dGB9kYwikJxCDNRgvZHgBgAECiAG2r-3GAZABHA"
            },
            {
                "description": "Standard zahlen, Luxus genießen: Wie kommt man an ein begehrtes Upgrade in Flieger und Hotel? Nur schwer, sagen die Experten. Wie Sie trotzdem mit Glück eines ergattern. Teil 4 der Serie „Tipps für die Ferienplanung 2016“ auf BILD.",
                "type": "video",
                "name": "*** BILDplus Inhalt *** Upgrade im Urlaub: Standard zahlen, Luxus genießen – BILD-Serie Teil 4",
                "created": "Tue, 26 Jan 2016 08:33:49 UTC",
                "branding": "Bild",
                "duration": "0",
                "views": "0",
                "thumbnail": [
                    {
                        "url": "http://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A%2F%2Fbilder.bild.de%2Ffotos%2Fupgrade-luxus-bekommen-standard-bezahlen-50335807-44227924%2FBild%2F4%2Cclub%3Dbildplus.bild.jpg"
                    }
                ],
                "categories": [
                    "de"
                ],
                "id": "~~V1~~-7626569155943893181~~d1n4_gLDuMkBW5ynPq6RSS5dKLQe2REsTFN8A2PneMe9OSd03RFk211LqYDaWXBnlD6CtweKIb_hxshbJxLBaL3Gzi67IULKH_cPQniqvf34JR2BZr0JwlZJK_n38LmXBznfstAxgHxK10DUnx__IOZshTJzHV6HG2_zDL-kFQ3JpQKlDH6nPzmMPUD_WgEHs_GFMw3gipRQaEEG_D8sPsIsedhgFCKLEuHtmyrqKIH6JeqbAF41EmUILOdKREMS-YMiEKt5faBg_LXVQLbnXZlLeXUHShw0g_iEThBuayk",
                "origin": "sponsored",
                "url": "http://api.taboola.com/1.0/json/taboola-templates/recommendations.notify-click?app.type=desktop&app.apikey=f9040ab1b9c802857aa783c469d0e0ff7e7366e4&response.id=__f2256152b78cac62b3748f36ac3601a3__f47553b59b9baeb616186c84c23ee3a7&response.session=v2_9065131c7598d5134275c0fa1ba12eb6_9eb0c085-6696-47d1-a70c-84edc21e5bdf-tuct938b991_1648309265_1648309265_CNawjgYQswsY98mNt_wvIAEoATBmOIjrCkCvkBBImNPYA1D___________8BWABgAGi3kpOG1q-B2S1wAQ&item.id=%7E%7EV1%7E%7E-7626569155943893181%7E%7Ed1n4_gLDuMkBW5ynPq6RSS5dKLQe2REsTFN8A2PneMe9OSd03RFk211LqYDaWXBnlD6CtweKIb_hxshbJxLBaL3Gzi67IULKH_cPQniqvf34JR2BZr0JwlZJK_n38LmXBznfstAxgHxK10DUnx__IOZshTJzHV6HG2_zDL-kFQ3JpQKlDH6nPzmMPUD_WgEHs_GFMw3gipRQaEEG_D8sPsIsedhgFCKLEuHtmyrqKIH6JeqbAF41EmUILOdKREMS-YMiEKt5faBg_LXVQLbnXZlLeXUHShw0g_iEThBuayk&item.type=video&sig=08d890a5015a39371d18e106e58b2ca0f9e531487310&redir=http%3A%2F%2Fwww.bild.de%2Fbild-plus%2Freise%2F2016%2Fupgrade%2Ftipps-upgrades-fluege-hotels-44223694%2Cvar%3Dx%2Cview%3DconversionToLogin.bild.html%3Futm_source%3Dtaboola%26utm_medium%3Dreferral%26tblci%3DGiAh7MKX3N-lHoAho60FXUGWK-X2kszKZL0YCNKeMqD7jyC5BCi-5Nj0i8eNlDE%23tblciGiAh7MKX3N-lHoAho60FXUGWK-X2kszKZL0YCNKeMqD7jyC5BCi-5Nj0i8eNlDE&ui=9eb0c085-6696-47d1-a70c-84edc21e5bdf-tuct938b991&cpb=GIkFIJz__________wEqFnRhYm9vbGFzeW5kaWNhdGlvbi5jb20yCHRyYzAwMTE5OIDOqMwFQIjrCkivkBBQmNPYA1j___________8BYwjd__________8BEN3__________wEYI2RjCJYUEJscGBhkYwjSAxDgBhgIZGMI9AUQiwoYC2RjCPQUEJ4dGB9kYwikJxCDNRgvZHgBgAECiAG2r-3GAZABHA"
            },
            {
                "type": "video",
                "name": "The 10 Most Incredible Cars of the Future",
                "created": "Mon, 26 Nov 2012 17:05:47 UTC",
                "branding": "Fiscal Times",
                "duration": "0",
                "views": "0",
                "thumbnail": [
                    {
                        "url": "http://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A%2F%2Fcdn.taboolasyndication.com%2Fsv%2Fimages%2Ffiscaltimes113.png"
                    }
                ],
                "categories": [
                    "en"
                ],
                "id": "~~V1~~6539513834589967190~~xSbQTNLb6Tga0aUpXB3saoSLiAOdc-6sgy8bU56LA-AZDaMJce4jup1Fuc1iPZHBRMn_0S_e1214ALcf-kGSlPoew2qHyISbADwBJUzKmw6bqfbiC5U7nuJn7Tl_mglu6oa8rQs37CF5XIAAK4U_fKlF8NqAQJAWjIC2OyS850XZFjv5pnOHUjtyO1PYpeS4sXJpWQrfTRVttn6hzA5K4VGelGL2LpVPBK5hi3Trj9G2AWZlk2PN0lmKS_F9cTwLJs-uC3-WWmrUP_51FzAi-ETIjLFrfyefcx_ooZsGHf4",
                "origin": "sponsored",
                "url": "http://api.taboola.com/1.0/json/taboola-templates/recommendations.notify-click?app.type=desktop&app.apikey=f9040ab1b9c802857aa783c469d0e0ff7e7366e4&response.id=__f2256152b78cac62b3748f36ac3601a3__f47553b59b9baeb616186c84c23ee3a7&response.session=v2_9065131c7598d5134275c0fa1ba12eb6_9eb0c085-6696-47d1-a70c-84edc21e5bdf-tuct938b991_1648309265_1648309265_CNawjgYQswsY98mNt_wvIAEoATBmOIjrCkCvkBBImNPYA1D___________8BWABgAGi3kpOG1q-B2S1wAQ&item.id=%7E%7EV1%7E%7E6539513834589967190%7E%7ExSbQTNLb6Tga0aUpXB3saoSLiAOdc-6sgy8bU56LA-AZDaMJce4jup1Fuc1iPZHBRMn_0S_e1214ALcf-kGSlPoew2qHyISbADwBJUzKmw6bqfbiC5U7nuJn7Tl_mglu6oa8rQs37CF5XIAAK4U_fKlF8NqAQJAWjIC2OyS850XZFjv5pnOHUjtyO1PYpeS4sXJpWQrfTRVttn6hzA5K4VGelGL2LpVPBK5hi3Trj9G2AWZlk2PN0lmKS_F9cTwLJs-uC3-WWmrUP_51FzAi-ETIjLFrfyefcx_ooZsGHf4&item.type=video&sig=5c14df6d18dcbfa17b923bbfe10078ef77df5eb8f77d&redir=http%3A%2F%2Fwww.thefiscaltimes.com%2FArticles%2F2012%2F08%2F24%2FThe-10-Most-Incredible-Cars-of-the-Future.aspx%3Futm_source%3Dtaboola%26utm_medium%3Dreferral%26tblci%3DGiAh7MKX3N-lHoAho60FXUGWK-X2kszKZL0YCNKeMqD7jyC5BCi29uiO_77_sKUB%23tblciGiAh7MKX3N-lHoAho60FXUGWK-X2kszKZL0YCNKeMqD7jyC5BCi29uiO_77_sKUB&ui=9eb0c085-6696-47d1-a70c-84edc21e5bdf-tuct938b991&cpb=GIkFIJz__________wEqFnRhYm9vbGFzeW5kaWNhdGlvbi5jb20yCHRyYzAwMTE5OIDOqMwFQIjrCkivkBBQmNPYA1j___________8BYwjd__________8BEN3__________wEYI2RjCJYUEJscGBhkYwjSAxDgBhgIZGMI9AUQiwoYC2RjCPQUEJ4dGB9kYwikJxCDNRgvZHgBgAECiAG2r-3GAZABHA"
            }
        ]
    }

    beforeEach(() => { recommendationController.renderRecommmendations(mockData) })

    test('Render recommendation cards in recommendations container', () => {
        const elRecommandaionContainer = document.querySelector('.recommendation-container')
        expect(elRecommandaionContainer.childElementCount).toBe(4)
    })

    test('Render recommendaion\'s advertiser\'s name only if sponsored', () => {
        const elSponsoredAdvertiserName = document.querySelector('.recommendation-card:first-child h6')
        expect(elSponsoredAdvertiserName).toBeTruthy()
        const elOrganicAdvertiserName = document.querySelector('.recommendation-card:nth-child(2) h6')
        expect(elOrganicAdvertiserName).toBeFalsy()
    })

})