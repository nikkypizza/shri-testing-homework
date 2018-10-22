const { assert } = require('chai');

describe('Index page ', () => {
  it('contains commit history in (.content)', async function () {
    const index = await this.browser
      .url('/')
      .isExisting('.content .commit');

    assert.isTrue(index);
  });

  it('contains user info, link and date in (.commit)', async function () {
    const indexPage = this.browser.url('/').element('.commit');
    const [author, link, date] = await Promise.all([
      indexPage.isExisting('.commit__author'),
      indexPage.isExisting('.commit__link a'),
      indexPage.isExisting('.commit__date')
    ]);

    assert.isTrue(author);
    assert.isTrue(link);
    assert.isTrue(date);
  });

  it('matches screenshot', async function () {
    return this.browser
      .url('/')
      .assertView('index', 'html');
  });
});
