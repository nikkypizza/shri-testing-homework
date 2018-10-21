const {assert} = require(`chai`);
const {buildFolderUrl, buildFileUrl, buildBreadcrumbs} = require(`../utils/navigation.js`);

// Подготовка
const stubs = {
  object: {0: `test`},
  number: 321,
  hash: `321ok123`,
  path: `pathToFolder r 2 r`
};

describe(`./utils/navigation.js`, () => {
  describe(`buildFolderUrl(parentHash, path = '')`, () => {
    // Действие
    const output = buildFolderUrl(stubs.object, stubs.number);

    it(`Returns a string`, () => {
      // Проверка
      assert.isString(output);
    });
    it(`Correctly sets URL to given arguments`, () => {
      assert.equal(`/files/[object Object]/321`, output);
    });
    it(`Returns an empty path if it is not specified`, () => {
      const buildURL = buildFolderUrl(stubs.object);
      assert.equal(`/files/[object Object]/`, buildURL);
    });
  });

  describe(`buildFileUrl(parentHash, path)`, () => {
    // Действие
    const output = buildFileUrl(stubs.object, stubs.number);

    it(`Returns a string`, () => {
      // Проверка
      assert.isString(output);
    });
    it(`Correctly sets URL to given arguments`, () => {
      assert.equal(`/content/[object Object]/321`, output);
    });
  });

  describe(`buildBreadcrumbs(hash, path)`, () => {
    it(`Returns an array`, () => {
      // Подготовка
      const output = [{
        href: undefined,
        text: `HISTORY`
      }];
      // Действие
      const bc = buildBreadcrumbs();
      // Проверка
      assert.isArray(output, bc);
    });
    it(`Returns undefined if hash is not specified`, () => {
      const output = [{
        href: undefined,
        text: `HISTORY`
      }];

      const bc = buildBreadcrumbs();

      assert.deepEqual(output, bc);
    });
    it(`Returns paths to HISTORY and ROOT if hash is specified`, () => {
      const output = [{
        href: `/`,
        text: `HISTORY`
      },
      {
        href: undefined,
        text: `ROOT`
      }
      ];

      const bc = buildBreadcrumbs(stubs.hash);

      assert.deepEqual(output, bc);
    });
    it(`Returns paths to HISTORY, ROOT and folder name if both arg are specified`, () => {
      const output = [{
        href: `/`,
        text: `HISTORY`
      },
      {
        href: `/files/${stubs.hash}/`,
        text: `ROOT`
      },
      {
        text: stubs.path
      }
      ];

      const bc = buildBreadcrumbs(stubs.hash, stubs.path);

      assert.deepEqual(output, bc);
    });
  });
});
