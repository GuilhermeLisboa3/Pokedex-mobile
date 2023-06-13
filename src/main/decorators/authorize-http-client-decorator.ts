import { type HttpRequest, type HttpClient } from '@/domain/contracts/http'
import { type GetStorage } from '@/domain/contracts/cache'

export class AuthorizeHttpClientDecorator {
  constructor (private readonly getStorage: GetStorage, private readonly httpClient: HttpClient) {}

  async request (data: HttpRequest): Promise<void> {
    const account = await this.getStorage.get({ key: 'pokemon-token' })
    if (account?.token) {
      Object.assign(data, { headers: { ...data.headers } })
    }
    this.httpClient.request(data)
  }
}
