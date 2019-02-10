module.exports = {
  coverageDirectory: "coverage",
  coverageThreshold: {
    global: {
      branches: 78,
      functions: 90,
      lines: 90,
      statements: 90
    }
  },
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy"
  },
  setupFiles: ["<rootDir>setupTests.js"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  verbose: true
};
