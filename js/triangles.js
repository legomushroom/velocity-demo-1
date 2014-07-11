(function() {
  var Triangles;

  Triangles = (function() {
    function Triangles(o) {
      this.o = o != null ? o : {};
      this.vars();
      this.run();
    }

    Triangles.prototype.vars = function() {
      this.delay = this.o.delay || 0;
      this.s = h.time(1);
      this.$pattern = $('#flowers-cream-pattern');
      this.$dust = $('#js-dust');
      this.$owlsPattern2 = $('#js-owls-image2');
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
      return this.$divSparks.children().each((function(_this) {
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
    };

    return Triangles;

  })();

  window.Triangles = Triangles;

}).call(this);
