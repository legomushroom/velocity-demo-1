(function() {
  var Mushroom;

  Mushroom = (function() {
    function Mushroom(o) {
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

    Mushroom.prototype.vars = function() {
      this.delay = this.o.delay || 0;
      this.s = 1 * h.time(1);
      this.$m = $('#js-mushroom');
      this.$mEntire = $('#js-entire-mushroom');
      this.$text1 = $('#js-mush-text1');
      return this.$text2 = $('#js-mush-text2');
    };

    Mushroom.prototype.run = function() {
      var $childs, len;
      $childs = this.$m.children();
      len = $childs.length;
      $childs.each((function(_this) {
        return function(i, child) {
          var $brick;
          $brick = $(child);
          return $brick.velocity({
            translateY: h.rand(-0, -200),
            opacity: 0
          }, {
            duration: {
              duration: 1
            },
            easing: 'linear'
          }).velocity({
            translateX: 0,
            translateY: 0,
            opacity: 1
          }, {
            duration: 800 * _this.s,
            delay: (len - i - 1) * 15 * _this.s,
            easing: 'easeOutBounce',
            begin: function() {
              i === 1 && _this.$mEntire.show();
              return i === 1 && console.log('aa');
            }
          });
        };
      })(this));
      this.$text1.velocity({
        opacity: 1
      }, {
        delay: 1200 * this.s,
        duration: 800 * this.s
      });
      return this.$text2.velocity({
        opacity: 1
      }, {
        delay: 1800 * this.s,
        duration: 800 * this.s
      });
    };

    return Mushroom;

  })();

  window.Mushroom = Mushroom;

}).call(this);
