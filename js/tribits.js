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
      return this.$bits = $('#js-tri-bits1');
    };

    Tribits.prototype.run = function() {
      return this.$bits.children().each((function(_this) {
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
            delay: h.rand(0, 300) * _this.s,
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
            translateX: 0
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
