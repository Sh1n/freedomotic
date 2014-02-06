(function($, d3) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

  module('jQuery#freedomotic', {
    // This will run before each test in this module.
    setup: function() {
      this.elems = $('#qunit-fixture').children();
    }
  });

  test('defaults', function(){
    ok($.fn.freedomotic.options, "options set up correctly");
    equal($.fn.freedomotic.options.color, d3.scale.category10(), "default global options are set");
    equal($.fn.freedomotic.options.scale, d3.scale.linear(), "default global options are set");
  });

  test('change defaults', function(){
    ok($.fn.freedomotic.options, "options changed correctly");
    var scaleValue = 10;
    var colorValue = "new value"
    $.fn.freedomotic.options.color = colorValue;
    $fn.freedomotic.options.scale = scaleValue;
    equal($.fn.freedomotic.options.color, colorValue, "color global option changed");
    equal($.fn.freedomotic.options.scale, scaleValue, "scale global option changed");
  });
/*
  test('is chainable', function() {
    expect(1);
    // Not a bad test to run on collection methods.
    strictEqual(this.elems.freedomotic(), this.elems, 'should be chainable');
  });

  test('is awesome', function() {
    expect(1);
    strictEqual(this.elems.freedomotic().text(), 'awesome0awesome1awesome2', 'should be awesome');
  });

  module('jQuery.freedomotic');

  test('is awesome', function() {
    expect(2);
    strictEqual($.freedomotic(), 'awesome.', 'should be awesome');
    strictEqual($.freedomotic({punctuation: '!'}), 'awesome!', 'should be thoroughly awesome');
  });

  module(':freedomotic selector', {
    // This will run before each test in this module.
    setup: function() {
      this.elems = $('#qunit-fixture').children();
    }
  });

  test('is awesome', function() {
    expect(1);
    // Use deepEqual & .get() when comparing jQuery objects.
    deepEqual(this.elems.filter(':freedomotic').get(), this.elems.last().get(), 'knows awesome when it sees it');
  });
*/
}(jQuery, d3));
