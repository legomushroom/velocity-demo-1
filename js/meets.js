(function() {
  var Meets;

  Meets = (function() {
    function Meets(o) {
      this.o = o != null ? o : {};
      this.vars();
      this.run();
    }

    Meets.prototype.vars = function() {
      this.delay = this.o.delay || 0;
      this.$leftHand = $('#js-left-hand');
      this.$leftHand.velocity({
        translateX: 500
      }, {
        duration: 1
      });
      this.$rightHand = $('#js-right-hand');
      this.$rightHand.velocity({
        translateX: 500
      }, {
        duration: 1
      });
      this.$rightShirt = $('#js-right-shirt');
      this.$rightShirt.velocity({
        translateX: 500
      }, {
        duration: 1
      });
      this.$leftShirt = $('#js-left-shirt');
      this.$leftShirt.velocity({
        translateX: -500
      }, {
        duration: 1
      });
      this.$sleeves = $('.js-sleeve');
      this.$shirts = $('.js-shirt');
      this.$dogsPattern = $('#js-space-dogs-image');
      this.$circles = $('#js-meets-circles');
      this.$rightButton = $('#js-right-button');
      this.$leftButton = $('#js-left-button');
      this.$buttons = $('#js-right-button, #js-left-button');
      this.$rightFist = $('#js-right-fist');
      this.$leftFist = $('#js-left-fist');
      this.$circle = $('#js-circle');
      this.$burst = $('#js-meets-burst');
      this.$rightFistWrapper = $('#js-right-fist-wrapper');
      this.$leftFistWrapper = $('#js-left-fist-wrapper');
      return this.bumpDelay = h.time(700);
    };

    Meets.prototype.run = function() {
      var bumpDuration, fistAngle, fistDelay, fistDuration, fistDuration2, fistX;
      bumpDuration = h.time(400);
      this.$leftHand.velocity({
        translateX: 0
      }, {
        duration: bumpDuration,
        easing: 'ease-in',
        delay: this.delay + this.bumpDelay,
        begin: (function(_this) {
          return function() {
            _this.$leftHand.show();
            return _this.$rightHand.show();
          };
        })(this)
      });
      this.$rightHand.velocity({
        translateX: 0
      }, {
        duration: bumpDuration,
        delay: this.delay + this.bumpDelay,
        easing: 'ease-in'
      });
      this.$rightShirt.velocity({
        translateX: 0
      }, {
        duration: bumpDuration,
        delay: this.delay + this.bumpDelay,
        easing: 'ease-in'
      });
      this.$circles.children().each((function(_this) {
        return function(i, item) {
          var $item, x, y;
          $item = $(item);
          x = parseFloat($item.attr('data-x'));
          y = parseFloat($item.attr('data-y'));
          $item.velocity({
            translateX: x,
            translateY: y
          }, {
            duration: 1,
            delay: _this.delay
          });
          return $item.velocity({
            r: 0,
            translateX: x + h.rand(-50, 50),
            translateY: y + h.rand(-50, 50)
          }, {
            duration: h.time(1000)
          });
        };
      })(this));
      this.$leftShirt.velocity({
        translateX: 0
      }, {
        duration: bumpDuration,
        easing: 'ease-in',
        delay: this.delay + this.bumpDelay,
        complete: (function(_this) {
          return function() {
            _this.$dogsPattern.velocity({
              translateX: -150,
              translateY: -150
            }, {
              duration: h.time(5000),
              easing: 'linear'
            });
            _this.$rightButton.show();
            return _this.$leftButton.show();
          };
        })(this)
      });
      fistX = 20;
      fistAngle = -10;
      fistDuration = h.time(700);
      fistDuration2 = h.time(700);
      fistDelay = fistDuration / 2;
      this.$rightFist.css({
        'transform-origin': 'center center'
      });
      this.$rightFist.velocity({
        rotateZ: fistAngle
      }, {
        duration: 1
      }).velocity({
        rotateZ: 0
      }, {
        duration: fistDuration,
        delay: this.delay + fistDelay + this.bumpDelay,
        easing: 'easeOutElastic'
      });
      this.$leftFist.css({
        'transform-origin': 'center center'
      });
      this.$leftFist.velocity({
        rotateZ: fistAngle
      }, {
        duration: 1
      }).velocity({
        rotateZ: 0
      }, {
        duration: fistDuration,
        delay: this.delay + fistDelay + this.bumpDelay,
        easing: 'easeOutElastic'
      });
      this.$rightFistWrapper.velocity({
        translateX: fistX
      }, {
        duration: 1
      }).velocity({
        translateX: 0
      }, {
        duration: fistDuration2,
        delay: this.delay + fistDelay + this.bumpDelay,
        easing: 'easeOutElastic'
      });
      this.$leftFistWrapper.velocity({
        translateX: fistX
      }, {
        duration: 1
      }).velocity({
        translateX: 0
      }, {
        duration: fistDuration2,
        delay: this.delay + fistDelay + this.bumpDelay,
        easing: 'easeOutElastic'
      });
      this.$circle.velocity({
        r: 150,
        strokeWidth: 0,
        opacity: 1
      }, {
        delay: this.delay + h.time(350)
      });
      return this.$burst.children().each((function(_this) {
        return function(i, item) {
          var $item;
          $item = $(item);
          return $item.velocity({
            strokeDashoffset: 0
          }, {
            delay: _this.delay + h.time(450) + _this.bumpDelay,
            duration: h.time(150)
          }).velocity({
            strokeDashoffset: -25
          }, {
            duration: h.time(150)
          });
        };
      })(this));
    };

    return Meets;

  })();

  window.Meets = Meets;

}).call(this);
