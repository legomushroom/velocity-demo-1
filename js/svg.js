(function() {
  var Svg;

  Svg = (function() {
    function Svg(o) {
      this.o = o != null ? o : {};
      this.vars();
      this.run();
    }

    Svg.prototype.vars = function() {};

    Svg.prototype.run = function() {};

    return Svg;

  })();

  window.Svg = Svg;

}).call(this);
