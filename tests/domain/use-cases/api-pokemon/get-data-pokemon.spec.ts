import { type GetDataPokemon, GetDataPokemonUseCase } from '@/domain/use-cases/api-pokemon'
import { type HttpClient } from '@/domain/contracts/http'
import { httpClientParams, ApiPokemonParams } from '@/tests/mocks'

import { mock } from 'jest-mock-extended'

describe('GetDataPokemonUseCase', () => {
  let sut: GetDataPokemon
  const { url } = httpClientParams
  const { name } = ApiPokemonParams
  const httpClient = mock<HttpClient>()

  beforeEach(() => {
    sut = GetDataPokemonUseCase(url, httpClient)
  })

  it('should call HttpClient with correct values', async () => {
    await sut({ idOrName: name })

    expect(httpClient.request).toHaveBeenCalledWith({ url: `${url}/pokemon/${name}`, method: 'get' })
  })
})
