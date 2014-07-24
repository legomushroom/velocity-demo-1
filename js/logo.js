(function() {
  var Logo;

  Logo = (function() {
    function Logo(o) {
      this.o = o != null ? o : {};
      this.vars();
      $('<div />').velocity({
        p: 1
      }, {
        duration: this.delay,
        complete: (function(_this) {
          return function() {
            _this.$logo.show();
            return _this.run();
          };
        })(this)
      });
    }

    Logo.prototype.vars = function() {
      var i, num, _i, _j, _k, _len, _len1, _len2, _ref, _ref1, _ref2, _results;
      this.delay = this.o.delay || 0;
      this.s = 1 * h.time(1);
      this.$logo = $('#js-logo');
      this.$logoV = $('#js-logo-v');
      this.$logoV.velocity({
        translateX: 21,
        translateY: 21
      });
      this.$logoLines = $('#js-logo-lines');
      this.$text = $('#js-logo-text');
      this.$hand = $('#js-logo-hand');
      this.$handCircle = $('#js-hand-circle');
      this.$shadow = $('#js-logo-shadow');
      this.$shadow.css({
        'transform-origin': '180px'
      });
      this.$shadow.velocity({
        scale: .75
      });
      this.prepareLines();
      _ref = [1, 2, 3];
      for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
        num = _ref[i];
        this["$circle" + num] = $("#js-logo-circle-" + num);
      }
      _ref1 = [1, 2, 3];
      for (i = _j = 0, _len1 = _ref1.length; _j < _len1; i = ++_j) {
        num = _ref1[i];
        this["$line" + num] = $("#js-line-" + num);
      }
      _ref2 = [1, 2, 3];
      _results = [];
      for (i = _k = 0, _len2 = _ref2.length; _k < _len2; i = ++_k) {
        num = _ref2[i];
        _results.push(this["$shadow" + num] = $("#js-shadow-" + num));
      }
      return _results;
    };

    Logo.prototype.run = function() {
      var circlesDelay, entireDur, handDelay, lineDur1, lineDur2, lineDur3, textDuration;
      lineDur1 = 300;
      lineDur2 = 250;
      lineDur3 = 200;
      entireDur = lineDur1 + lineDur2 + lineDur3;
      this.$logoLines.velocity({
        opacity: 1
      }, {
        duration: entireDur * this.s,
        easing: 'linear'
      });
      this.$line1.velocity({
        strokeDashoffset: 0
      }, {
        duration: lineDur1 * this.s,
        easing: 'linear',
        progress: (function(_this) {
          return function($els, proc) {
            return proc > .65 && _this.$shadow1.velocity({
              opacity: .1
            });
          };
        })(this)
      });
      this.$line2.velocity({
        strokeDashoffset: 0
      }, {
        duration: lineDur2 * this.s,
        easing: 'linear',
        delay: 275 * this.s,
        progress: (function(_this) {
          return function($els, proc) {
            if (proc > .65) {
              _this.$shadow2.velocity({
                opacity: .1
              });
              return _this.$shadow.velocity({
                opacity: .2
              });
            }
          };
        })(this)
      });
      this.$line3.velocity({
        strokeDashoffset: 0
      }, {
        duration: lineDur3 * this.s,
        easing: 'linear',
        delay: 2 * 245 * this.s,
        begin: (function(_this) {
          return function() {
            return _this.$shadow3.velocity({
              opacity: .1
            });
          };
        })(this)
      });
      circlesDelay = entireDur - 300;
      textDuration = 900;
      this.$text.velocity({
        opacity: 1
      }, {
        duration: textDuration * this.s,
        delay: circlesDelay * this.s
      });
      this.$circle1.velocity({
        r: 180
      }, {
        duration: textDuration * this.s,
        delay: circlesDelay * this.s
      });
      handDelay = entireDur;
      return this.$hand.velocity({
        translateX: 280,
        translateY: 291
      }, {
        duration: 1
      }).velocity({
        translateX: 190,
        translateY: 241,
        opacity: 1
      }, {
        duration: 500 * this.s,
        delay: (entireDur + 100) * this.s,
        complete: (function(_this) {
          return function() {
            _this.$hand.velocity({
              opacity: 0
            }, {
              duration: 400 * _this.s
            });
            return _this.$handCircle.velocity({
              r: 25,
              strokeWidth: 0,
              opacity: 100
            }, {
              duration: 500 * _this.s,
              complete: function() {
                return setTimeout(function() {
                  _this.$logoV.velocity({
                    translateY: 31
                  }, {
                    loop: 40,
                    duration: 1500 * _this.s
                  });
                  return _this.$shadow.velocity({
                    opacity: .35,
                    scale: 1
                  }, {
                    loop: 40,
                    duration: 1500 * _this.s
                  });
                }, 2000 * _this.s);
              }
            });
          };
        })(this)
      });
    };

    Logo.prototype.prepareLines = function() {
      return this.$logoLines.children().each(function(i, line) {
        var $line, length;
        $line = $(line);
        length = line.getTotalLength();
        return $line.css({
          'stroke-dasharray': "" + length + "px",
          'stroke-dashoffset': "" + (-length) + "px"
        });
      });
    };

    return Logo;

  })();

  window.Logo = Logo;

}).call(this);
