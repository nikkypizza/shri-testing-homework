const { assert } = require('chai');

describe('Inner file ', () => {
  const lastLinkPath = '.commit:last-child .commit__link a'; // Проверяем последний файл ибо новые коммиты сдвигают линейку
  const firstFilePath = 'li:first-child a';

  it('should not be empty', async function () {
    const content = await this.browser
      .url('/')
      .click(lastLinkPath)
      .click(firstFilePath)
      .getText('.content div');

      assert.equal(`node_modules`, content)
  });

  it('matches screenshot', async function () {
    return this.browser
      .url('/')
      .click(lastLinkPath)
      .click(firstFilePath)
      .assertView('content', 'html');
  });
});
