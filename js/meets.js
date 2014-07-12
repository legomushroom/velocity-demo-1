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
      this.$meets = $('#js-meets');
      this.$meets.velocity({
        scale: 50,
        translateX: -1280,
        translateY: -200
      }, {
        duration: 1
      });
      this.$rightButton = $('#js-right-button');
      this.$leftButton = $('#js-left-button');
      this.$buttons = $('#js-right-button, #js-left-button');
      this.$rightFist = $('#js-right-fist');
      this.$leftFist = $('#js-left-fist');
      this.$circle = $('#js-circle');
      this.$burst = $('#js-meets-burst');
      this.$rightFistWrapper = $('#js-right-fist-wrapper');
      return this.$leftFistWrapper = $('#js-left-fist-wrapper');
    };

    Meets.prototype.run = function() {
      var bumpDuration, fistAngle, fistDelay, fistDuration, fistDuration2, fistX;
      bumpDuration = h.time(400);
      this.$leftHand.velocity({
        translateX: 0
      }, {
        duration: bumpDuration,
        easing: 'ease-in',
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
        easing: 'ease-in'
      });
      this.$rightShirt.velocity({
        translateX: 0
      }, {
        duration: bumpDuration,
        easing: 'ease-in'
      });
      this.$meets.velocity({
        scale: 1,
        translateX: 0,
        translateY: 0,
        rotateZ: 0
      }, {
        duration: h.time(800),
        delay: this.delay + h.time(100),
        easing: 'ease-in',
        complete: (function(_this) {
          return function() {};
        })(this)
      });
      this.$leftShirt.velocity({
        translateX: 0
      }, {
        duration: bumpDuration,
        easing: 'ease-in',
        complete: (function(_this) {
          return function() {
            var translate;
            _this.$dogsPattern.velocity({
              translateX: -150,
              translateY: -150
            }, {
              duration: h.time(5000),
              easing: 'linear'
            });
            _this.$rightButton.show();
            _this.$leftButton.show();
            translate = 5;
            _this.$sleeves.css({
              'transform-origin': 'center center'
            });
            _this.$sleeves.velocity({
              translateX: h.rand(-translate, translate),
              translateY: h.rand(-translate, translate),
              rotateZ: h.rand(-25, 25)
            }, {
              duration: 1,
              delay: h.time(0)
            }).velocity({
              translateX: 0,
              translateY: 0,
              rotateZ: 0
            }, {
              easing: 'easeOutElastic'
            });
            translate = 5;
            _this.$shirts.css({
              'transform-origin': 'center center'
            });
            _this.$shirts.velocity({
              translateY: -translate
            }, {
              duration: 1
            }).velocity({
              translateX: 0,
              translateY: 0
            }, {
              easing: 'easeOutElastic'
            });
            translate = 5;
            return _this.$buttons.velocity({
              translateY: translate
            }, {
              duration: 1
            }).velocity({
              translateX: 0,
              translateY: 0
            }, {
              easing: 'easeOutElastic'
            });
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
        delay: fistDelay,
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
        delay: fistDelay,
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
        delay: fistDelay,
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
        delay: fistDelay,
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
            delay: _this.delay + h.time(450),
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
