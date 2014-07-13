(function() {
  var Svg;

  Svg = (function() {
    function Svg(o) {
      this.o = o != null ? o : {};
      this.vars();
      this.run();
    }

    Svg.prototype.vars = function() {
      this.delay = this.o.delay || 0;
      this.$div = $('<div />');
      this.$circles = $('#js-svg-circles');
      this.$s = $('#js-svg-s');
      this.$g = $('#js-svg-g');
      return this.$t = $('#js-svg-t');
    };

    Svg.prototype.run = function() {
      this.hider();
      this.changeS();
      this.runG();
      return this.runT();
    };

    Svg.prototype.runT = function() {
      var arr, i, point, points, _i, _len;
      this.$t.css({
        'transform-origin': 'center center'
      });
      arr = [];
      points = this.$t.attr('d').split(/\,|M|L|\s/);
      for (i = _i = 0, _len = points.length; _i < _len; i = ++_i) {
        point = points[i];
        if (point && point !== 'Z') {
          arr.push(parseInt(point, 10));
        }
      }
      console.log(arr);
      return this.$t.velocity({
        p: 100
      }, {
        progress: (function(_this) {
          return function() {
            return _this.$t.attr('d', "M" + arr[0] + "," + arr[1] + " L" + arr[2] + "," + arr[3] + " L" + arr[4] + "," + arr[5] + " Z");
          };
        })(this)
      }).velocity({
        rotateY: 0
      });
    };

    Svg.prototype.changeS = function() {
      return this.$s.velocity({
        'translateY': -194,
        'translateX': -52
      }, {
        duration: h.time(1000),
        delay: h.time(800),
        easing: 'easeOutBounce',
        complete: (function(_this) {
          return function() {
            _this.$s.velocity({
              'translateY': 0,
              'translateX': 0
            }, {
              duration: 1
            });
            return _this.changeS();
          };
        })(this)
      });
    };

    Svg.prototype.runG = function() {
      this.isRunG = !this.isRunG;
      this.$g.css({
        'transform-origin': 'center center'
      });
      return this.$g.velocity({
        scaleX: this.isRunG ? 1.25 : 1,
        scaleY: !this.isRunG ? 1.25 : 1
      }, {
        duration: h.time(400)
      }).velocity({
        scaleX: 1,
        scaleY: 1,
        rotateZ: 0
      }, {
        duration: h.time(400),
        complete: (function(_this) {
          return function() {
            return _this.runG();
          };
        })(this)
      });
    };

    Svg.prototype.hider = function() {
      return this.$circles.children().each((function(_this) {
        return function(i, item) {
          var $item, data, x, y;
          $item = $(item);
          data = $item.data();
          x = data.x;
          y = data.y;
          return $item.velocity({
            translateX: x,
            translateY: y
          }, {
            duration: 1,
            delay: _this.delay,
            begin: function() {
              !_this.isCircles && _this.$circles.show();
              return _this.isCircles = true;
            }
          }).velocity({
            r: h.rand(150, 300),
            rotateZ: h.rand(20, 70),
            translateX: x,
            translateY: y
          });
        };
      })(this));
    };

    return Svg;

  })();

  window.Svg = Svg;

}).call(this);
