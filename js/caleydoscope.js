(function() {
  var Caleydoscope;

  Caleydoscope = (function() {
    function Caleydoscope(o) {
      this.o = o != null ? o : {};
      this.vars();
      $('<div />').velocity({
        p: 1
      }, {
        duration: this.delay,
        complete: (function(_this) {
          return function() {
            _this.$caleydoscopeEntire.show();
            return _this.run();
          };
        })(this)
      });
    }

    Caleydoscope.prototype.vars = function() {
      this.s = 1 * h.time(1);
      this.$velocityText = $('#js-velocity-text');
      this.$blow = $('#js-c-blow');
      this.$caleydoscopePattern = $('#caleydoscope-pattern');
      this.$caleydoscopeImage = $('#js-caleydoscope-image');
      this.$caleydoscopeImage2 = $('#js-caleydoscope-image2');
      this.$caleydoscopeImage3 = $('#js-caleydoscope-image3');
      this.$caleydoscopeImage4 = $('#js-caleydoscope-image4');
      this.$caleydoscopeImage5 = $('#js-caleydoscope-image5');
      this.$caleydoscopeImage6 = $('#js-caleydoscope-image6');
      this.$caleydoscope = $('#js-caleydoscope');
      this.$caleydoscopeWrap = $('#js-caleydoscope-wrapper');
      this.$caleydoscopeEntire = $('#js-entire-caleydoscope');
      this.$burst = $('#js-caleydoscope-burst');
      this.$burst2 = $('#js-caleydoscope-burst2');
      return this.delay = this.o.delay || 0;
    };

    Caleydoscope.prototype.run = function() {
      var $mask1, $paths, caleydDelay1, len;
      $mask1 = $('#js-c-mask1');
      caleydDelay1 = 100 * this.s;
      this.$caleydoscopeEntire;
      len = 20;
      this.$burst.children().each((function(_this) {
        return function(i, item) {
          var $item;
          $item = $(item);
          return $item.velocity({
            strokeDashoffset: 0
          }, {
            delay: 2300 * _this.s,
            duration: 200 * _this.s
          }).velocity({
            strokeDashoffset: -len
          }, {
            duration: 200 * _this.s
          });
        };
      })(this));
      len = 10;
      this.$burst2.children().each((function(_this) {
        return function(i, item) {
          var $item;
          $item = $(item);
          return $item.velocity({
            strokeDashoffset: 0
          }, {
            delay: 2500 * _this.s,
            duration: 200 * _this.s
          }).velocity({
            strokeDashoffset: -len
          }, {
            duration: 200 * _this.s
          });
        };
      })(this));
      $mask1.velocity({
        r: 75
      }, {
        delay: 1800 * this.s + caleydDelay1,
        duration: 600 * this.s
      });
      this.$velocityText.children().each((function(_this) {
        return function(i, item) {
          var $item, length, size, x;
          $item = $(item);
          $item.css({
            'transform-origin': 'center center'
          });
          length = $item[0].getTotalLength();
          size = 14;
          x = i < 5 ? size * (5 - i) : -size * i;
          return $item.velocity({
            strokeDasharray: length,
            strokeDashoffset: length,
            rotateY: i % 1 === 0 ? 90 : -90,
            opacity: 0
          }, {
            duration: 1
          }).velocity({
            opacity: 1,
            strokeDashoffset: 0,
            rotateY: 0
          }, {
            duration: 1000 * _this.s + h.rand(0, 100) * _this.s,
            delay: 600 * _this.s + h.rand(0, 500) * _this.s,
            easing: 'linear',
            begin: function() {
              return _this.$velocityText.show();
            }
          }).velocity({
            rotateZ: h.rand(25, 120),
            translateX: h.rand(-200, 200),
            translateY: h.rand(-200, 200),
            scale: 0
          }, {
            duration: 500 * _this.s + h.rand(0, 100) * _this.s,
            delay: caleydDelay1 + h.rand(0, 200) * _this.s + h.time(1000),
            complete: function() {
              return $item.hide();
            }
          });
        };
      })(this));
      this.$blow.children().each((function(_this) {
        return function(i, item) {
          var $item;
          $item = $(item);
          return $item.velocity({
            r: i === 0 ? 75 : h.rand(10, 50)
          }, {
            delay: 1350 * _this.s + h.rand(0, 500) * _this.s,
            duration: 400 * _this.s + h.rand(0, 300) * _this.s
          }).velocity({
            translateY: h.rand(-150, 150),
            translateX: h.rand(-150, 150),
            r: 0,
            rotateZ: h.rand(-100, 100)
          }, {
            duration: 800 * _this.s,
            delay: 400 * _this.s + caleydDelay1 + h.rand(0, 300) * _this.s,
            begin: function() {
              _this.$blow.css({
                'opacity': 1
              });
              return $mask1.css({
                'opacity': 0
              });
            },
            complete: function() {
              return $item.hide();
            }
          });
        };
      })(this));
      $paths = this.$caleydoscope.find('path');
      $paths.each((function(_this) {
        return function(i, item) {
          var $path, length;
          $path = $(item);
          length = $path[0].getTotalLength();
          return $path.velocity({
            opacity: 1
          }, {
            delay: h.rand(1, 150) * _this.s + i * 150 * _this.s,
            duration: 900
          });
        };
      })(this));
      this.$caleydoscope.css({
        'transform-origin': 'center center'
      });
      this.$caleydoscope.velocity({
        rotateZ: 720
      }, {
        duration: 12000 * this.s,
        easing: 'linear'
      });
      this.$caleydoscopeImage.css({
        'transform-origin': 'center center'
      });
      this.$caleydoscopeImage.velocity({
        translateX: -150,
        translateY: -150
      }, {
        loop: 0,
        duration: 5000,
        easing: 'ease'
      });
      this.$caleydoscopeImage2.css({
        'transform-origin': 'center center'
      });
      this.$caleydoscopeImage2.velocity({
        translateX: 150,
        translateY: 150
      }, {
        loop: 0,
        duration: 5000,
        easing: 'ease'
      });
      this.$caleydoscopeImage3.css({
        'transform-origin': 'center center'
      });
      this.$caleydoscopeImage3.velocity({
        translateX: -150,
        translateY: -150
      }, {
        loop: 0,
        duration: 5000,
        easing: 'ease'
      });
      this.$caleydoscopeImage4.css({
        'transform-origin': 'center center'
      });
      this.$caleydoscopeImage4.velocity({
        translateX: 150,
        translateY: 150
      }, {
        loop: 0,
        duration: 5000,
        easing: 'ease'
      });
      this.$caleydoscopeImage5.css({
        'transform-origin': 'center center'
      });
      this.$caleydoscopeImage5.velocity({
        translateX: -150,
        translateY: -150
      }, {
        loop: 0,
        duration: 5000,
        easing: 'ease'
      });
      this.$caleydoscopeImage6.css({
        'transform-origin': 'center center'
      });
      return this.$caleydoscopeImage6.velocity({
        translateX: 150,
        translateY: 150
      }, {
        loop: 0,
        duration: 5000,
        easing: 'ease'
      });
    };

    return Caleydoscope;

  })();

  window.Caleydoscope = Caleydoscope;

}).call(this);
