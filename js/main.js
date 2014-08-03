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
      return new Caleydoscope({
        delay: h.time(0)
      });
    };

    return Main;

  })();

  $(window).load(function() {
    return setTimeout(function() {
      return new Main;
    }, 1000);
  });

}).call(this);
