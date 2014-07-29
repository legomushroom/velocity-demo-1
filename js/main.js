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
        delay: h.time(1000)
      });
      new Meets({
        delay: h.time(3900)
      });
      new Svg({
        delay: h.time(5900)
      });
      new Triangles({
        delay: h.time(8900)
      });
      new Tribits({
        delay: h.time(9950)
      });
      new Waves({
        delay: h.time(11300)
      });
      new Fish({
        delay: h.time(12200)
      });
      new Logo({
        delay: h.time(14300)
      });
      return new Mushroom({
        delay: h.time(16300)
      });
    };

    return Main;

  })();

  setTimeout(function() {
    return new Main;
  }, 500);

}).call(this);
