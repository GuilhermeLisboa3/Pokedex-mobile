module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['<rootDir>/src/main/config/jest-setup.ts'],
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}'],
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  moduleNameMapper: {
    '@/tests/(.+)': '<rootDir>/tests/$1',
    '@/(.+)': '<rootDir>/src/$1'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: [
    '/node_modules/'
  ],
  roots: ['<rootDir>/src', '<rootDir>/tests'],
  transform: { '.+\\.(ts|tsx)$': 'babel-jest' },
  clearMocks: true
}
