(function() {
  var Tribits;

  Tribits = (function() {
    function Tribits(o) {
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

    Tribits.prototype.vars = function() {
      this.delay = this.o.delay || 0;
      this.s = 1 * h.time(1);
      this.$bits1 = $('#js-tri-bits1');
      this.$bits2 = $('#js-tri-bits2');
      return this.$bits3 = $('#js-tri-bits3');
    };

    Tribits.prototype.run = function() {
      this.runBits1();
      this.runBits2();
      return this.runBits3();
    };

    Tribits.prototype.runBits3 = function() {
      return this.$bits3.children().each((function(_this) {
        return function(i, bit) {
          var $bit;
          $bit = $(bit);
          $bit.css({
            'transform-origin': 'center center'
          });
          return $bit.velocity({
            translateY: 800 + h.rand(-150, 150),
            translateX: -800 + h.rand(-150, 150),
            rotateZ: h.rand(-600, 600)
          }, {
            duration: 150 * _this.s,
            delay: h.rand(0, 15) * _this.s,
            easing: 'ease-in',
            begin: function() {
              return $bit.show();
            }
          });
        };
      })(this));
    };

    Tribits.prototype.runBits2 = function() {
      return this.$bits2.children().each((function(_this) {
        return function(i, bit) {
          var $bit;
          $bit = $(bit);
          $bit.css({
            'transform-origin': 'center center'
          });
          return $bit.velocity({
            translateY: -600 + h.rand(-150, 150),
            translateX: 600 + h.rand(-150, 150),
            rotateZ: h.rand(-600, 600)
          }, {
            duration: 150 * _this.s,
            delay: h.rand(0, 25) * _this.s,
            easing: 'ease-in',
            begin: function() {
              return $bit.show();
            }
          });
        };
      })(this));
    };

    Tribits.prototype.runBits1 = function() {
      return this.$bits1.children().each((function(_this) {
        return function(i, bit) {
          var $bit, $child, dur;
          $bit = $(bit);
          dur = 1400 * _this.s + h.rand(0, 200) * _this.s;
          $bit.css({
            'transform-origin': 'center center'
          }).velocity({
            translateY: -320,
            translateX: h.rand(0, -50),
            rotateZ: h.rand(-950, 950)
          }, {
            duration: 1
          }).velocity({
            translateY: 0,
            rotateZ: 0,
            translateX: 0
          }, {
            easing: 'easeOutBounce',
            duration: dur,
            delay: h.rand(0, 200) * _this.s,
            begin: function() {
              return $bit.show();
            }
          });
          $child = $bit.children();
          return $child.css({
            'transform-origin': 'center center'
          }).velocity({
            translateX: -280
          }, {
            duration: 1
          }).velocity({
            translateY: 0,
            translateX: h.rand(-50, 50)
          }, {
            duration: dur + 300 * _this.s,
            easing: 'ease-out',
            begin: function() {
              return $child.show();
            }
          });
        };
      })(this));
    };

    return Tribits;

  })();

  window.Tribits = Tribits;

}).call(this);
