import type { Config } from '@jest/types';

const baseDir = '<rootDir>/src/app/server_app/server';
const baseTestDir = '<rootDir>/src/test/server_app/server';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  collectCoverage: false,
  collectCoverageFrom: [`${baseDir}/**/*.ts`],
  testMatch: [`${baseTestDir}/**/*.ts`],
};

export default config;
