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
        delay: h.time(7100)
      });
      new Triangles({
        delay: h.time(10100)
      });
      new Waves({
        delay: h.time(12500)
      });
      new Fish({
        delay: h.time(13100)
      });
      return new Logo({
        delay: h.time(15700)
      });
    };

    return Main;

  })();

  setTimeout(function() {
    return new Main;
  }, 500);

}).call(this);
