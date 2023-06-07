import { type HttpClient } from '@/domain/contracts/http'

type Setup = (url: string, httpClient: HttpClient) => GetDataPokemon
type Input = { idOrName: string }
export type GetDataPokemon = (input: Input) => Promise<void>

export const GetDataPokemonUseCase: Setup = (url, httpClient) => async ({ idOrName }) => {
  await httpClient.request({ url: `${url}/pokemon/${idOrName}`, method: 'get' })
}
