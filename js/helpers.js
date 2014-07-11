(function() {
  var Helpers;

  Helpers = (function() {
    function Helpers() {}

    Helpers.prototype.s = 1;

    Helpers.prototype.rand = function(min, max) {
      return Math.floor((Math.random() * ((max + 1) - min)) + min);
    };

    Helpers.prototype.time = function(time) {
      return time * this.s;
    };

    return Helpers;

  })();

  window.h = new Helpers;

}).call(this);
