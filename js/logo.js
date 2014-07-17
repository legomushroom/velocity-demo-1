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
      this.delay = this.o.delay || 0;
      return this.$logoLines = $('#js-logo-lines');
    };

    Logo.prototype.run = function() {
      return this.prepareLines();
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
