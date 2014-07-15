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
        delay: h.time(5200)
      });
      return new Triangles({
        delay: h.time(9400)
      });
    };

    return Main;

  })();

  setTimeout(function() {
    return new Main;
  }, 500);

}).call(this);
