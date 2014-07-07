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
      this.$wave1 = $('#js-wave1');
      this.$wave1Top = $('#js-wave1-top');
      this.$wave1Top2 = $('#js-wave1-top2');
      this.wave1YStart = 1350;
      this.wave1Y = 700;
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
      this.wave1(2300 * this.s);
      return this.wave2(4200 * this.s);
    };

    Main.prototype.wave1 = function(delay) {
      var topRotateDur1, wave1Time;
      wave1Time = 1200 * this.s;
      topRotateDur1 = wave1Time / 3;
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
        complete: (function(_this) {
          return function() {
            return _this.$wave1Top.hide();
          };
        })(this)
      });
      this.$wave1Top2.css({
        'transform-origin': 'center bottom'
      });
      this.$wave1Top2.velocity({
        rotateX: -180,
        translateY: 4
      }, {
        delay: delay + wave1Time + .75 * topRotateDur1,
        duration: topRotateDur1
      });
      return this.$creamTriangle2.velocity({
        rotateZ: -5,
        translateY: -45,
        translateX: -40
      }, {
        duration: topRotateDur1,
        delay: .88 * (delay + wave1Time)
      }).velocity({
        rotateZ: -7,
        translateY: -20,
        translateX: -25
      }, {
        duration: topRotateDur1
      });
    };

    Main.prototype.wave2 = function(delay) {
      var topRotateDur2, wave2Time;
      wave2Time = 1500 * this.s;
      topRotateDur2 = wave2Time / 3;
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
        delay: delay + wave2Time + .75 * topRotateDur2,
        duration: topRotateDur2
      });
      return this.$creamTriangle2.velocity({
        rotateZ: -12,
        translateY: -80,
        translateX: -90
      }, {
        duration: 1.2 * topRotateDur2,
        delay: 1000 * this.s,
        easing: 'ease-out'
      }).velocity({
        rotateZ: -13,
        translateY: 800,
        translateX: 600
      }, {
        duration: 1
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
