module.exports = {
  resolver: 'jest-pnp-resolver',
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts'],
  setupFiles: ['react-app-polyfill/jsdom'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  testMatch: ['<rootDir>/src/**/*.spec.{js,jsx,ts,tsx}'],
  testEnvironment: 'jest-environment-jsdom-fourteen',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)':
      '<rootDir>/config/jest/fileTransform.js',
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$'],
  modulePaths: [],
  moduleNameMapper: {
    '^utils(.*)$': '<rootDir>/src/utils$1',
  },
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json', 'jsx'],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
}
