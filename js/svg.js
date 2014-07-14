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
      return this.$v = $('#js-svg-v');
    };

    Svg.prototype.run = function() {
      this.hider();
      this.showS();
      this.showV();
      return this.runG();
    };

    Svg.prototype.showS = function() {
      var i, item, _i, _len, _ref;
      this.strokeArray = this.$s.attr('stroke-dashArray').split(',');
      _ref = this.strokeArray;
      for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
        item = _ref[i];
        this.strokeArray[i] = parseInt(this.strokeArray[i], 10);
      }
      return this.$s.velocity({
        p: 0,
        strokeDashoffset: 1000,
        opacity: 1
      }, {
        duration: h.time(1200),
        complete: (function(_this) {
          return function() {
            _this.$s.attr('stroke-dasharray', '0');
            return _this.runS();
          };
        })(this)
      });
    };

    Svg.prototype.runS = function() {
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
            return _this.runS();
          };
        })(this)
      });
    };

    Svg.prototype.showV = function() {
      this.preV();
      return this.runV();
    };

    Svg.prototype.runV = function() {
      return this.$v.velocity({
        p: 1
      }, {
        delay: h.time(300),
        progress: (function(_this) {
          return function($els, proc) {
            return _this.$v.attr('d', "M" + (_this.x1 + (_this.deltaX1 * proc)) + "," + _this.arr[1] + "\n L" + _this.arr[2] + "," + _this.arr[3] + "\n L" + (_this.x2 - (_this.deltaX2 * proc)) + "," + _this.arr[5] + " Z");
          };
        })(this)
      }).velocity({
        p: 0,
        opacity: 1
      }, {
        duration: h.time(700),
        progress: (function(_this) {
          return function($els, proc) {
            proc = h.elasticOut(proc);
            return _this.$v.attr('d', "M" + ((_this.x1 + _this.deltaX1) - (_this.deltaX1 * proc)) + "," + _this.arr[1] + "\n L" + _this.arr[2] + "," + _this.arr[3] + "\n L" + ((_this.x2 - _this.deltaX2) + (_this.deltaX2 * proc)) + "," + _this.arr[5] + " Z");
          };
        })(this),
        complete: (function(_this) {
          return function() {
            return _this.runV();
          };
        })(this)
      });
    };

    Svg.prototype.preV = function() {
      var i, point, points, _i, _len;
      this.$v.css({
        'transform-origin': 'center center'
      });
      this.arr = [];
      points = this.$v.attr('d').split(/\,|M|L|\s/);
      for (i = _i = 0, _len = points.length; _i < _len; i = ++_i) {
        point = points[i];
        if (point && point !== 'Z') {
          this.arr.push(parseInt(point, 10));
        }
      }
      this.x1 = this.arr[0];
      this.x2 = this.arr[4];
      this.deltaX1 = 80;
      return this.deltaX2 = 80;
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
        rotateZ: 0,
        opacity: 1
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
