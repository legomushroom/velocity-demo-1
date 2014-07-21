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
      this.s = 1 * h.time(1);
      this.$div = $('<div />');
      this.$circles = $('#js-svg-circles');
      this.$sW = $('#js-svg-s-wrapper');
      this.$s = $('#js-svg-s');
      this.$g = $('#js-svg-g');
      this.$v = $('#js-svg-v');
      this.$text = $('#js-svg-text');
      this.$svgStroke = $('.svg-stroke');
      this.$gradient = $('#js-gradient');
      this.$svg = $('#js-svg');
      this.$blow = $('#js-svg-blow');
      this.$meets = $('#js-meets');
      this.maxCnt = 3;
      this.cnt = 0;
      return this.delayStep = 200;
    };

    Svg.prototype.run = function() {
      this.hider().then((function(_this) {
        return function() {
          return _this.$meets.hide();
        };
      })(this));
      return this.$div.velocity({
        p: 1
      }, {
        delay: this.delay - h.time(600),
        complete: (function(_this) {
          return function() {
            _this.showS();
            _this.showV();
            _this.runG();
            return _this.confetti();
          };
        })(this)
      });
    };

    Svg.prototype.confetti = function() {
      return this.$blow.children().each((function(_this) {
        return function(i, item) {
          var $item, blowX, x, y;
          $item = $(item);
          x = h.rand(-500, 500);
          y = h.rand(-500, 500);
          blowX = x < 0 ? x - 1000 : x + 1000;
          console.log(200 - Math.Abs(blowX));
          return $item.velocity({
            translateX: x,
            translateY: y,
            rotateZ: h.rand(-360, 360),
            rotateX: h.rand(-360, 360),
            rotateY: h.rand(-360, 360)
          }, {
            duration: 1,
            easing: 'linear'
          }).velocity({
            translateY: y + 300,
            translateX: x < 0 ? x - 100 : x + 100,
            rotateZ: h.rand(-1200, 1200),
            rotateX: h.rand(-1200, 1200),
            rotateY: h.rand(-1200, 1200)
          }, {
            duration: 3000 * _this.s,
            delay: 400 * _this.s,
            easing: 'linear',
            begin: function() {
              if (i === 0) {
                return _this.$blow.show();
              }
            }
          }).velocity({
            translateY: y + 1000,
            translateX: blowX,
            rotateZ: h.rand(-1200, 1200),
            rotateX: h.rand(-1200, 1200),
            rotateY: h.rand(-1200, 1200)
          }, {
            duration: 600 * _this.s,
            easing: 'linear'
          });
        };
      })(this));
    };

    Svg.prototype.showS = function() {
      return this.$sW.velocity({
        opacity: 1
      }, {
        duration: h.time(1200),
        complete: (function(_this) {
          return function() {
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
        delay: this.delayStep,
        easing: 'easeOutBounce',
        complete: (function(_this) {
          return function() {
            if (_this.cnt++ === _this.maxCnt) {
              _this.destroy();
            }
            if (_this.isDestroy) {
              return;
            }
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
        delay: h.time(2 * this.delayStep),
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
            if (_this.isDestroy) {
              return;
            }
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
        delay: h.time(3 * this.delayStep),
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
            if (_this.isDestroy) {
              return;
            }
            _this.runG();
            return _this.$text.velocity({
              opacity: 1
            });
          };
        })(this)
      });
    };

    Svg.prototype.hider = function() {
      var dfr;
      dfr = new $.Deferred;
      this.$circles.children().each((function(_this) {
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
              _this.isCircles = true;
              return _this.$svg.show();
            }
          }).velocity({
            r: h.rand(150, 300),
            rotateZ: h.rand(20, 70),
            translateX: x,
            translateY: y
          }, {
            begin: function() {
              return _this.$gradient.show();
            },
            complete: function() {
              return dfr.resolve();
            }
          });
        };
      })(this));
      return dfr.promise();
    };

    Svg.prototype.destroy = function() {
      return this.isDestroy = true;
    };

    return Svg;

  })();

  window.Svg = Svg;

}).call(this);
