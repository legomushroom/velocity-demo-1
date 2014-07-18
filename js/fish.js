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
      this.$fish = $('#js-fish');
      this.$fish.css({
        'transform-origin': 'center center'
      });
      this.$fish.velocity({
        translateX: 35,
        translateY: 300
      }, {
        duration: 1
      });
      return this.$fishW = $('#js-fish-wrapper');
    };

    Fish.prototype.run = function() {
      var fadeRadius, position, startX, startY;
      position = this.$fishW.attr('transform').split(/translate\(|,|\)/);
      startX = parseInt(position[1], 10);
      startY = parseInt(position[2], 10);
      fadeRadius = 10;
      this.$bottomSplash.children().each((function(_this) {
        return function(i, item) {
          var $item;
          $item = $(item);
          $item.velocity({
            translateX: h.rand(-fadeRadius, fadeRadius),
            translateY: h.rand(-fadeRadius, fadeRadius),
            r: h.rand(10, 15)
          }, {
            duration: 200 * _this.s
          });
          if (i > 5 && i < 10) {
            return $item.velocity({
              translateX: h.rand(-10 * fadeRadius, 10 * fadeRadius),
              translateY: h.rand(-10 * fadeRadius, 10 * fadeRadius),
              r: 0,
              rotateZ: h.rand(-180, 180)
            }, {
              duration: 400 * _this.s
            });
          } else {
            return $item.velocity({
              translateX: 0,
              translateY: 0,
              r: 0
            }, {
              duration: 400 * _this.s
            });
          }
        };
      })(this));
      return this.$fish.velocity({
        translateX: 30,
        translateY: -150
      }, {
        duration: 1200 * this.s,
        easing: 'ease-in-out'
      });
    };

    return Fish;

  })();

  window.Fish = Fish;

}).call(this);
