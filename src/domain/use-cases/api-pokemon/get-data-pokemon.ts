import { type HttpResponse, type HttpClient } from '@/domain/contracts/http'
import { type ApiPokemon } from '@/domain/models'
import { UnexpectedError } from '@/domain/errors'

type Setup = (url: string, httpClient: HttpClient) => GetDataPokemon
type Input = { idOrName: string }
export type GetDataPokemon = (input: Input) => Promise<void>

export const GetDataPokemonUseCase: Setup = (url, httpClient) => async ({ idOrName }) => {
  const pokemon: HttpResponse<ApiPokemon> = await httpClient.request({ url: `${url}/pokemon/${idOrName}`, method: 'get' })
  if (pokemon.statusCode !== 200) throw new UnexpectedError()
  await httpClient.request({ url: `${pokemon.data!.species.url}`, method: 'get' })
}
