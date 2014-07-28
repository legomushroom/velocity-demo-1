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
      this.s = 1 * h.time(1);
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
      this.rightShirtX1 = parseInt(this.$rightShirt.attr('x'), 10);
      this.rightShirtX2 = parseInt(this.$rightShirt.attr('x2'), 10);
      this.$shirtWalls = $('.js-shirt-wall');
      this.$firework = $('#js-firework');
      this.$leftShirt = $('#js-left-shirt');
      this.leftShirtX1 = parseInt(this.$leftShirt.attr('x'), 10);
      this.leftShirtX2 = parseInt(this.$leftShirt.attr('x2'), 10);
      this.$meets = $('#js-meets');
      this.$blow = $('#js-meets-blow');
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
      this.$entireColeydoscope = $('#js-entire-caleydoscope');
      this.$rightFistWrapper = $('#js-right-fist-wrapper');
      this.$leftFistWrapper = $('#js-left-fist-wrapper');
      return this.bumpDelay = h.time(600);
    };

    Meets.prototype.run = function() {
      var $childs, bumpDuration, deltaX, deltaX2, ffLen, fistAngle, fistDelay, fistDuration, fistDuration2, fistX;
      bumpDuration = h.time(400);
      this.$leftHand.velocity({
        translateX: 0
      }, {
        duration: bumpDuration,
        easing: 'ease-in',
        delay: this.delay + this.bumpDelay,
        begin: (function(_this) {
          return function() {
            _this.$leftHand.css({
              'opacity': 1
            });
            return _this.$rightHand.css({
              'opacity': 1
            });
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
      this.isShirtWalls = false;
      deltaX2 = this.rightShirtX2 - this.rightShirtX1;
      this.rightShirt = this.$rightShirt[0];
      this.$rightShirt.velocity({
        p: 0
      }, {
        duration: bumpDuration,
        delay: this.delay + this.bumpDelay,
        easing: 'ease-in',
        progress: (function(_this) {
          return function($els, proc) {
            _this.rightShirt.setAttribute('x', _this.rightShirtX1 + deltaX2 * proc);
            !_this.isShirtWalls && _this.$shirtWalls.show();
            return _this.isShirtWalls = true;
          };
        })(this)
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
            translateY: y + h.rand(-50, 50),
            rotateZ: h.rand(-360, 360)
          }, {
            duration: h.time(1000)
          });
        };
      })(this));
      deltaX = this.leftShirtX1 - this.leftShirtX2;
      this.leftShirt = this.$leftShirt[0];
      this.$leftShirt.velocity({
        p: 0
      }, {
        duration: bumpDuration,
        easing: 'ease-in',
        delay: this.delay + this.bumpDelay,
        progress: (function(_this) {
          return function($els, proc) {
            return _this.leftShirt.setAttribute('x', _this.leftShirtX1 - deltaX * proc);
          };
        })(this),
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
      fistX = 40;
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
        duration: 1,
        delay: this.delay + fistDelay + this.bumpDelay
      }).velocity({
        translateX: 0
      }, {
        duration: fistDuration2,
        easing: 'easeOutElastic'
      });
      this.$leftFistWrapper.velocity({
        translateX: -fistX
      }, {
        duration: 1,
        delay: this.delay + fistDelay + this.bumpDelay
      }).velocity({
        translateX: 0
      }, {
        duration: fistDuration2,
        easing: 'easeOutElastic',
        begin: (function(_this) {
          return function() {
            return _this.$entireColeydoscope.hide();
          };
        })(this)
      });
      this.$burst.children().each((function(_this) {
        return function(i, item) {
          var $item;
          $item = $(item);
          return $item.velocity({
            strokeDashoffset: 0
          }, {
            delay: _this.delay + h.time(500) + _this.bumpDelay,
            duration: h.time(150)
          }).velocity({
            strokeDashoffset: -36
          }, {
            duration: h.time(150)
          });
        };
      })(this));
      this.$smoke = $('#js-smoke');
      new Spriter({
        sprites: this.$smoke.children(),
        duration: 400 * this.s,
        delay: this.delay + 400 * this.s + this.bumpDelay
      });
      this.$burst.css({
        'transform-origin': '640px 450px '
      });
      this.$burst.velocity({
        rotateZ: 20
      }, {
        delay: this.delay + h.time(400) + this.bumpDelay,
        duration: 600 * this.s
      });
      this.$blow.css({
        'transform-origin': '640px 450px '
      });
      this.$blow.velocity({
        rotateZ: 30
      }, {
        delay: this.delay + h.time(500) + this.bumpDelay,
        duration: 600 * this.s
      });
      $childs = this.$firework.children();
      ffLen = $childs.length;
      $childs.css({
        'transform-origin': '50% 50%'
      });
      $childs.velocity({
        scale: .75
      }, {
        duration: 1
      });
      $childs.each((function(_this) {
        return function(i, child) {
          var $line, currLen, len;
          $line = $(child);
          len = $line[0].getTotalLength();
          currLen = i === ffLen - 1 ? len : -len;
          $line.velocity({
            strokeDashoffset: currLen,
            strokeDasharray: len
          }, {
            duration: 1
          });
          $line.velocity({
            strokeDashoffset: 0,
            strokeWidth: 5
          }, {
            duration: 150 * _this.s,
            delay: _this.delay + h.time(400) + _this.bumpDelay + h.rand(0, 300) * _this.s,
            begin: function() {
              return i === 0 && _this.$firework.show();
            }
          });
          return $line.velocity({
            strokeDashoffset: i === ffLen - 1 ? -len : len,
            strokeWidth: 0
          }, {
            duration: 150 * _this.s
          });
        };
      })(this));
      return this.$blow.children().each((function(_this) {
        return function(i, item) {
          var $item, data, x2, y2;
          $item = $(item);
          data = $item.data();
          x2 = data.x;
          y2 = data.y;
          return $item.velocity({
            r: 0,
            translateX: x2,
            translateY: y2
          }, {
            delay: _this.delay + h.time(500) + _this.bumpDelay,
            duration: 600 * _this.s,
            begin: function() {
              if (i === 0) {
                return _this.$blow.show();
              }
            }
          });
        };
      })(this));
    };

    return Meets;

  })();

  window.Meets = Meets;

}).call(this);
