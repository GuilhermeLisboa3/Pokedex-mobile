import { AuthorizeHttpClientDecorator } from '@/main/decorators'
import { makeAsyncStorage } from '@/main/factories/infra/cache'
import { makeHttpClient } from '@/main/factories/infra/http'

export const makeAuthorizeHttpClientDecorator = (): AuthorizeHttpClientDecorator =>
  new AuthorizeHttpClientDecorator(makeAsyncStorage(), makeHttpClient())
