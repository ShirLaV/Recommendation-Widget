import { expect, jest } from '@jest/globals'
import { recommendationService } from './recommendation.service.js'

describe('Recommendation service tests', () => {
    test('Calls onSuccess when ajax request is successful', () => {
        const onSuccess = jest.fn(() => {
            expect(onSuccess).toHaveBeenCalled()
        })
        recommendationService.getRecommendations(onSuccess)
    })

    test('Calls onError when ajax request fails', () => {
        const onError = jest.fn(() => {
            expect(onError).toHaveBeenCalled()
        })
        recommendationService.getRecommendations(() => { }, onError, {})
    })
})
