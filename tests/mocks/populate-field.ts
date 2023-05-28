import { fireEvent, screen } from '@testing-library/react-native'

export const populateField = (fieldName: string, value: string): void => {
  const input = screen.getByTestId(fieldName)
  fireEvent.changeText(input, value)
}
