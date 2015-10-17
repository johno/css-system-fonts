var assert = require('assert');
var cssSystemFonts = require('..');

var systemFonts = ['caption', 'icon', 'menu', 'message-box', 'small-caption', 'status-bar'];

describe('css-system-fonts', function() {

  it('should do something awesome', function() {
    assert.deepEqual(cssSystemFonts(), systemFonts);
  });
});
