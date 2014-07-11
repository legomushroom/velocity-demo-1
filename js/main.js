(function() {
  var Main;

  Main = (function() {
    function Main() {
      this.vars();
      this.run();
    }

    Main.prototype.vars = function() {
      return this.s = 1;
    };

    Main.prototype.run = function() {
      new Triangles({
        delay: 0
      });
      new Waves({
        delay: h.time(2300)
      });
      return new Caleydoscope({
        delay: h.time(5000)
      });
    };

    return Main;

  })();

  setTimeout((function(_this) {
    return function() {
      return new Main;
    };
  })(this), 500);

}).call(this);
