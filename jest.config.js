module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  // other configurations...
  roots: ["src"],
  transform: {
    "^.+\\.(ts|tsx)$": [
      "ts-jest",
      { tsconfig: "tsconfig.test.json", isolatedModules: true },
    ],
    "\\.(svg)$": "<rootDir>/src/__tests__/transformers/svg-transformers.ts",
  },
  transformIgnorePatterns: ["/node_modules/"],
  moduleNameMapper: {
    "\\.(css|less|scss)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["<rootDir>/src/__tests__/setupTests.ts"],
  testPathIgnorePatterns: [
    "/node_modules/",
    "/src/__tests__/transformers",
    "/src/__tests__/setupTests.ts",
    "\\.ignored\\.test\\.tsx$", // You can also use specific file patterns
  ],
  collectCoverage: true,
  coverageReporters: ["cobertura", "html", "lcov", "text"],
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!**/node_modules/**",
    "!**/src/__tests__/transformers/**",
    "!**/src/config/**",
    "!**/src/data/**",
    "!**/src/components/form/icon/**",
    "!**/src/theme.ts",
    "!**/src/components/constants.ts",
  ],
  testMatch: ["**/*.test.{ts,tsx}"],
};
