(function() {
  var Main;

  Main = (function() {
    function Main() {
      this.vars();
      setTimeout((function(_this) {
        return function() {
          return _this.run();
        };
      })(this), 200 * this.s);
    }

    Main.prototype.vars = function() {
      this.s = 1;
      this.$pattern = $('#flowers-cream-pattern');
      this.$dust = $('#js-dust');
      this.$owlsImage = $('#js-owls-image');
      this.$flowersCream = $('#js-flowers-cream');
      return this.$sliceLine = $('#js-slice-line');
    };

    Main.prototype.run = function() {
      new Spriter({
        sprites: this.$dust.children(),
        duration: 800,
        delay: 275
      });
      this.$flowersCream.velocity({
        y: 300
      }, {
        duration: 300 * this.s,
        easing: 'ease-in'
      });
      return this.$sliceLine.velocity({
        rotateZ: 315,
        scale: 1,
        opacity: 100,
        width: 600,
        transformOrigin: '50% 50%'
      }, {
        delay: 1000
      });
    };

    return Main;

  })();

  new Main;

}).call(this);
