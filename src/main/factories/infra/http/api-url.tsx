import { API_POKEMON } from '@env'
export const makeApiUrl = (path: string): string => `${API_POKEMON}${path}`
