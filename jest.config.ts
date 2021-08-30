import { Config } from '@jest/types'

const config: Config.InitialOptions = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	moduleFileExtensions: ['ts', 'js'],
	testMatch: ['<rootDir>/src/test/**/*.{test.ts, spec.ts}', '<rootDir>/src/__test__/**/*.{test.ts, spec.ts}'],
	collectCoverageFrom: ['src/lib/**/*'],
	testPathIgnorePatterns: ['node_modules/', 'dist/', 'esm', 'tsconfig.json', 'coverage/', '.github'],
	coveragePathIgnorePatterns: ['node_modules/', 'dist/', 'esm/', 'tsconfig.json', 'coverage/', '.github', 'images']
}

export default config
