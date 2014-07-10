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
      this.$wave1 = $('#js-wave1');
      this.$wave1Top = $('#js-wave1-top');
      this.$wave1Top2 = $('#js-wave1-top2');
      this.wave1YStart = 1350;
      this.wave1Y = 900;
      this.$wave1Top.velocity({
        translateY: 0
      }, {
        duration: 1
      });
      this.$wave1Top2.velocity({
        rotateX: -90,
        translateY: 20
      }, {
        duration: 1
      });
      this.$wave1.velocity({
        rotateZ: -25,
        translateX: -400,
        translateY: this.wave1YStart
      }, {
        duration: 1
      });
      this.$wave2 = $('#js-wave2');
      this.$wave2Top = $('#js-wave2-top');
      this.$wave2Top2 = $('#js-wave2-top2');
      this.$wave2Top3 = $('#js-wave2-top3');
      this.$wave2Top3Rect = $('#js-wave2-top3-rect');
      this.wave2YStart = 1350;
      this.wave2Y = 400;
      this.$wave2Top.velocity({
        translateY: 0
      }, {
        duration: 1
      });
      this.$wave2Top2.velocity({
        rotateX: -90,
        translateY: 20
      }, {
        duration: 1
      });
      this.$wave2Top3.velocity({
        translateY: -20
      }, {
        duration: 1
      });
      this.$wave2.velocity({
        rotateZ: -25,
        translateX: -400,
        translateY: this.wave2YStart
      }, {
        duration: 1
      });
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
      return this.caleydoscope(50 * this.s);
    };

    Main.prototype.wave1 = function(delay) {
      var topRotateDur1, wave1Time;
      wave1Time = 1200 * this.s;
      topRotateDur1 = wave1Time / 4;
      this.$wave1.velocity({
        translateY: this.wave1Y
      }, {
        delay: delay,
        duration: wave1Time,
        easing: 'ease-out',
        begin: (function(_this) {
          return function() {
            return _this.$wave1.show();
          };
        })(this)
      }).velocity({
        translateY: this.wave1YStart
      }, {
        duration: wave1Time,
        easing: 'ease-in'
      });
      this.$wave1Top.css({
        'transform-origin': 'center bottom'
      });
      this.$wave1Top.velocity({
        rotateX: -90
      }, {
        delay: delay + wave1Time,
        duration: topRotateDur1,
        easing: 'ease-out',
        complete: (function(_this) {
          return function() {
            return _this.$wave1Top.hide();
          };
        })(this)
      });
      this.$wave1Top2.css({
        'transform-origin': 'center bottom'
      });
      return this.$wave1Top2.velocity({
        rotateX: -180,
        translateY: 4
      }, {
        delay: delay + wave1Time + .95 * topRotateDur1,
        easing: 'ease-out',
        duration: topRotateDur1
      });
    };

    Main.prototype.wave2 = function(delay) {
      var topRotateDur2, wave2Time;
      wave2Time = 1500 * this.s;
      topRotateDur2 = wave2Time / 4;
      this.$wave2.velocity({
        translateY: this.wave2Y
      }, {
        delay: delay,
        duration: wave2Time,
        easing: 'ease-out',
        begin: (function(_this) {
          return function() {
            return _this.$wave2.show();
          };
        })(this),
        progress: (function(_this) {
          return function($els, progress) {
            if (progress >= 0.375) {
              _this.$wave2Top3.hide();
              return _this.$wave2Top3Rect.hide();
            }
          };
        })(this)
      }).velocity({
        translateY: this.wave2YStart
      }, {
        duration: wave2Time,
        easing: 'ease-in'
      });
      this.$wave2Top.css({
        'transform-origin': 'center bottom'
      });
      this.$wave2Top.velocity({
        rotateX: -90
      }, {
        delay: delay + wave2Time,
        duration: topRotateDur2
      });
      this.$wave2Top2.css({
        'transform-origin': 'center bottom'
      });
      this.$wave2Top2.velocity({
        rotateX: -180,
        translateY: 4
      }, {
        delay: delay + wave2Time + .95 * topRotateDur2,
        duration: topRotateDur2
      });
      return this.$creamTriangle2.velocity({
        rotateZ: -12,
        translateY: -80,
        translateX: -90
      }, {
        duration: 2 * topRotateDur2,
        delay: delay + 700 * this.s,
        easing: 'ease-out'
      }).velocity({
        rotateZ: -12,
        translateY: 800,
        translateX: 800
      }, {
        duration: 1
      });
    };

    Main.prototype.caleydoscope = function(delay) {
      var $paths;
      $('#js-c-mask1').velocity({
        r: 152
      }, {
        delay: delay + 2000 * this.s,
        duration: 400 * this.s,
        easing: 'linear'
      });
      $('#js-c-mask2').velocity({
        r: 152,
        opacity: 100
      }, {
        delay: delay + 2000 * this.s,
        duration: 400 * this.s,
        easing: 'linear'
      });
      this.$blow.children().each((function(_this) {
        return function(i, item) {
          var $item;
          $item = $(item);
          return $item.velocity({
            translateY: h.rand(-200, 200),
            translateX: h.rand(-200, 200),
            r: 0
          }, {
            delay: delay + 2000 * _this.s,
            duration: 700 * _this.s
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
