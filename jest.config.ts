import type { JestConfigWithTsJest } from 'ts-jest';

const jestConfig: JestConfigWithTsJest = {
	collectCoverage: false,
	collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/index.ts'],
	coverageDirectory: 'coverage',
	coveragePathIgnorePatterns: [
		'/node_modules/',
		'<rootDir>/src/index.tsx',
		'<rootDir>/src/reportWebVitals.js',
	],
	testEnvironment: 'jsdom',
	transformIgnorePatterns: ['<rootDir>/node_modules/'],
	roots: ['<rootDir>'],
	transform: {
		'^.+\\.(ts|tsx)$': 'ts-jest',
		'^.+\\.(js|jsx)$': 'babel-jest',
	},
	moduleDirectories: ['node_modules', 'src'],
	moduleNameMapper: {
		'\\.(scss|less)$': '<rootDir>/styleMock.js',
	},
	setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
	verbose: true,
};

export default jestConfig;
