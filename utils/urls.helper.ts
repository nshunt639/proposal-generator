import { BASE_URL } from 'config/constants'

export function getBaseUrl() {
    return typeof window !== 'undefined' ? window.location.origin : BASE_URL
}
