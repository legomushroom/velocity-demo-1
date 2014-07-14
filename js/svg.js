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
      this.preT();
      return this.runT();
    };

    Svg.prototype.runT = function() {
      return this.$t.velocity({
        p: 1
      }, {
        delay: h.time(500),
        progress: (function(_this) {
          return function($els, proc) {
            return _this.$t.attr('d', "M" + (_this.x1 + (_this.deltaX1 * proc)) + "," + _this.arr[1] + "\n L" + _this.arr[2] + "," + _this.arr[3] + "\n L" + (_this.x2 - (_this.deltaX2 * proc)) + "," + _this.arr[5] + " Z");
          };
        })(this)
      }).velocity({
        p: 0
      }, {
        progress: (function(_this) {
          return function($els, proc) {
            proc = h.elasticOut(proc);
            return _this.$t.attr('d', "M" + ((_this.x1 + _this.deltaX1) - (_this.deltaX1 * proc)) + "," + _this.arr[1] + "\n L" + _this.arr[2] + "," + _this.arr[3] + "\n L" + ((_this.x2 - _this.deltaX2) + (_this.deltaX2 * proc)) + "," + _this.arr[5] + " Z");
          };
        })(this),
        complete: (function(_this) {
          return function() {
            return _this.runT();
          };
        })(this),
        easing: 'easeOutBounce'
      });
    };

    Svg.prototype.preT = function() {
      var i, point, points, _i, _len;
      this.$t.css({
        'transform-origin': 'center center'
      });
      this.arr = [];
      points = this.$t.attr('d').split(/\,|M|L|\s/);
      for (i = _i = 0, _len = points.length; _i < _len; i = ++_i) {
        point = points[i];
        if (point && point !== 'Z') {
          this.arr.push(parseInt(point, 10));
        }
      }
      this.x1 = this.arr[0];
      this.x2 = this.arr[4];
      this.deltaX1 = 44;
      return this.deltaX2 = 44;
    };

    Svg.prototype.changeS = function() {
      return this.$s.velocity({
        'translateY': -194,
        'translateX': -52
      }, {
        duration: h.time(1000),
        delay: h.time(400),
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
      this.$g.css({
        'transform-origin': 'center center'
      });
      return this.$g.velocity({
        scaleX: 1.25,
        scaleY: 1.25
      }, {
        delay: h.time(600),
        duration: h.time(400),
        easing: 'easeOutBounce'
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
