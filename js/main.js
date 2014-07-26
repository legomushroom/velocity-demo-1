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
      return new Meets({
        delay: h.time(0)
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
