(function() {
  var Triangles;

  Triangles = (function() {
    function Triangles(o) {
      this.o = o != null ? o : {};
      this.vars();
      $('<div />').velocity({
        p: 0
      }, {
        duration: this.delay,
        complete: (function(_this) {
          return function() {
            _this.$triangles.show();
            return _this.run();
          };
        })(this)
      });
    }

    Triangles.prototype.vars = function() {
      this.delay = this.o.delay || 0;
      this.s = 1 * h.time(1);
      this.$pattern = $('#flowers-cream-pattern');
      this.$dust = $('#js-dust');
      this.$svg = $('#js-svg');
      this.$owlsPattern2 = $('#js-owls-image2');
      this.$owlsImage = $('#js-owls-image');
      this.$flowersCream = $('#js-flowers-cream');
      this.$sliceLine = $('#js-slice-line');
      this.$sliceLine.css({
        'transform-origin': '640px 450px'
      });
      this.$sliceLine.velocity({
        rotateZ: 120
      }, {
        duration: 1
      });
      this.$divSparks = $('#js-div-sparks');
      this.$triangles = $('#js-triangles');
      this.$creamTriangle1 = $('#js-cream-triangle1').css({
        'transform': 'translate(490px,300px)'
      });
      this.$creamTriangle2 = $('#js-cream-triangle2');
      this.$creamTriangles = $('#js-cream-triangles');
      this.blowDelay = 250;
      this.$s = $('#js-svg-s');
      this.$v = $('#js-svg-v');
      this.$g = $('#js-svg-g');
      this.$sW = $('#js-svg-s-wrapper');
      this.$vW = $('#js-svg-v-wrapper');
      this.$gW = $('#js-svg-g-wrapper');
      this.$svgTextW = $('#js-svg-text-wrapper');
      this.$gradientWrapper = $('#js-gradient-wrapper');
      return this.$creamTriangleWrapper = $('#js-cream-triangle2-wrapper').css({
        'transform': 'translate(490px,300px)'
      });
    };

    Triangles.prototype.run = function() {
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
      this.start = this.start + this.dur - 600 * this.s;
      this.dur = 400 * this.s;
      this.$sliceLine.velocity({
        rotateZ: 315,
        scale: 1,
        opacity: 100,
        width: 600
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
        'transform-origin': '50px'
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
        opacity: h.isFF() ? 0 : 1,
        transformOrigin: '100px'
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
            },
            complete: function() {
              return $item.hide();
            }
          });
        };
      })(this));
      return this.blow();
    };

    Triangles.prototype.blow = function() {
      this.$gW.css({
        'transform-origin': '640px 450px'
      });
      this.$gW.velocity({
        translateX: 1800,
        translateY: 1000,
        rotateZ: h.rand(500, 1000)
      }, {
        duration: 2000 * this.s,
        delay: this.blowDelay * this.s,
        easing: 'ease-out'
      });
      this.$vW.css({
        'transform-origin': '400px 400px'
      });
      this.$vW.velocity({
        translateY: 2000,
        translateX: -60,
        rotateZ: h.rand(500, 1000)
      }, {
        duration: 1200 * this.s,
        delay: this.blowDelay * this.s,
        easing: 'ease-out'
      });
      this.$svgTextW.css({
        'transform-origin': '650px 650px'
      });
      this.$svgTextW.velocity({
        translateY: 2000,
        translateX: -20,
        rotateZ: h.rand(500, 1000)
      }, {
        duration: 800 * this.s,
        delay: (this.blowDelay + 50) * this.s,
        easing: 'ease-out',
        complete: (function(_this) {
          return function() {
            return _this.$svg.hide();
          };
        })(this)
      });
      this.$gradientWrapper.css({
        'transform-origin': '640px 700px'
      });
      return this.$gradientWrapper.velocity({
        translateX: -1600,
        rotateZ: 100
      }, {
        duration: 1200 * this.s,
        delay: this.blowDelay * this.s,
        easing: 'ease-out',
        begin: (function(_this) {
          return function() {
            _this.$s.velocity('stop');
            _this.$v.velocity('stop');
            return _this.$g.velocity('stop');
          };
        })(this)
      });
    };

    return Triangles;

  })();

  window.Triangles = Triangles;

}).call(this);
