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
      this.splash({
        delayForSplash: delayForSplash,
        splash1: this.$bottomSplash1,
        splash2: this.$bottomSplash2
      });
      setTimeout((function(_this) {
        return function() {
          return _this.splash({
            delayForSplash: delayForSplash,
            splash1: _this.$topSplash1,
            splash2: _this.$topSplash2,
            isSecond: true
          });
        };
      })(this), 775 * this.s);
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

    Fish.prototype.splash = function(o) {
      var bubbleRadius;
      bubbleRadius = 20;
      o.splash1.children().each((function(_this) {
        return function(i, item) {
          var $item;
          $item = $(item);
          if (i > 5 && i < 12) {
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
              delay: h.rand(50, 100) * _this.s,
              complete: function() {
                return $item.hide();
              }
            });
          } else {
            $item.velocity({
              translateX: h.rand(-bubbleRadius, bubbleRadius),
              translateY: h.rand(0, bubbleRadius),
              r: h.rand(15, 20)
            }, {
              duration: 200 * _this.s + h.rand(50, 100) * _this.s,
              delay: h.rand(50, 150) * _this.s + o.delayForSplash * _this.s + _this.delay
            });
            return $item.velocity({
              translateX: 0,
              translateY: 0,
              r: 0
            }, {
              duration: 800 * _this.s,
              complete: function() {
                return $item.hide();
              }
            });
          }
        };
      })(this));
      return o.splash2.children().each((function(_this) {
        return function(i, item) {
          var $item;
          $item = $(item);
          $item.velocity({
            translateX: h.rand(-bubbleRadius, bubbleRadius),
            translateY: h.rand(-bubbleRadius, 0),
            r: h.rand(10, 15)
          }, {
            duration: 300 * _this.s,
            delay: h.rand(50, 150) * _this.s + o.delayForSplash * _this.s + _this.delay
          });
          return $item.velocity({
            translateX: 0,
            translateY: 0,
            r: 0,
            rotateZ: h.rand(-100, 100)
          }, {
            duration: 800 * _this.s,
            complete: function() {
              return $item.hide();
            }
          });
        };
      })(this));
    };

    return Fish;

  })();

  window.Fish = Fish;

}).call(this);
