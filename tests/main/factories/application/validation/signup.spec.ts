import { EmailValidation, RequiredValidation, CompareValidation, ValidationComposite, LengthValidation } from '@/application/validation'
import { makeSignUpValidation } from '@/main/factories/application/validation'

describe('makeSignUpValidation', () => {
  it('should make ValidationComposite with correct validations', () => {
    const composite = makeSignUpValidation()

    expect(composite).toEqual(ValidationComposite.build([
      new RequiredValidation('name'),
      new RequiredValidation('email'),
      new EmailValidation('email'),
      new RequiredValidation('password'),
      new LengthValidation('password', 5),
      new RequiredValidation('passwordConfirmation'),
      new LengthValidation('passwordConfirmation', 5),
      new CompareValidation('passwordConfirmation', 'password')
    ]))
  })
})
