import { API_URL_POKEMON } from '@env'
export const makeApiUrl = (path: string): string => `${API_URL_POKEMON}${path}`
