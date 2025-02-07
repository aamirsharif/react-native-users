module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest', 
  },
  moduleNameMapper: {
    '^@components/(.*)$': '<rootDir>/components/$1',
    '^@screens/(.*)$': '<rootDir>/screens/$1',
    '^@utils/(.*)$': '<rootDir>/utils/$1',
    '^@assets/(.*)$': '<rootDir>/assets/$1',
    '^@store/(.*)$': '<rootDir>/store/$1'
  },
  testPathIgnorePatterns: [
    '/node_modules/',
  ],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'], 
};