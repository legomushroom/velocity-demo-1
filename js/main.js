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
      this.$wave1Rect = $('#js-wave1-u-rect');
      this.wave1Y = 1000;
      this.wave1YStart = 1800;
      this.wave1UnderlineY = 75;
      this.$wave1 = $('#js-wave1').velocity({
        translateY: this.wave1YStart,
        translateX: 0,
        rotateZ: -25
      }, {
        duration: 1
      });
      this.$wave12 = $('#js-wave12').velocity({
        translateY: this.wave1YStart - this.wave1UnderlineY,
        translateX: 0,
        rotateZ: -25
      }, {
        duration: 1
      });
      this.$wave1U = $('#js-wave1-u').velocity({
        translateY: this.wave1Y,
        translateX: -400,
        rotateZ: -25
      }, {
        duration: 1
      });
      this.$wave1Top = $('#js-wave1-top');
      this.$wave1TopU = $('#js-wave1-top-u');
      this.$wave1Top2 = $('#js-wave1-top2');
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
        translateX: 235 - translateSize / 5,
        translateY: 50 + translateSize / 5
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
      return this.wave1(3000 * this.s);
    };

    Main.prototype.wave1 = function(delay) {
      var baseDuration, topDuration;
      baseDuration = 2000 * this.s;
      topDuration = 1000 * this.s;
      this.$wave1Top.css({
        'transform-origin': 'center bottom'
      }).velocity({
        rotateX: -180
      }, {
        delay: delay + 400 * this.s,
        duration: topDuration
      });
      this.$wave1TopU.css({
        'transform-origin': 'center bottom'
      }).velocity({
        rotateX: -180
      }, {
        delay: delay + 300 * this.s,
        duration: topDuration
      });
      this.$wave1Top2.css({
        'transform-origin': 'center bottom'
      }).velocity({
        rotateX: -180
      }, {
        delay: delay + 400 * this.s,
        duration: topDuration
      });
      this.$wave1U.velocity({
        translateY: this.wave1YStart,
        translateX: 0,
        opacity: 100,
        easing: 'ease-out'
      }, {
        duration: baseDuration,
        delay: delay + 800 * this.s
      });
      console.log(this.$wave1Rect[0]);
      this.$wave1Rect.velocity({
        height: 35,
        y: 19
      }, {
        delay: delay + 800 * this.s
      });
      this.$wave12.velocity({
        translateY: this.wave1Y - this.wave1UnderlineY,
        translateX: -400,
        opacity: 100,
        easing: 'ease-in'
      }, {
        delay: delay - 1200 * this.s,
        duration: baseDuration
      }).velocity({
        translateY: this.wave1YStart - this.wave1UnderlineY,
        translateX: 0,
        easing: 'ease-out'
      }, {
        duration: baseDuration
      });
      return this.$wave1.velocity({
        translateY: this.wave1Y,
        translateX: -400,
        opacity: 100,
        easing: 'ease-in'
      }, {
        delay: delay - 1200 * this.s,
        duration: baseDuration
      }).velocity({
        translateY: this.wave1YStart,
        translateX: 0,
        easing: 'ease-out'
      }, {
        duration: baseDuration
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
