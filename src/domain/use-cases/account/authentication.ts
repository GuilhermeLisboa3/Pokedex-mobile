import { type HttpClient } from '@/domain/contracts/http'
import { type Account } from '@/domain/models'

type Setup = (url: string, httpClient: HttpClient<Account>) => Authentication
type Input = { email: string, password: string }
export type Authentication = (input: Input) => Promise<void>

export const AuthenticationUseCase: Setup = (url, httpClient) => async ({ email, password }) => {
  await httpClient.request({ url, method: 'post', body: { email, password } })
}
