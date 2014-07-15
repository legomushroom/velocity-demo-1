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
        delay: h.time(3400)
      });
      new Svg({
        delay: h.time(5000)
      });
      new Triangles({
        delay: h.time(9200)
      });
      return new Waves({
        delay: h.time(11200)
      });
    };

    return Main;

  })();

  setTimeout(function() {
    return new Main;
  }, 500);

}).call(this);
