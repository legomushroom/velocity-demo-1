(function() {
  var Main;

  Main = (function() {
    function Main() {
      this.vars();
      setTimeout((function(_this) {
        return function() {
          return _this.run();
        };
      })(this), 200);
    }

    Main.prototype.vars = function() {
      this.s = 1;
      this.$pattern = $('#flowers-cream-pattern');
      this.$dust = $('#js-dust');
      this.$owlsImage = $('#js-owls-image');
      this.$flowersCream = $('#js-flowers-cream');
      this.$sliceLine = $('#js-slice-line');
      this.$creamTriangle1 = $('#js-cream-triangle1').css({
        'transform': 'translate(490px,300px)'
      });
      this.$creamTriangle2 = $('#js-cream-triangle2');
      this.$creamTriangles = $('#js-cream-triangles');
      return this.$creamTriangleWrapper = $('#js-cream-triangle2-wrapper').css({
        'transform': 'translate(490px,300px)'
      });
    };

    Main.prototype.run = function() {
      var translateSize;
      this.start = 0 * this.s;
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
      this.start = this.start + this.dur - 200 * this.s;
      this.dur = 400 * this.s;
      this.$sliceLine.velocity({
        rotateZ: 315,
        scale: 1,
        opacity: 100,
        width: 600,
        transformOrigin: '50% 50%'
      }, {
        delay: this.start,
        duration: this.dur
      });
      this.start = this.start + this.dur + 200 * this.s;
      this.dur = 30 * this.s;
      translateSize = 20;
      this.$creamTriangles.velocity({
        translateY: 2 * translateSize,
        translateX: 2 * translateSize
      }, {
        duration: this.dur,
        delay: this.start,
        begin: (function(_this) {
          return function() {
            _this.$sliceLine.hide();
            _this.$creamTriangles.show();
            return _this.$flowersCream.hide();
          };
        })(this)
      }).velocity({
        translateY: 0,
        translateX: 0
      }, {
        duration: 10 * this.dur,
        easing: 'easeOutElastic'
      });
      this.$creamTriangle1.css({
        'transform-origin': '50% 50%'
      });
      this.$creamTriangle1.velocity({
        translateX: 490,
        translateY: 300
      }, {
        duration: 1
      }).velocity({
        translateX: 490 - translateSize,
        translateY: 300 + translateSize / 2
      }, {
        duration: 6 * this.dur,
        delay: this.start - 400 * this.s,
        easing: 'easeOutElastic'
      }).velocity({
        translateX: 490 - translateSize / 2 - 160,
        translateY: 300 - translateSize / 2 + 160
      }, {
        duration: 20 * this.dur,
        delay: 200 * this.s,
        easing: 'linear'
      }).velocity({
        translateX: 490 - translateSize / 2 - 150,
        translateY: 300 - translateSize / 2 + 650,
        rotateZ: -120,
        transformOrigin: '50%'
      }, {
        duration: 36 * this.dur,
        easing: 'linear'
      });
      return this.$creamTriangle2.velocity({
        rotateX: 90
      }, {
        duration: 800 * this.s,
        delay: this.start + 1000 * this.s,
        easing: 'easeOutBounce',
        begin: (function(_this) {
          return function() {
            return _this.$creamTriangle2.css({
              transformOrigin: '50% 100%'
            });
          };
        })(this)
      });
    };

    return Main;

  })();

  new Main;

}).call(this);
