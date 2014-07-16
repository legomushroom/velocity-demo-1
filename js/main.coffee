class Main
  constructor:->
    @vars?()
    @run()
    
  run:->
    new Caleydoscope delay: 0
    new Meets delay:  h.time(2900)
    new Svg   delay:  h.time(4600)
    new Triangles delay: h.time(8600)
    new Waves delay: h.time(11000)

    i = 0
    $grad = $('#js-logo-gradient')
    $grad.css 'transform-origin': 'center center'
    grad = $grad[0]
    $grad.velocity {
      rotateZ: 720
      },
        duration: h.time 10000
        easing: 'linear'

setTimeout ->
  new Main
, 500
