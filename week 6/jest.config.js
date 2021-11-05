const {defaults} = require('jest-config');

const config = {
  bail: 1,
  collectCoverage: true,
  // testRegex: "(./specs/)?.*.m?js$"
  testRegex: ".*$",
  testPathIgnorePatterns: ["patata"],
  moduleFileExtensions: [
    ...defaults.moduleFileExtensions
    , 'ts'
    , 'tsx'],
};

module.exports = config;
