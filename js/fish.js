(function() {
  var Fish;

  Fish = (function() {
    function Fish(o) {
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

    Fish.prototype.vars = function() {
      this.delay = this.o.delay || 0;
      this.s = 1 * h.time(1);
      this.$fish = $('#js-fish');
      this.$fish.css({
        'transform-origin': 'center center'
      });
      this.$fish.velocity({
        translateX: 35,
        translateY: 240
      }, {
        duration: 1
      });
      return this.$fishW = $('#js-fish-wrapper');
    };

    Fish.prototype.run = function() {
      var position, startX, startY;
      position = this.$fishW.attr('transform').split(/translate\(|,|\)/);
      startX = parseInt(position[1], 10);
      startY = parseInt(position[2], 10);
      return this.$fish.velocity({
        translateX: 30,
        translateY: -95
      }, {
        duration: 1200 * this.s,
        easing: 'ease-in-out'
      });
    };

    return Fish;

  })();

  window.Fish = Fish;

}).call(this);
