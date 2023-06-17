import { type HttpClient } from '@/domain/contracts/http'
import { AccessDeniedError, UnexpectedError } from '@/domain/errors'

type Setup = (url: string, httpClient: HttpClient<boolean>) => DeletePokemon
type Input = { idPokemon: string }
export type DeletePokemon = (input: Input) => Promise<void>

export const DeletePokemonUseCase: Setup = (url, httpClient) => async ({ idPokemon }) => {
  const { statusCode } = await httpClient.request({ url: `${url}/${idPokemon}`, method: 'delete' })
  switch (statusCode) {
    case 204: break
    case 403: throw new AccessDeniedError()
    default: throw new UnexpectedError()
  }
}
