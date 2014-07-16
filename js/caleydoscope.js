(function() {
  var Caleydoscope;

  Caleydoscope = (function() {
    function Caleydoscope(o) {
      this.o = o != null ? o : {};
      this.vars();
      this.run();
    }

    Caleydoscope.prototype.vars = function() {
      this.s = h.time(1);
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
      return this.delay = this.o.delay || 0;
    };

    Caleydoscope.prototype.run = function() {
      var $mask1, $paths, caleydDelay1;
      $mask1 = $('#js-c-mask1');
      caleydDelay1 = 100 * this.s;
      $mask1.velocity({
        r: 75
      }, {
        delay: this.delay + 1800 * this.s + caleydDelay1,
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
            strokeDashoffset: length
          }, {
            duration: 1
          }).velocity({
            opacity: 1,
            strokeDashoffset: 0
          }, {
            duration: 1000 * _this.s + h.rand(0, 100) * _this.s,
            delay: _this.delay + 0 * _this.s + h.rand(0, 500) * _this.s,
            easing: 'linear'
          }).velocity({
            rotateZ: h.rand(25, 120),
            translateX: h.rand(-200, 200),
            translateY: h.rand(-200, 200),
            scale: 0
          }, {
            duration: 500 * _this.s + h.rand(0, 100) * _this.s,
            delay: caleydDelay1 + h.rand(0, 200) * _this.s + h.time(1000)
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
            delay: _this.delay + 1350 * _this.s + h.rand(0, 500) * _this.s,
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
            delay: h.rand(1, 150) * _this.s + i * 150 * _this.s + _this.delay,
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
        easing: 'linear',
        delay: this.delay
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
        easing: 'ease',
        delay: this.delay
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
        easing: 'ease',
        delay: this.delay
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
        easing: 'ease',
        delay: this.delay
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
        easing: 'ease',
        delay: this.delay
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
        easing: 'ease',
        delay: this.delay
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
        easing: 'ease',
        delay: this.delay
      });
    };

    return Caleydoscope;

  })();

  window.Caleydoscope = Caleydoscope;

}).call(this);
