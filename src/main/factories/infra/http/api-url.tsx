import { API_URL_POKEDEX } from '@env'
export const makeApiUrl = (path: string): string => `${API_URL_POKEDEX}${path}`
