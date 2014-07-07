(function() {
  var Main;

  Main = (function() {
    function Main() {
      this.vars();
      this.run();
    }

    Main.prototype.vars = function() {
      this.s = 1;
      this.$pattern = $('#flowers-cream-pattern');
      this.$dust = $('#js-dust');
      this.$wave1 = $('#js-wave1').velocity({
        translateY: 1800,
        translateX: 0,
        rotateZ: -25
      }, {
        duration: 1
      });
      this.$wave12 = $('#js-wave12').velocity({
        translateY: 1300,
        translateX: -400,
        rotateZ: -25
      }, {
        duration: 1
      });
      this.$wave1U = $('#js-wave1-u').velocity({
        translateY: 1300,
        translateX: -400,
        rotateZ: -25
      }, {
        duration: 1
      });
      this.$wave1Top = $('#js-wave1-top');
      this.$wave1TopU = $('#js-wave1-top-u');
      this.$wave1Top2 = $('#js-wave1-top2');
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

    Main.prototype.run = function() {
      return this.wave1(2000 * this.s);
    };

    Main.prototype.wave1 = function(delay) {
      var baseDuration, topDuration;
      baseDuration = 2000 * this.s;
      topDuration = 1000 * this.s;
      this.$wave1Top.css({
        'transform-origin': 'center bottom'
      }).velocity({
        rotateX: -180
      }, {
        delay: delay + 400 * this.s,
        duration: topDuration
      });
      this.$wave1TopU.css({
        'transform-origin': 'center bottom'
      }).velocity({
        rotateX: -180
      }, {
        delay: delay + 400 * this.s,
        duration: topDuration
      });
      this.$wave1Top2.css({
        'transform-origin': 'center bottom'
      }).velocity({
        rotateX: -180
      }, {
        delay: delay + 500 * this.s,
        duration: topDuration
      });
      this.$wave1U.velocity({
        translateY: 1800,
        translateX: 0,
        opacity: 100,
        easing: 'ease-out'
      }, {
        duration: baseDuration,
        delay: delay + 800 * this.s
      });
      return this.$wave1.velocity({
        translateY: 1300,
        translateX: -400,
        opacity: 100,
        easing: 'ease-in'
      }, {
        delay: delay - 1200 * this.s,
        duration: baseDuration
      }).velocity({
        translateY: 1800,
        translateX: 0,
        easing: 'ease-out'
      }, {
        duration: baseDuration
      });
    };

    return Main;

  })();

  setTimeout((function(_this) {
    return function() {
      return new Main;
    };
  })(this), 500);

}).call(this);
