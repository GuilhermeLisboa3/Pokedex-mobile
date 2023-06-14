module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['<rootDir>/src/main/config/jest-setup.ts'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!<rootDir>/src/main/**',
    '!<rootDir>/src/**/index.ts',
    '!<rootDir>/src/application/layouts/**',
    '!<rootDir>/src/**/styles.ts'
  ],
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  moduleNameMapper: {
    '@/tests/(.+)': '<rootDir>/tests/$1',
    '@/(.+)': '<rootDir>/src/$1'
  },
  moduleDirectories: [
    'node_modules',
    './test'
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: [
    '/node_modules/'
  ],
  roots: ['<rootDir>/src', '<rootDir>/tests'],
  transform: { '.+\\.(ts|tsx)$': 'babel-jest' },
  clearMocks: true
}
