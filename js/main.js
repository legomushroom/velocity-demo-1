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
      return new Logo({
        delay: 0
      });
    };

    return Main;

  })();

  setTimeout(function() {
    return new Main;
  }, 500);

}).call(this);
