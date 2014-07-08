class Main
  constructor:->
    @vars()
    @run()

  vars:->
    @s = 1
    @$pattern      = $('#flowers-cream-pattern')
    @$dust         = $('#js-dust')
    @$caleydoscopePattern = $('#caleydoscope-pattern')
    @$caleydoscopeImage = $('#js-caleydoscope-image')
    @$caleydoscopeImage2 = $('#js-caleydoscope-image2')
    @$caleydoscopeImage3 = $('#js-caleydoscope-image3')
    @$caleydoscopeImage4 = $('#js-caleydoscope-image4')
    @$caleydoscopeImage5 = $('#js-caleydoscope-image5')
    @$caleydoscopeImage6 = $('#js-caleydoscope-image6')
    @$caleydoscope = $('#js-caleydoscope')

    @$wave1        = $('#js-wave1')
    @$wave1Top     = $('#js-wave1-top')
    @$wave1Top2    = $('#js-wave1-top2')

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

    @$divSparks.velocity
        translateX: 235 - translateSize/8
        translateY: 50 + translateSize/8
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

    # @wave2(2300*@s)
    # @wave1(4000*@s)
    # @caleydoscope(4500*@s)
    @caleydoscope(50*@s)


  wave1:(delay)->
    wave1Time = 1200*@s
    topRotateDur1 = wave1Time/4
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
      easing: 'ease-out'
      complete:=> @$wave1Top.hide()

    @$wave1Top2.css 'transform-origin': 'center bottom'
    @$wave1Top2.velocity {
      rotateX: -180
      translateY: 4
    },
      delay: delay + wave1Time + .95*topRotateDur1
      easing: 'ease-out'
      duration: topRotateDur1


  wave2:(delay)->
    wave2Time = 1500*@s
    topRotateDur2 = wave2Time/4
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
      delay: delay + wave2Time + .95*topRotateDur2
      duration: topRotateDur2

    @$creamTriangle2.velocity {
        rotateZ:    -12
        translateY: -80
        translateX: -90
      },
        duration: 2*topRotateDur2
        delay: delay + 700*@s
        easing: 'ease-out'

      .velocity {
        rotateZ:    -12
        translateY: 800
        translateX: 800
      },
        duration: 1

  caleydoscope:(delay)->

    $('#js-c-mask1').velocity {
      r: 152
    },
      delay: delay + 1600*@s
      duration: 400*@s
      easing: 'ease-out'

    $('#js-c-mask2').velocity {
      r: 152
      opacity: 100
    },
      delay: delay + 1600*@s
      duration: 400*@s
      easing: 'ease-out'

    $paths = $('#js-c-mask-fwirework').find('path')

    $paths.each (i, item)=>
      $path = $(item)
      length = $path[0].getTotalLength()
      $path.velocity {
        strokeDasharray: length
        strokeDashoffset: length
      },
        duration: 1

      $path
        .velocity {
          strokeDashoffset: 0
        },
          delay: h.rand(1,500)*@s + delay + 1200*@s + i*50*@s
          duration: 400

        .velocity {
          strokeDashoffset: 2*length
        },
          duration: 400


    $paths = @$caleydoscope.find('path')
    $paths.each (i, item)=>
      $path = $(item)
      length = $path[0].getTotalLength()
      $path
        .velocity {
          opacity: 1
        },
          delay: h.rand(1,150)*@s + i*150*@s + delay
          duration: 900


    @$caleydoscope.css 'transform-origin': 'center center'
    @$caleydoscope.velocity {
      rotateZ: 720
      },
        duration: 12000
        easing: 'linear'
        delay: delay


    @$caleydoscopeImage.css 'transform-origin': 'center center'
    @$caleydoscopeImage.velocity {
      translateX: -150
      translateY: -150
    },
      loop: 2
      duration: 5000
      easing: 'ease'
      delay: delay

    @$caleydoscopeImage2.css 'transform-origin': 'center center'
    @$caleydoscopeImage2.velocity {
      translateX: 150
      translateY: 150
    },
      loop: 2
      duration: 5000
      easing: 'ease'
      delay: delay

    @$caleydoscopeImage3.css 'transform-origin': 'center center'
    @$caleydoscopeImage3.velocity {
      translateX: -150
      translateY: -150
    },
      loop: 2
      duration: 5000
      easing: 'ease'
      delay: delay

    @$caleydoscopeImage4.css 'transform-origin': 'center center'
    @$caleydoscopeImage4.velocity {
      translateX: 150
      translateY: 150
    },
      loop: 2
      duration: 5000
      easing: 'ease'
      delay: delay

    @$caleydoscopeImage5.css 'transform-origin': 'center center'
    @$caleydoscopeImage5.velocity {
      translateX: -150
      translateY: -150
    },
      loop: 2
      duration: 5000
      easing: 'ease'
      delay: delay

    @$caleydoscopeImage6.css 'transform-origin': 'center center'
    @$caleydoscopeImage6.velocity {
      translateX: 150
      translateY: 150
    },
      loop: 2
      duration: 5000
      easing: 'ease'
      delay: delay

setTimeout =>
  new Main
, 500
