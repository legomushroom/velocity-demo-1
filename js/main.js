(function() {
  var Main;

  Main = (function() {
    function Main() {
      this.vars();
      setTimeout((function(_this) {
        return function() {
          return _this.run();
        };
      })(this), 200 * this.s);
    }

    Main.prototype.vars = function() {
      this.s = 1;
      this.$pattern = $('#flowers-cream-pattern');
      this.$dust = $('#js-dust');
      this.$owlsImage = $('#js-owls-image');
      this.$flowersCream = $('#js-flowers-cream');
      return this.$sliceLine = $('#js-slice-line');
    };

    Main.prototype.run = function() {
      setTimeout((function(_this) {
        return function() {
          var $currDust, $dustChilds, $prevDust, s;
          _this.$owlsImage.velocity({
            opacity: 1
          }, {
            duration: 1500
          });
          $currDust = null;
          $prevDust = null;
          $dustChilds = _this.$dust.children();
          s = _this.s;
          return $dustChilds.each(function(i, item) {
            $prevDust = $currDust;
            $currDust = $(item);
            return (function($prevDust, $currDust, i, $dustChilds, s) {
              return setTimeout((function(_this) {
                return function() {
                  if ($prevDust != null) {
                    $prevDust.hide();
                  }
                  $currDust.show();
                  if (i === $dustChilds.length - 1) {
                    return setTimeout(function() {
                      return $currDust.hide();
                    }, 80);
                  }
                };
              })(this), i * 80 * s);
            })($prevDust, $currDust, i, $dustChilds, s);
          });
        };
      })(this), 275 * this.s);
      this.$flowersCream.velocity({
        y: 300
      }, {
        duration: 300 * this.s,
        easing: 'ease-in'
      });
      this.$sliceLine.velocity({
        rotateZ: 45,
        opacity: 0
      }, {
        duration: 1
      });
      return this.$sliceLine.velocity({
        rotateZ: 315,
        scale: 1,
        opacity: 100,
        width: 600,
        transformOrigin: '50% 50%'
      }, {
        delay: 800
      });
    };

    return Main;

  })();

  new Main;

}).call(this);
