export default {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: [
      '**/__tests__/**/*.ts?(x)',
      '**/?(*.)+(spec|test).ts?(x)'
    ],
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest'
    },
    moduleFileExtensions: [
      'ts',
      'tsx',
      'js',
      'jsx',
      'json',
      'node'
    ],
    collectCoverage: true,
    coverageReporters: ['json', 'lcov', 'text', 'clover']
  };
  