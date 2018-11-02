module.exports = {
  baseUrl: 'http://localhost:3000',
  gridUrl: 'http://0.0.0.0:4444/wd/hub',
  compositeImage: true,
  browsers: {
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome'
      }
    }
    // firefox: {
    //   desiredCapabilities: {
    //     browserName: 'firefox'
    //   }
    // }
  },
  compositeImage: true,
  screenshotsDir: 'hermione/screenshots',
  plugins: {
    'html-reporter/hermione': {
      path: 'hermione-html-report'
    }
  }
};
