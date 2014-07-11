

class Main
  constructor:->
    @vars()
    @run()

  vars:->
    @s = 1
    @$pattern      = $('#flowers-cream-pattern')
    @$dust         = $('#js-dust')
    @$blow         = $('#js-c-blow')
    @$caleydoscopePattern = $('#caleydoscope-pattern')
    @$caleydoscopeImage = $('#js-caleydoscope-image')
    @$caleydoscopeImage2 = $('#js-caleydoscope-image2')
    @$caleydoscopeImage3 = $('#js-caleydoscope-image3')
    @$caleydoscopeImage4 = $('#js-caleydoscope-image4')
    @$caleydoscopeImage5 = $('#js-caleydoscope-image5')
    @$caleydoscopeImage6 = $('#js-caleydoscope-image6')
    @$caleydoscope = $('#js-caleydoscope')
    @$owlsPattern2 = $('#js-owls-image2')
    @$velocityText = $('#js-velocity-text')
    
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

    new Waves delay: h.time(2300)
    @caleydoscope(5000*@s)

  caleydoscope:(delay)->
    $mask1 = $('#js-c-mask1')
    caleydDelay1 = 100*@s

    $mask1.velocity {
      r: 50
    },
      delay: delay + 1900*@s + caleydDelay1
      duration: 800*@s
      easing: 'easeOutElastic'

    @$velocityText.children().each (i, item)=>
      $item  = $(item)
      $item.css 'transform-origin': 'center center'
      length = $item[0].getTotalLength()
      size = 14
      x = if i < 5 then size*(5-i) else -size*i

      $item.velocity {
          strokeDasharray: length
          strokeDashoffset: length
          scale:  0
        },
          duration: 1

        .velocity {
          opacity: 100
          strokeDashoffset: 0
          scale:  1
        },
          duration: 1000*@s + h.rand(0, 100)*@s
          delay: delay + 2000*@s + h.rand(0, 500)*@s
          easing: 'easeOutElastic'

        .velocity {
          rotateZ: h.rand(25, 120)
          translateX: h.rand(-200, 200)
          translateY: h.rand(-200, 200)
          scale: 0
        },
          duration: 500*@s + h.rand(0, 100)*@s
          delay: caleydDelay1 + h.rand(0, 200)*@s

    @$blow.children().each (i, item)=>
      $item  = $(item)
      $item.velocity {
          r:  if i is 0 then 50 else h.rand(10, 50)
        },
          delay: delay + 2000*@s + h.rand(0, 500)*@s
          duration: 400*@s + h.rand(0, 100)*@s

        .velocity {
          translateY: h.rand(-150, 150)
          translateX: h.rand(-150, 150)
          r: 0
        },
          duration: 800*@s
          delay: 400*@s + caleydDelay1 + h.rand(0, 300)*@s
          begin: =>
            @$blow.css 'opacity': 1
            $mask1.hide()

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
