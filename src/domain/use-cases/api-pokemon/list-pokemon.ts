import { type HttpClient } from '@/domain/contracts/http'

type Setup = (url: string, httpClient: HttpClient) => ListPokemons
type Input = { page: number, perPage: number }
export type ListPokemons = (input: Input) => Promise<void>

export const ListPokemonsUseCase: Setup = (url, httpClient) => async ({ page, perPage }) => {
  await httpClient.request({ url: `${url}/pokemon?limit=${perPage}&offset=${page}`, method: 'get' })
}
