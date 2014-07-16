(function() {
  var Main;

  Main = (function() {
    function Main() {
      if (typeof this.vars === "function") {
        this.vars();
      }
      this.run();
    }

    Main.prototype.run = function() {
      new Caleydoscope({
        delay: 0
      });
      new Meets({
        delay: h.time(2900)
      });
      new Svg({
        delay: h.time(4600)
      });
      new Triangles({
        delay: h.time(8600)
      });
      return new Waves({
        delay: h.time(11000)
      });
    };

    return Main;

  })();

  setTimeout(function() {
    return new Main;
  }, 500);

}).call(this);
