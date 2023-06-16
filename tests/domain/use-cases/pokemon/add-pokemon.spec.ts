import { type AddPokemon, AddPokemonUseCase } from '@/domain/use-cases/pokemon'
import { type HttpClient } from '@/domain/contracts/http'
import { httpClientParams, PokemonParams } from '@/tests/mocks'
import { AccessDeniedError } from '@/domain/errors'

import { mock } from 'jest-mock-extended'

describe('AddPokemonUseCase', () => {
  let sut: AddPokemon
  const { url } = httpClientParams
  const httpClient = mock<HttpClient>()

  beforeAll(() => {
    httpClient.request.mockResolvedValue({ statusCode: 200, data: true })
  })

  beforeEach(() => {
    sut = AddPokemonUseCase(url, httpClient)
  })

  it('should call HttpClient with correct values', async () => {
    await sut(PokemonParams)

    expect(httpClient.request).toHaveBeenCalledWith({ url, method: 'post', body: PokemonParams })
    expect(httpClient.request).toHaveBeenCalledTimes(1)
  })

  it('should throw AccessDeniedError HttpClient return 403', async () => {
    httpClient.request.mockResolvedValueOnce({ statusCode: 403 })

    const promise = sut(PokemonParams)

    await expect(promise).rejects.toThrow(new AccessDeniedError())
  })
})
