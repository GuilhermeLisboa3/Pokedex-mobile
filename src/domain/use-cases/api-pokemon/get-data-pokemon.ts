import { type HttpResponse, type HttpClient } from '@/domain/contracts/http'
import { type SpeciesPokemon, type ApiPokemon } from '@/domain/models'
import { UnexpectedError } from '@/domain/errors'

type Setup = (url: string, httpClient: HttpClient) => GetDataPokemon
type Input = { idOrName: string }
type Output = { pokemon: ApiPokemon, description: string }
export type GetDataPokemon = (input: Input) => Promise<Output>

export const GetDataPokemonUseCase: Setup = (url, httpClient) => async ({ idOrName }) => {
  const pokemon: HttpResponse<ApiPokemon> = await httpClient.request({ url: `${url}/pokemon/${idOrName}`, method: 'get' })
  if (pokemon.statusCode !== 200) throw new UnexpectedError()
  const pokemonDescription: HttpResponse<SpeciesPokemon> = await httpClient.request({ url: `${pokemon.data!.species.url}`, method: 'get' })
  const description = pokemonDescription.data?.flavor_text_entries.filter(description => description.language.name === 'en')[0].flavor_text
  const removesSymbols = description!.replace('', ' ')
  return { pokemon: pokemon.data!, description: removesSymbols }
}
