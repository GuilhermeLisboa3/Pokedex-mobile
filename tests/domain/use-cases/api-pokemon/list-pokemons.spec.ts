import { type ListPokemons, ListPokemonsUseCase } from '@/domain/use-cases/api-pokemon'
import { type HttpClient } from '@/domain/contracts/http'
import { httpClientParams } from '@/tests/mocks'

import { mock } from 'jest-mock-extended'

describe('ListPokemonsUseCase', () => {
  const page: number = 25
  const perPage: number = 25
  let sut: ListPokemons
  const { url } = httpClientParams
  const httpClient = mock<HttpClient>()

  beforeEach(() => {
    sut = ListPokemonsUseCase(url, httpClient)
  })

  it('should call HttpClient with correct values', async () => {
    await sut({ page, perPage })

    expect(httpClient.request).toHaveBeenCalledWith({ url: `${url}/pokemon?limit=${perPage}&offset=${page}`, method: 'get' })
  })
})
