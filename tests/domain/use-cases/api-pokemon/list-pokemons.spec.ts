import { type ListPokemons, ListPokemonsUseCase } from '@/domain/use-cases/api-pokemon'
import { type HttpClient } from '@/domain/contracts/http'
import { httpClientParams } from '@/tests/mocks'
import { UnexpectedError } from '@/domain/errors'

import { mock } from 'jest-mock-extended'

describe('ListPokemonsUseCase', () => {
  const page: number = 25
  const perPage: number = 25
  let sut: ListPokemons
  const { url } = httpClientParams
  const httpClient = mock<HttpClient>()

  beforeAll(() => {
    httpClient.request.mockResolvedValue({ statusCode: 200 })
  })

  beforeEach(() => {
    sut = ListPokemonsUseCase(url, httpClient)
  })

  it('should call HttpClient with correct values', async () => {
    await sut({ page, perPage })

    expect(httpClient.request).toHaveBeenCalledWith({ url: `${url}/pokemon?limit=${perPage}&offset=${page}`, method: 'get' })
  })

  it('should throw UnexpectedError if first HttpClient return error', async () => {
    httpClient.request.mockResolvedValueOnce({ statusCode: 500 })

    const promise = sut({ page, perPage })

    await expect(promise).rejects.toThrow(new UnexpectedError())
  })
})
