'use strict'
import { apiKey } from './api.key.js'

//default values for API:
const _publisherId = 'taboola-templates'

export const DEFAULT_PARAMS = new URLSearchParams({
    'app.type': 'desktop',
    'app.apikey': apiKey,
    'source.id': '214321562187',
    'source.type': 'video',
    'source.url': 'http://www.site.com/videos/214321562187.html',
    'count': 9,
})

export const BASE_URL = `http://api.taboola.com/1.0/json/${_publisherId}/recommendations`



