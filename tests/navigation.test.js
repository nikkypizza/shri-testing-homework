const assert = require(`chai`).assert;
const { buildFolderUrl, buildFileUrl, buildBreadcrumbs } = require(`../utils/navigation.js`);

const stubs = {
  object: { 0: `test` },
  number: 321
};
let testCase = buildFolderUrl(stubs.object, stubs.number);
let testCase2 = buildFileUrl(stubs.object, stubs.number);

describe(`navigation.js`, () => {
  describe(`buildFolderUrl()`, () => {
    it(`Function sets URL to given value`, () => {
      assert.equal(`/files/[object Object]/321`, testCase);
    });
    it(`Function returns a string`, () => {
      assert.isString(testCase);
    });
  });
  describe(`buildFileUrl()`, () => {
    it(`Function sets URL to given value`, () => {
      assert.equal(`/content/[object Object]/321`, testCase2);
    });
    it(`Function returns a string`, () => {
      assert.isString(testCase2);
    });
  });
});
