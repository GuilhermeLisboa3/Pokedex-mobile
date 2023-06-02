import { ValidationComposite } from '@/application/validation'
import { ValidationBuilder as Builder } from '@/application/validation/builder'

export const makeLoginValidation = (): ValidationComposite =>
  ValidationComposite.build([
    ...Builder.of('email').required().email().build(),
    ...Builder.of('password').required().length(5).build()
  ])
