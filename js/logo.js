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
            return _this.run();
          };
        })(this)
      });
    }

    Logo.prototype.vars = function() {
      var i, num, _i, _j, _len, _len1, _ref, _ref1, _results;
      this.delay = this.o.delay || 0;
      this.s = 1 * h.time(1);
      this.$logoLines = $('#js-logo-lines');
      this.prepareLines();
      _ref = [1, 2, 3];
      for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
        num = _ref[i];
        this["$line" + num] = $("#js-line-" + num);
      }
      _ref1 = [1, 2, 3];
      _results = [];
      for (i = _j = 0, _len1 = _ref1.length; _j < _len1; i = ++_j) {
        num = _ref1[i];
        _results.push(this["$shadow" + num] = $("#js-shadow-" + num));
      }
      return _results;
    };

    Logo.prototype.run = function() {
      var lineDur;
      lineDur = 300;
      this.$logoLines.velocity({
        opacity: 1
      }, {
        duration: 3 * lineDur * this.s,
        easing: 'linear'
      });
      this.$line1.velocity({
        strokeDashoffset: 0
      }, {
        duration: lineDur * this.s,
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
        duration: lineDur * this.s,
        easing: 'linear',
        delay: 260 * this.s,
        progress: (function(_this) {
          return function($els, proc) {
            return proc > .65 && _this.$shadow2.velocity({
              opacity: .1
            });
          };
        })(this)
      });
      return this.$line3.velocity({
        strokeDashoffset: 0
      }, {
        duration: lineDur * this.s,
        easing: 'linear',
        delay: 2 * 250 * this.s,
        begin: (function(_this) {
          return function() {
            return _this.$shadow3.velocity({
              opacity: .1
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
