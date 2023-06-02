import { EmailValidation, RequiredValidation, ValidationComposite, LengthValidation } from '@/application/validation'
import { makeLoginValidation } from '@/main/factories/application/validation'

describe('makeLoginValidation', () => {
  it('should make ValidationComposite with correct validations', () => {
    const composite = makeLoginValidation()

    expect(composite).toEqual(ValidationComposite.build([
      new RequiredValidation('email'),
      new EmailValidation('email'),
      new RequiredValidation('password'),
      new LengthValidation('password', 5)
    ]))
  })
})
