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
      this.start = 0;
      this.dur = this.start + 300 * this.s;
      this.$flowersCream.velocity({
        y: 300
      }, {
        duration: this.dur,
        delay: this.start,
        easing: 'ease-in'
      });
      this.start = this.start + 275 * this.s;
      this.dur = 800 * this.s;
      new Spriter({
        sprites: this.$dust.children(),
        duration: this.dur,
        delay: this.start
      });
      this.start = this.start + this.dur;
      this.dur = 400 * this.s;
      return this.$sliceLine.velocity({
        rotateZ: 315,
        scale: 1,
        opacity: 100,
        width: 600,
        transformOrigin: '50% 50%'
      }, {
        delay: this.start,
        duration: this.dur
      });
    };

    return Main;

  })();

  new Main;

}).call(this);
