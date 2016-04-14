var prefs   = require("sdk/simple-prefs").prefs;
var repoUrl = prefs.repoUrl;

require('sdk/page-mod').PageMod({
  include: 'https://github.com/' + repoUrl + '/*',
  contentScriptFile: [
    './jquery-2.2.2.min.js',
    './github-extensions.js'
  ]
});
