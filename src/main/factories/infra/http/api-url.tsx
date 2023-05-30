import { API_URL } from '@env'
export const makeApiUrl = (path: string): string => `${API_URL}${path}`
