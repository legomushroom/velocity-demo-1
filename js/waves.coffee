class Waves
  constructor:(@o={})->
    @vars()
    @run()

  vars:->
    @delay = @o.delay or 0
    @$wave1        = $('#js-wave1')
    @$wave1Top     = $('#js-wave1-top')
    @$wave1Top2    = $('#js-wave1-top2')
    @$entireBits   = $('#js-entire-tri-bits')

    @$creamTriangle1 = $('#js-cream-triangle1')
      .css 'transform': 'translate(490px,300px)'

    @$creamTriangle2 = $('#js-cream-triangle2')
    @$creamTriangles = $('#js-cream-triangles')

    @$creamTriangleWrapper = $('#js-cream-triangle2-wrapper')
      .css 'transform': 'translate(490px,300px)'

    @wave1YStart = 1350
    @wave1Y      = 900
    @$wave1Top.velocity {
      translateY: 0
    }, duration: 1

    @$wave1Top2.velocity {
      rotateX: -90
      translateY: 20
    }, duration: 1

    @$wave1.velocity {
      rotateZ: -25
      translateX: -400
      translateY: @wave1YStart
    }, duration: 1

    @$wave2        = $('#js-wave2')
    @$wave2Top     = $('#js-wave2-top')
    @$wave2Top2    = $('#js-wave2-top2')
    @$wave2Top3    = $('#js-wave2-top3')
    @$wave2Top3Rect= $('#js-wave2-top3-rect')

    @wave2YStart = 1350
    @wave2Y      = 400
    @$wave2Top.velocity {
      translateY: 0
    }, duration: 1

    @$wave2Top2.velocity {
      rotateX: -90
      translateY: 20
    }, duration: 1

    @$wave2Top3.velocity {
      translateY: -20
    }, duration: 1

    @$wave2.velocity {
      rotateZ: -25
      translateX: -400
      translateY: @wave2YStart
    }, duration: 1

  run:->
    @wave1(@delay + h.time(2200))
    @wave2(@delay)

  wave1:(delay)->
    wave1Time = h.time(1200)
    topRotateDur1 = wave1Time/4
    @$wave1.velocity({ translateY: @wave1Y },
      delay: delay
      duration: wave1Time
      easing: 'ease-out'
      begin:=>
        @$wave1.show()
    )

      .velocity {
        translateY: @wave1YStart
      },
        duration: wave1Time
        easing: 'ease-in'

    @$wave1Top.css 'transform-origin': '1000px 50px'
    @$wave1Top.velocity {
      rotateX: -90
    },
      delay: delay + wave1Time
      duration: topRotateDur1
      easing: 'ease-out'
      complete:=> @$wave1Top.hide()

    @$wave1Top2.css 'transform-origin': '1000px 50px'
    @$wave1Top2.velocity {
      rotateX: -180
      translateY: 4
    },
      delay: delay + wave1Time + .95*topRotateDur1
      easing: 'ease-out'
      duration: topRotateDur1


  wave2:(delay)->
    wave2Time = h.time(2000)
    topRotateDur2 = wave2Time/4
    @$wave2.velocity({ translateY: @wave2Y},
      delay: delay
      duration: wave2Time
      easing: 'ease-out'
      begin:=> @$wave2.show()
      progress:($els, progress)=>
        if progress >= 0.375
          @$wave2Top3.hide()
          @$wave2Top3Rect.hide()

      ).velocity {
        translateY: @wave2YStart
      },
        duration: wave2Time
        easing: 'ease-in'

    @$wave2Top.css 'transform-origin': '1000px 50px'
    @$wave2Top.velocity {
      rotateX: -90
    },
      delay: delay + wave2Time
      duration: topRotateDur2

    @$wave2Top2.css 'transform-origin': '1000px 50px'
    @$wave2Top2.velocity {
      rotateX: -180
      translateY: 4
    },
      delay: delay + wave2Time + .95*topRotateDur2
      duration: topRotateDur2

    @$creamTriangle2.velocity({
      rotateZ:    -12
      translateY: -80
      translateX: -90
      },
        duration: 2*topRotateDur2
        delay: delay + h.time(700)
        easing: 'ease-out'
      ).velocity {
        rotateZ:    -12
        translateY: 800
        translateX: 800
      },
        duration: 1
        begin:=>
          @$entireBits.css 'opacity': 0

window.Waves = Waves