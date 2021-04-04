module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.ts?$': 'ts-jest'
  },
  testRegex: '(/test/).*\\.spec.ts$',
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
  coverageDirectory: 'coverage-unit'
};
