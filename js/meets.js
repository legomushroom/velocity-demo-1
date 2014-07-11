(function() {
  var Meets;

  Meets = (function() {
    function Meets(o) {
      this.o = o != null ? o : {};
      this.vars();
      this.run();
    }

    Meets.prototype.vars = function() {
      this.delay = this.o.delay || 0;
      this.$leftHand = $('#js-left-hand');
      this.$leftHand.velocity({
        translateX: 500
      }, {
        duration: 1
      });
      this.$rightHand = $('#js-right-hand');
      this.$rightHand.velocity({
        translateX: 500
      }, {
        duration: 1
      });
      this.$rightFist = $('#js-right-fist');
      this.$leftFist = $('#js-left-fist');
      this.$rightFistWrapper = $('#js-right-fist-wrapper');
      return this.$leftFistWrapper = $('#js-left-fist-wrapper');
    };

    Meets.prototype.run = function() {
      var bumpDuration, fistAngle, fistDelay, fistDuration, fistDuration2, fistX;
      bumpDuration = h.time(400);
      this.$leftHand.velocity({
        translateX: 0
      }, {
        duration: bumpDuration,
        easing: 'ease-in',
        begin: (function(_this) {
          return function() {
            _this.$leftHand.show();
            return _this.$rightHand.show();
          };
        })(this)
      });
      this.$rightHand.velocity({
        translateX: 0
      }, {
        duration: bumpDuration,
        easing: 'ease-in'
      });
      fistX = 20;
      fistAngle = -20;
      fistDuration = h.time(700);
      fistDuration2 = h.time(700);
      fistDelay = fistDuration / 2;
      this.$rightFist.css({
        'transform-origin': 'center center'
      });
      this.$rightFist.velocity({
        rotateZ: fistAngle
      }, {
        duration: 1
      }).velocity({
        rotateZ: 0
      }, {
        duration: fistDuration,
        delay: fistDelay,
        easing: 'easeOutElastic'
      });
      this.$leftFist.css({
        'transform-origin': 'center center'
      });
      this.$leftFist.velocity({
        rotateZ: fistAngle
      }, {
        duration: 1
      }).velocity({
        rotateZ: 0
      }, {
        duration: fistDuration,
        delay: fistDelay,
        easing: 'easeOutElastic'
      });
      this.$rightFistWrapper.velocity({
        translateX: fistX
      }, {
        duration: 1
      }).velocity({
        translateX: 0
      }, {
        duration: fistDuration2,
        delay: fistDelay,
        easing: 'easeOutElastic'
      });
      return this.$leftFistWrapper.velocity({
        translateX: fistX
      }, {
        duration: 1
      }).velocity({
        translateX: 0
      }, {
        duration: fistDuration2,
        delay: fistDelay,
        easing: 'easeOutElastic'
      });
    };

    return Meets;

  })();

  window.Meets = Meets;

}).call(this);
