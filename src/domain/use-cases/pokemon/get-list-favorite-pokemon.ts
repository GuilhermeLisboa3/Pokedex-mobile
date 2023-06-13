import { type HttpClient } from '@/domain/contracts/http'
import { type Pokemon } from '@/domain/models'

type Setup = (url: string, httpClient: HttpClient<Pokemon[]>) => GetListFavoritePokemon
export type GetListFavoritePokemon = () => Promise<void>

export const GetListFavoritePokemonUseCase: Setup = (url, httpClient) => async () => {
  await httpClient.request({ url, method: 'get' })
}
