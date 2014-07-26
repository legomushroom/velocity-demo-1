(function() {
  var Helpers;

  Helpers = (function() {
    function Helpers() {}

    Helpers.prototype.s = 10;

    Helpers.prototype.rand = function(min, max) {
      return Math.floor((Math.random() * ((max + 1) - min)) + min);
    };

    Helpers.prototype.time = function(time) {
      return time * this.s;
    };

    Helpers.prototype.isFF = function() {
      return navigator.userAgent.search("Firefox") > -1;
    };

    Helpers.prototype.isIE9 = function() {
      return navigator.userAgent.search("MSIE 9.0") > -1;
    };

    Helpers.prototype.elasticOut = function(k) {
      var a, p, s;
      a = 0.1;
      p = 0.4;
      if (k === 0) {
        return 0;
      }
      if (k === 1) {
        return 1;
      }
      if (!a || a < 1) {
        a = 1;
        s = p / 4;
      } else {
        s = p * Math.asin(1 / a) / (2 * Math.PI);
      }
      return a * Math.pow(2, -10 * k) * Math.sin((k - s) * (2 * Math.PI) / p) + 1;
    };

    return Helpers;

  })();

  window.h = new Helpers;

}).call(this);
