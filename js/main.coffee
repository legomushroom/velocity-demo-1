class Main
  constructor:->
    @vars()
    @run()

  vars:->
    @s = 5
    @$pattern      = $('#flowers-cream-pattern')
    @$dust         = $('#js-dust')

    @$wave1        = $('#js-wave1')
    @$wave1Top     = $('#js-wave1-top')
    @$wave1Top2    = $('#js-wave1-top2')

    @wave1YStart = 1350
    @wave1Y      = 700
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
    
    @$owlsImage    = $('#js-owls-image')
    @$flowersCream = $('#js-flowers-cream')
    @$sliceLine    = $('#js-slice-line')
    @$divSparks    = $('#js-div-sparks')

    @$creamTriangle1 = $('#js-cream-triangle1')
      .css 'transform': 'translate(490px,300px)'

    @$creamTriangle2 = $('#js-cream-triangle2')
    @$creamTriangles = $('#js-cream-triangles')

    @$creamTriangleWrapper = $('#js-cream-triangle2-wrapper')
      .css 'transform': 'translate(490px,300px)'

  run:->
    @start = 0*@s
    @dur = @start + 300*@s
    @$flowersCream.velocity
        y: 300
      ,
        duration: @dur
        delay:    @start
        easing: 'ease-in'

    @start = @start + 275*@s
    @dur = 800*@s
    new Spriter
      sprites:  @$dust.children()
      duration: @dur
      delay:    @start

    @start = @start + @dur - 200*@s
    @dur = 400*@s
    @$sliceLine.velocity
        rotateZ: 315
        scale: 1
        opacity: 100
        width: 600
        transformOrigin: '50% 50%'
      ,
        delay: @start
        duration: @dur

    @start = @start + @dur + 200*@s
    @dur = 30*@s
    translateSize = 20
    @$creamTriangles.velocity
        translateY: 2*translateSize
        translateX: 2*translateSize
      ,
        duration: @dur
        delay:    @start
        begin:=>
          @$sliceLine.hide()
          @$creamTriangles.show()
          @$flowersCream.hide()

      .velocity
          translateY: 0
          translateX: 0
        ,
          duration: 10*@dur
          easing: 'easeOutElastic'

    @$creamTriangle1.css 'transform-origin': '50% 50%'

    @$creamTriangle1.velocity
        translateX: 490
        translateY: 300
      ,
        duration: 1

      .velocity
        translateX: 490 - translateSize
        translateY: 300 + translateSize/2
      ,
        duration: 6*@dur
        delay:    @start - 400*@s
        easing: 'easeOutElastic'

      .velocity
        translateX: 490 - translateSize/2 - 160
        translateY: 300 - translateSize/2 + 160
      ,
        duration: 20*@dur
        delay:    200*@s
        easing: 'linear'
        # easing: 'none'

      .velocity
        translateX: 490 - translateSize/2 - 150
        translateY: 300 - translateSize/2 + 650
        rotateZ: -120
        transformOrigin: '50%'
      ,
        duration: 36*@dur
        easing: 'linear'


     # @$creamTriangle2.velocity
     #    rotateX: 90
     #  ,
     #    duration: 800*@s
     #    delay: @start + 1200*@s
     #    easing: 'easeOutBounce'
     #    begin:=>
     #      @$creamTriangle2.css transformOrigin: '50% 100%'

    @$divSparks.velocity
        translateX: 235 - translateSize/5
        translateY: 50 + translateSize/5
      ,
        duration: 3*@dur
        delay:    @start
        easing: 'easeOutElastic'
        begin:=> @$divSparks.show()


    @start = @start - 50*@s
    @dur = 100*@s
    @$divSparks.children().each (i, item)=>
      $item = $(item)
      length = $item[0].getTotalLength()
      $item.velocity
          'strokeDasharray': length
        ,
          duration: 1

        .velocity
          'strokeDashoffset': if i is 3 then -length else length
        ,
          delay: @start + h.rand(1,50)*@s + i*20*@s
          duration: @dur
          begin:=>
            @$divSparks.show()

    @wave1(2300*@s)
    @wave2(4200*@s)

  wave1:(delay)->
    wave1Time = 1200*@s
    topRotateDur1 = wave1Time/3
    @$wave1.velocity {
        translateY: @wave1Y
      },
        delay: delay
        duration: wave1Time
        easing: 'ease-out'
        begin:=>
          @$wave1.show()

      .velocity {
        translateY: @wave1YStart
      },
        duration: wave1Time
        easing: 'ease-in'

    @$wave1Top.css 'transform-origin': 'center bottom'
    @$wave1Top.velocity {
      rotateX: -90
    },
      delay: delay + wave1Time
      duration: topRotateDur1
      complete:=> @$wave1Top.hide()

    @$wave1Top2.css 'transform-origin': 'center bottom'
    @$wave1Top2.velocity {
      rotateX: -180
      translateY: 4
    },
      delay: delay + wave1Time + .75*topRotateDur1
      duration: topRotateDur1

    @$creamTriangle2.velocity {
        rotateZ:    -5
        translateY: -45
        translateX: -40
      },
        duration: topRotateDur1
        delay: .88*(delay + wave1Time)

      .velocity {
        rotateZ:    -7
        translateY: -20
        translateX: -25
      },
        duration: topRotateDur1

  wave2:(delay)->
    wave2Time = 1500*@s
    topRotateDur2 = wave2Time/3
    @$wave2.velocity {
        translateY: @wave2Y
      },
        delay: delay
        duration: wave2Time
        easing: 'ease-out'
        begin:=> @$wave2.show()
        progress:($els, progress)=>
          if progress >= 0.375
            @$wave2Top3.hide()
            @$wave2Top3Rect.hide()

      .velocity {
        translateY: @wave2YStart
      },
        duration: wave2Time
        easing: 'ease-in'

    @$wave2Top.css 'transform-origin': 'center bottom'
    @$wave2Top.velocity {
      rotateX: -90
    },
      delay: delay + wave2Time
      duration: topRotateDur2

    @$wave2Top2.css 'transform-origin': 'center bottom'
    @$wave2Top2.velocity {
      rotateX: -180
      translateY: 4
    },
      delay: delay + wave2Time + .75*topRotateDur2
      duration: topRotateDur2

    @$creamTriangle2.velocity {
        rotateZ:    -12
        translateY: -80
        translateX: -90
      },
        duration: 1.2*topRotateDur2
        delay: 1000*@s
        easing: 'ease-out'

      .velocity {
        rotateZ:    -13
        translateY: 800
        translateX: 600
      },
        duration: 1

setTimeout =>
  new Main
, 500
