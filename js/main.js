(function() {
  var Main;

  Main = (function() {
    function Main() {
      this.vars();
      this.run();
    }

    Main.prototype.vars = function() {
      this.s = 1;
      this.$pattern = $('#flowers-cream-pattern');
      this.$dust = $('#js-dust');
      this.$blow = $('#js-c-blow');
      this.$caleydoscopePattern = $('#caleydoscope-pattern');
      this.$caleydoscopeImage = $('#js-caleydoscope-image');
      this.$caleydoscopeImage2 = $('#js-caleydoscope-image2');
      this.$caleydoscopeImage3 = $('#js-caleydoscope-image3');
      this.$caleydoscopeImage4 = $('#js-caleydoscope-image4');
      this.$caleydoscopeImage5 = $('#js-caleydoscope-image5');
      this.$caleydoscopeImage6 = $('#js-caleydoscope-image6');
      this.$caleydoscope = $('#js-caleydoscope');
      this.$owlsPattern2 = $('#js-owls-image2');
      this.$velocityText = $('#js-velocity-text');
      this.$owlsImage = $('#js-owls-image');
      this.$flowersCream = $('#js-flowers-cream');
      this.$sliceLine = $('#js-slice-line');
      this.$divSparks = $('#js-div-sparks');
      this.$creamTriangle1 = $('#js-cream-triangle1').css({
        'transform': 'translate(490px,300px)'
      });
      this.$creamTriangle2 = $('#js-cream-triangle2');
      this.$creamTriangles = $('#js-cream-triangles');
      return this.$creamTriangleWrapper = $('#js-cream-triangle2-wrapper').css({
        'transform': 'translate(490px,300px)'
      });
    };

    Main.prototype.run = function() {
      var translateSize;
      this.start = 0 * this.s;
      this.dur = this.start + 300 * this.s;
      this.$flowersCream.velocity({
        y: 300
      }, {
        duration: this.dur,
        delay: this.start,
        easing: 'ease-in'
      });
      this.start = this.start + 275 * this.s;
      this.dur = 800 * this.s;
      new Spriter({
        sprites: this.$dust.children(),
        duration: this.dur,
        delay: this.start
      });
      this.start = this.start + this.dur - 200 * this.s;
      this.dur = 400 * this.s;
      this.$sliceLine.velocity({
        rotateZ: 315,
        scale: 1,
        opacity: 100,
        width: 600,
        transformOrigin: '50% 50%'
      }, {
        delay: this.start,
        duration: this.dur
      });
      this.start = this.start + this.dur + 200 * this.s;
      this.dur = 30 * this.s;
      translateSize = 20;
      this.$creamTriangles.velocity({
        translateY: 2 * translateSize,
        translateX: 2 * translateSize
      }, {
        duration: this.dur,
        delay: this.start,
        begin: (function(_this) {
          return function() {
            _this.$sliceLine.hide();
            _this.$creamTriangles.show();
            return _this.$flowersCream.hide();
          };
        })(this)
      }).velocity({
        translateY: 0,
        translateX: 0
      }, {
        duration: 10 * this.dur,
        easing: 'easeOutElastic'
      });
      this.$creamTriangle1.css({
        'transform-origin': '50% 50%'
      });
      this.$creamTriangle1.velocity({
        translateX: 490,
        translateY: 300
      }, {
        duration: 1
      }).velocity({
        translateX: 490 - translateSize,
        translateY: 300 + translateSize / 2
      }, {
        duration: 6 * this.dur,
        delay: this.start - 400 * this.s,
        easing: 'easeOutElastic'
      }).velocity({
        translateX: 490 - translateSize / 2 - 160,
        translateY: 300 - translateSize / 2 + 160
      }, {
        duration: 20 * this.dur,
        delay: 200 * this.s,
        easing: 'linear'
      }).velocity({
        translateX: 490 - translateSize / 2 - 150,
        translateY: 300 - translateSize / 2 + 650,
        rotateZ: -120,
        transformOrigin: '50%'
      }, {
        duration: 36 * this.dur,
        easing: 'linear'
      });
      this.$divSparks.velocity({
        translateX: 235 - translateSize / 8,
        translateY: 50 + translateSize / 8
      }, {
        duration: 3 * this.dur,
        delay: this.start,
        easing: 'easeOutElastic',
        begin: (function(_this) {
          return function() {
            return _this.$divSparks.show();
          };
        })(this)
      });
      this.start = this.start - 50 * this.s;
      this.dur = 100 * this.s;
      this.$divSparks.children().each((function(_this) {
        return function(i, item) {
          var $item, length;
          $item = $(item);
          length = $item[0].getTotalLength();
          return $item.velocity({
            'strokeDasharray': length
          }, {
            duration: 1
          }).velocity({
            'strokeDashoffset': i === 3 ? -length : length
          }, {
            delay: _this.start + h.rand(1, 50) * _this.s + i * 20 * _this.s,
            duration: _this.dur,
            begin: function() {
              return _this.$divSparks.show();
            }
          });
        };
      })(this));
      new Waves({
        delay: h.time(2300)
      });
      return this.caleydoscope(5000 * this.s);
    };

    Main.prototype.caleydoscope = function(delay) {
      var $mask1, $paths, caleydDelay1;
      $mask1 = $('#js-c-mask1');
      caleydDelay1 = 100 * this.s;
      $mask1.velocity({
        r: 50
      }, {
        delay: delay + 1900 * this.s + caleydDelay1,
        duration: 800 * this.s,
        easing: 'easeOutElastic'
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
            scale: 0
          }, {
            duration: 1
          }).velocity({
            opacity: 100,
            strokeDashoffset: 0,
            scale: 1
          }, {
            duration: 1000 * _this.s + h.rand(0, 100) * _this.s,
            delay: delay + 2000 * _this.s + h.rand(0, 500) * _this.s,
            easing: 'easeOutElastic'
          }).velocity({
            rotateZ: h.rand(25, 120),
            translateX: h.rand(-200, 200),
            translateY: h.rand(-200, 200),
            scale: 0
          }, {
            duration: 500 * _this.s + h.rand(0, 100) * _this.s,
            delay: caleydDelay1 + h.rand(0, 200) * _this.s
          });
        };
      })(this));
      this.$blow.children().each((function(_this) {
        return function(i, item) {
          var $item;
          $item = $(item);
          return $item.velocity({
            r: i === 0 ? 50 : h.rand(10, 50)
          }, {
            delay: delay + 2000 * _this.s + h.rand(0, 500) * _this.s,
            duration: 400 * _this.s + h.rand(0, 100) * _this.s
          }).velocity({
            translateY: h.rand(-150, 150),
            translateX: h.rand(-150, 150),
            r: 0
          }, {
            duration: 800 * _this.s,
            delay: 400 * _this.s + caleydDelay1 + h.rand(0, 300) * _this.s,
            begin: function() {
              _this.$blow.css({
                'opacity': 1
              });
              return $mask1.hide();
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
            delay: h.rand(1, 150) * _this.s + i * 150 * _this.s + delay,
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
        duration: 12000,
        easing: 'linear',
        delay: delay
      });
      this.$caleydoscopeImage.css({
        'transform-origin': 'center center'
      });
      this.$caleydoscopeImage.velocity({
        translateX: -150,
        translateY: -150
      }, {
        loop: 2,
        duration: 5000,
        easing: 'ease',
        delay: delay
      });
      this.$caleydoscopeImage2.css({
        'transform-origin': 'center center'
      });
      this.$caleydoscopeImage2.velocity({
        translateX: 150,
        translateY: 150
      }, {
        loop: 2,
        duration: 5000,
        easing: 'ease',
        delay: delay
      });
      this.$caleydoscopeImage3.css({
        'transform-origin': 'center center'
      });
      this.$caleydoscopeImage3.velocity({
        translateX: -150,
        translateY: -150
      }, {
        loop: 2,
        duration: 5000,
        easing: 'ease',
        delay: delay
      });
      this.$caleydoscopeImage4.css({
        'transform-origin': 'center center'
      });
      this.$caleydoscopeImage4.velocity({
        translateX: 150,
        translateY: 150
      }, {
        loop: 2,
        duration: 5000,
        easing: 'ease',
        delay: delay
      });
      this.$caleydoscopeImage5.css({
        'transform-origin': 'center center'
      });
      this.$caleydoscopeImage5.velocity({
        translateX: -150,
        translateY: -150
      }, {
        loop: 2,
        duration: 5000,
        easing: 'ease',
        delay: delay
      });
      this.$caleydoscopeImage6.css({
        'transform-origin': 'center center'
      });
      return this.$caleydoscopeImage6.velocity({
        translateX: 150,
        translateY: 150
      }, {
        loop: 2,
        duration: 5000,
        easing: 'ease',
        delay: delay
      });
    };

    return Main;

  })();

  setTimeout((function(_this) {
    return function() {
      return new Main;
    };
  })(this), 500);

}).call(this);
