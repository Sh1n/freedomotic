/*
 * freedomotic
 * https://github.com/Sh1n/freedomotic
 *
 * Copyright (c) 2014 Francesco Shin Bux
 * Licensed under the MIT license.
 */

(function($, d3) {
    // Collection method.
    $.fn.freedomotic = function(opts) {
            opts = $.extend({}, $.fn.freedomotic.options, opts);
    };

    $.fn.freedomotic.options = {
          color: d3.scale.category10(),
          container: null,
          scale: d3.scale.linear()
    };

    // Static method.
    $.freedomotic = function(options) {
        // Override default options with passed-in options.
        options = $.extend({}, $.freedomotic.options, options);
        // Return something awesome.
        return 'awesome' + options.punctuation;
    };

    // Static method default options.
    $.freedomotic.options = {
        punctuation: '.'
    };

    // Custom selector.
    $.expr[':'].freedomotic = function(elem) {
        // Is this element awesome?
        return $(elem).text().indexOf('awesome') !== -1;
    };
}(jQuery, d3));
