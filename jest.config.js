module.exports = {
  verbose: true,
  setupFilesAfterEnv: ['./test/setup-tests'],
  coverageThreshold: {
    global: {
      branches: 97,
      functions: 98,
      lines: 98,
      statements: 98,
    },
  },
};
