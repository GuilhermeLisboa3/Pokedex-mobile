import { makeSignUpValidation } from '@/main/factories/application/validation'
import { makeAuthentication } from '@/main/factories/domain/use-cases/account'
import { Login } from '@/application/pages/login'

import React from 'react'

export const MakeLogin: React.FC = () =>
  (<Login authentication={makeAuthentication()} validator={makeSignUpValidation()} />)
