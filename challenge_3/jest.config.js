module.exports = {
  transform: {
    '^.+\\.ts?$': 'ts-jest'
  },
  testEnvironment: 'node',
  testRegex: '/tests/.*\\.(tests|spec)?\\.(ts|tsx|js)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
};
