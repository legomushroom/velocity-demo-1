(function() {
  var Spriter;

  Spriter = (function() {
    function Spriter(o) {
      this.o = o != null ? o : {};
      this.vars();
      this.init();
    }

    Spriter.prototype.vars = function() {
      this.duration = this.o.duration != null ? this.o.duration || 400 : void 0;
      this.delay = this.o.delay != null ? this.o.delay || 0 : void 0;
      this.sprites = this.o.sprites || (console.error('no sprites were specified'));
      return this.cnt = this.sprites.length;
    };

    Spriter.prototype.init = function() {
      return $('<div />').velocity({
        p: 0
      }, {
        duration: this.duration,
        delay: this.delay,
        progress: (function(_this) {
          return function($els, progress) {
            var i, _i, _ref, _ref1, _results;
            _results = [];
            for (i = _i = 0, _ref = _this.cnt; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
              if (progress >= i * (1 / _this.cnt)) {
                if (!_this["lock" + i]) {
                  _this["lock" + i] = true;
                  if ((_ref1 = _this.sprites[i - 1]) != null) {
                    _ref1.style.display = 'none';
                  }
                  _this.sprites[i].style.display = 'block';
                  if (i === _this.cnt - 1) {
                    _results.push((function(i) {
                      return setTimeout(function() {
                        return _this.sprites[i].style.display = 'none';
                      }, 1 / _this.cnt);
                    })(i));
                  } else {
                    _results.push(void 0);
                  }
                } else {
                  _results.push(void 0);
                }
              } else {
                _results.push(void 0);
              }
            }
            return _results;
          };
        })(this)
      });
    };

    return Spriter;

  })();

  window.Spriter = Spriter;

}).call(this);
