(function() {
  var Fish;

  Fish = (function() {
    function Fish(o) {
      this.o = o != null ? o : {};
      this.vars();
      this.run();
    }

    Fish.prototype.vars = function() {
      this.delay = this.o.delay || 0;
      this.s = 1 * h.time(1);
      this.$bottomSplash1 = $('#js-bottom-splash1');
      this.$bottomSplash2 = $('#js-bottom-splash2');
      this.$topSplash1 = $('#js-top-splash1');
      this.$topSplash2 = $('#js-top-splash2');
      this.$scene = $('#js-fish-scene');
      this.$fish = $('#js-fish');
      this.$fishEntire = $('#js-fish-scene');
      this.$fish.css({
        'transform-origin': 'center center'
      });
      this.$fish.velocity({
        translateX: 35,
        translateY: 390
      }, {
        duration: 1
      });
      this.$shadow = $('#js-fish-shadow');
      this.$shadow.css({
        'transform-origin': 'center center'
      });
      this.$shadow.velocity({
        translateX: 45,
        translateY: 390
      }, {
        duration: 1
      });
      return this.$fishW = $('#js-fish-wrapper');
    };

    Fish.prototype.run = function() {
      var delayForSplash;
      delayForSplash = 100;
      this.splash();
      this.$fish.velocity({
        translateX: 30,
        translateY: -150
      }, {
        duration: 1600 * this.s,
        easing: 'ease-in-out',
        delay: 100 * this.s + delayForSplash * this.s + this.delay,
        begin: (function(_this) {
          return function() {
            return _this.$fishEntire.show();
          };
        })(this)
      });
      return this.$shadow.velocity({
        translateX: 40,
        translateY: 200,
        scale: .65,
        opacity: .05
      }, {
        duration: 800 * this.s,
        easing: 'ease-in',
        delay: 100 * this.s + delayForSplash * this.s + this.delay
      }).velocity({
        translateX: 30,
        translateY: -150,
        scale: 1,
        opacity: .2
      }, {
        duration: 600 * this.s,
        easing: 'ease-out'
      });
    };

    Fish.prototype.splash = function() {
      var bubbleRadius;
      this.$splash1 = $('#js-clip-splash1');
      this.$splash1Top = $('#js-clip-top-splash1');
      this.$splash1.css({
        'transform-origin': '78px 392px'
      });
      this.$splash1.velocity({
        scale: 0
      }, {
        duration: 1
      }).velocity({
        scale: 1
      }, {
        duration: 400 * this.s,
        delay: this.delay + 200 * this.s,
        easing: 'linear'
      }).velocity({
        scale: 0
      }, {
        duration: 500 * this.s,
        easing: 'linear'
      });
      this.$splash1Top.css({
        'transform-origin': '478px 994px'
      });
      this.$splash1Top.velocity({
        scale: 0
      }, {
        duration: 1
      }).velocity({
        scale: 1
      }, {
        duration: 400 * this.s,
        delay: this.delay + 200 * this.s,
        easing: 'linear'
      }).velocity({
        scale: 0,
        translateY: -20
      }, {
        duration: 500 * this.s,
        easing: 'linear'
      });
      this.$splash2 = $('#js-clip-splash2');
      this.$splash2Top = $('#js-clip-top-splash2');
      this.$splash2.css({
        'transform-origin': '80px 97px'
      });
      this.$splash2.velocity({
        scale: 0
      }, {
        duration: 1
      }).velocity({
        scale: 1
      }, {
        duration: 200 * this.s,
        delay: this.delay + 950 * this.s,
        easing: 'linear'
      }).velocity({
        scale: 0
      }, {
        duration: 300 * this.s,
        easing: 'linear'
      });
      this.$splash2Top.css({
        'transform-origin': '480px 740px'
      });
      this.$splash2Top.velocity({
        scale: 0
      }, {
        duration: 1
      }).velocity({
        scale: 1,
        rotateZ: 10
      }, {
        duration: 125 * this.s,
        delay: this.delay + 930 * this.s,
        easing: 'linear'
      }).velocity({
        scale: 0
      }, {
        duration: 400 * this.s,
        easing: 'linear'
      });
      this.$topSplash = $('#js-top-splash');
      bubbleRadius = 20;
      this.$topSplash.children().each((function(_this) {
        return function(i, item) {
          var $item;
          $item = $(item);
          $item.velocity({
            translateX: h.rand(-bubbleRadius, bubbleRadius),
            translateY: h.rand(0, bubbleRadius),
            r: 10
          }, {
            duration: 500 * _this.s,
            delay: _this.delay + 700 * _this.s
          });
          return $item.velocity({
            translateX: h.rand(-5 * bubbleRadius, 5 * bubbleRadius),
            translateY: h.rand(-5 * bubbleRadius, 5 * bubbleRadius),
            r: 0
          }, {
            duration: 500 * _this.s,
            delay: h.rand(50, 100) * _this.s
          });
        };
      })(this));
      this.$bottomSplash = $('#js-bottom-splash');
      bubbleRadius = 20;
      return this.$bottomSplash.children().each((function(_this) {
        return function(i, item) {
          var $item;
          $item = $(item);
          $item.velocity({
            translateX: h.rand(-bubbleRadius, bubbleRadius),
            translateY: h.rand(0, bubbleRadius),
            r: 10
          }, {
            duration: 300 * _this.s,
            delay: _this.delay
          });
          return $item.velocity({
            translateX: h.rand(-5 * bubbleRadius, 5 * bubbleRadius),
            translateY: h.rand(-5 * bubbleRadius, 5 * bubbleRadius),
            r: 0
          }, {
            duration: 800 * _this.s,
            delay: h.rand(50, 100) * _this.s
          });
        };
      })(this));
    };

    return Fish;

  })();

  window.Fish = Fish;

}).call(this);
