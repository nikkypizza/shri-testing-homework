const { assert } = require('chai');

describe('Commit content ', () => {
  const lastCommitLinkNode = '.commit:last-child .commit__link a'; // Проверяем последний файл ибо новые коммиты сдвигают линейку

  it('should contain files', async function () {
    const files = await this.browser
      .url('/')
      .click(lastCommitLinkNode)
      .isExisting('.content > ul');

    assert.isTrue(files);
  });

  it('matches screenshot', async function () {
     return this.browser
      .url('/')
      .click(lastCommitLinkNode)
      .assertView('files', 'html');
  });
});
