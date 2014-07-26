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
      new Waves({
        delay: h.time(11300)
      });
      new Fish({
        delay: h.time(11500)
      });
      return new Logo({
        delay: h.time(14300)
      });
    };

    Main.prototype.insertAfter = function(newNode, referenceNode) {
      return referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    };

    return Main;

  })();

  setTimeout(function() {
    return new Main;
  }, 500);

}).call(this);
