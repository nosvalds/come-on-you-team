const ghpages = require('gh-pages');

/**
 * This task pushes the /build directory to the `main` branch of the configured `repo`.
 */
ghpages.publish('build', {
    branch: 'main',
    repo: 'ssh://nikolaso@nikolaso.com:22007/home/nikolaso/come-on-you.nikolaso.com'
  }, (err) => {
      if (err) {
        console.log("Error deploying to nikolaso.com" + err)
      }
  });