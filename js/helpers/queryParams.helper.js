export const queryParamsHelper = {
    isValidQueryObject
}

function isValidQueryObject(obj) {
    return obj instanceof URLSearchParams
}