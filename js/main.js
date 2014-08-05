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
        delay: h.time(0)
      });
      new Meets({
        delay: h.time(2900)
      });
      new Svg({
        delay: h.time(4900)
      });
      new Triangles({
        delay: h.time(7900)
      });
      new Tribits({
        delay: h.time(8950)
      });
      new Waves({
        delay: h.time(10300)
      });
      new Fish({
        delay: h.time(11500)
      });
      new Logo({
        delay: h.time(13300)
      });
      return new Mushroom({
        delay: h.time(15300)
      });
    };

    return Main;

  })();

  $(window).load(function() {
    return setTimeout(function() {
      return new Main;
    }, 500);
  });

}).call(this);
