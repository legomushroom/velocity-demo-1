(function() {
  var Waves;

  Waves = (function() {
    function Waves(o) {
      this.o = o != null ? o : {};
      this.vars();
      this.run();
    }

    Waves.prototype.vars = function() {
      this.delay = this.o.delay || 0;
      this.$wave1 = $('#js-wave1');
      this.$wave1Top = $('#js-wave1-top');
      this.$wave1Top2 = $('#js-wave1-top2');
      this.$creamTriangle1 = $('#js-cream-triangle1').css({
        'transform': 'translate(490px,300px)'
      });
      this.$creamTriangle2 = $('#js-cream-triangle2');
      this.$creamTriangles = $('#js-cream-triangles');
      this.$creamTriangleWrapper = $('#js-cream-triangle2-wrapper').css({
        'transform': 'translate(490px,300px)'
      });
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
      return this.$wave2.velocity({
        rotateZ: -25,
        translateX: -400,
        translateY: this.wave2YStart
      }, {
        duration: 1
      });
    };

    Waves.prototype.run = function() {
      this.wave1(this.delay + h.time(1700));
      return this.wave2(this.delay);
    };

    Waves.prototype.wave1 = function(delay) {
      var topRotateDur1, wave1Time;
      wave1Time = h.time(1200);
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

    Waves.prototype.wave2 = function(delay) {
      var topRotateDur2, wave2Time;
      wave2Time = h.time(1500);
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
        delay: delay + h.time(700),
        easing: 'ease-out'
      }).velocity({
        rotateZ: -12,
        translateY: 800,
        translateX: 800
      }, {
        duration: 1
      });
    };

    return Waves;

  })();

  window.Waves = Waves;

}).call(this);
