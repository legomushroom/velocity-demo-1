(function() {
  var Fish;

  Fish = (function() {
    function Fish(o) {
      this.o = o != null ? o : {};
      this.vars();
      $('<div />').velocity({
        p: 1
      }, {
        duration: this.delay,
        complete: (function(_this) {
          return function() {
            return _this.run();
          };
        })(this)
      });
    }

    Fish.prototype.vars = function() {
      this.delay = this.o.delay || 0;
      this.s = 1 * h.time(1);
      this.$bottomSplash = $('#js-bottom-splash');
      this.$bottomSplash2 = $('#js-bottom-splash2');
      this.$fish = $('#js-fish');
      this.$fish.css({
        'transform-origin': 'center center'
      });
      this.$fish.velocity({
        translateX: 35,
        translateY: 390
      }, {
        duration: 1
      });
      return this.$fishW = $('#js-fish-wrapper');
    };

    Fish.prototype.run = function() {
      var bubbleRadius, delayForSplash, position, startX, startY;
      position = this.$fishW.attr('transform').split(/translate\(|,|\)/);
      startX = parseInt(position[1], 10);
      startY = parseInt(position[2], 10);
      bubbleRadius = 20;
      delayForSplash = 100;
      this.$bottomSplash.children().each((function(_this) {
        return function(i, item) {
          var $item;
          $item = $(item);
          if (i > 5 && i < 12) {
            $item.velocity({
              translateX: h.rand(-bubbleRadius, bubbleRadius),
              translateY: h.rand(0, bubbleRadius),
              r: h.rand(5, 20)
            }, {
              duration: 400 * _this.s
            });
            return $item.velocity({
              translateX: h.rand(-5 * bubbleRadius, 5 * bubbleRadius),
              translateY: h.rand(-5 * bubbleRadius, 5 * bubbleRadius),
              r: 0
            }, {
              duration: 700 * _this.s,
              delay: h.rand(50, 100) * _this.s
            });
          } else {
            $item.velocity({
              translateX: h.rand(-bubbleRadius, bubbleRadius),
              translateY: h.rand(0, bubbleRadius),
              r: h.rand(15, 20)
            }, {
              duration: 300 * _this.s + h.rand(50, 100) * _this.s,
              delay: h.rand(50, 150) * _this.s + delayForSplash * _this.s
            });
            return $item.velocity({
              translateX: 0,
              translateY: 0,
              r: 0,
              rotateZ: h.rand(-100, 100)
            }, {
              duration: 800 * _this.s
            });
          }
        };
      })(this));
      this.$bottomSplash2.children().each((function(_this) {
        return function(i, item) {
          var $item;
          $item = $(item);
          $item.velocity({
            translateX: h.rand(-bubbleRadius, bubbleRadius),
            translateY: h.rand(-bubbleRadius, 0),
            r: h.rand(10, 15)
          }, {
            duration: 300 * _this.s,
            delay: h.rand(50, 150) * _this.s + delayForSplash * _this.s
          });
          return $item.velocity({
            translateX: 0,
            translateY: 0,
            r: 0,
            rotateZ: h.rand(-100, 100)
          }, {
            duration: 800 * _this.s
          });
        };
      })(this));
      return this.$fish.velocity({
        translateX: 30,
        translateY: -150
      }, {
        duration: 2000 * this.s,
        easing: 'linear',
        delay: 100 * this.s + delayForSplash * this.s
      });
    };

    return Fish;

  })();

  window.Fish = Fish;

}).call(this);
