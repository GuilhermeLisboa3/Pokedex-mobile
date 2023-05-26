import { type HttpRequest, type HttpResponse } from '@/domain/contracts/http'

import axios from 'axios'

export class AxiosAdapter {
  async request ({ method, url, body, headers }: HttpRequest): Promise<HttpResponse> {
    const { status, data } = await axios.request({ url, method, data: body, headers })
    return { statusCode: status, data }
  }
}
