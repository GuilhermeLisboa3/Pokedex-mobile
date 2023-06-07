import { type GetDataPokemon, GetDataPokemonUseCase } from '@/domain/use-cases/api-pokemon'
import { type HttpClient } from '@/domain/contracts/http'
import { httpClientParams, ApiPokemonParams } from '@/tests/mocks'
import { UnexpectedError } from '@/domain/errors'

import { mock } from 'jest-mock-extended'

describe('GetDataPokemonUseCase', () => {
  let sut: GetDataPokemon
  const { url } = httpClientParams
  const { name, abilities, height, species } = ApiPokemonParams
  const httpClient = mock<HttpClient>()

  beforeAll(() => {
    httpClient.request.mockResolvedValue({ statusCode: 200, data: { name, abilities, height, species } })
  })

  beforeEach(() => {
    sut = GetDataPokemonUseCase(url, httpClient)
  })

  it('should call HttpClient with correct values', async () => {
    await sut({ idOrName: name })

    expect(httpClient.request).toHaveBeenCalledWith({ url: `${url}/pokemon/${name}`, method: 'get' })
  })

  it('should throw UnexpectedError if HttpClient return 500', async () => {
    httpClient.request.mockResolvedValueOnce({ statusCode: 500 })

    const promise = sut({ idOrName: name })

    await expect(promise).rejects.toThrow(new UnexpectedError())
  })
})
