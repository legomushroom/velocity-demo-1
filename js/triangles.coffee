class Triangles
  constructor:(@o={})->
    @vars()

    $('<div />').velocity {
      p: 0
    },
      duration: @delay
      complete:=> @$triangles.show(); @run()

  vars:->
    @delay = @o.delay or 0
    @s = 1*h.time(1)
    @$pattern      = $('#flowers-cream-pattern')
    @$dust         = $('#js-dust')
    @$svg          = $('#js-svg')
    
    @$owlsPattern2 = $('#js-owls-image2')
    
    @$owlsImage    = $('#js-owls-image')
    @$flowersCream = $('#js-flowers-cream')
    @$sliceLine    = $('#js-slice-line')
    
    @$sliceLine.css 'transform-origin': '640px 450px'
    @$sliceLine.velocity {
      rotateZ: 120
      }, duration: 1
    @$divSparks    = $('#js-div-sparks')

    @$triangles    = $('#js-triangles')

    @$creamTriangle1 = $('#js-cream-triangle1')
      .css 'transform': 'translate(490px,300px)'

    @$creamTriangle2 = $('#js-cream-triangle2')
    @$creamTriangles = $('#js-cream-triangles')

    @blowDelay = 250

    @$s = $('#js-svg-s')
    @$v = $('#js-svg-v')
    @$g = $('#js-svg-g')
    @$sW = $('#js-svg-s-wrapper')
    @$vW = $('#js-svg-v-wrapper')
    @$gW = $('#js-svg-g-wrapper')

    @$svgTextW = $('#js-svg-text-wrapper')
    @$gradientWrapper = $('#js-gradient-wrapper')

    @$creamTriangleWrapper = $('#js-cream-triangle2-wrapper')
      .css 'transform': 'translate(490px,300px)'

  run:->
    @start = 0*@s
    @dur = @start + 300*@s
    @$flowersCream.velocity {y: 300},
      duration: @dur
      delay:    @start
      easing: 'ease-in'

    @start = @start + 275*@s
    @dur = 800*@s
    new Spriter
      sprites:  @$dust.children()
      duration: @dur
      delay:    @start

    @start = @start + @dur - 600*@s
    @dur = 400*@s
    @$sliceLine.velocity {
      rotateZ: 315
      scale: 1
      opacity: 100
      width: 600
      },
        delay: @start
        duration: @dur

    @start = @start + @dur + 200*@s
    @dur = 30*@s
    translateSize = 20
    @$creamTriangles.velocity {
      translateY: 2*translateSize
      translateX: 2*translateSize
      },
        duration: @dur
        delay:    @start
        begin:=>
          @$sliceLine.hide()
          @$creamTriangles.show()
          @$flowersCream.hide()

      .velocity {
        translateY: 0
        translateX: 0
        },
          duration: 10*@dur
          easing: 'easeOutElastic'

    @$creamTriangle1.css 'transform-origin': '50px'
    # @$creamTriangle1.css 'transform-origin': '50% 50%'
    @$creamTriangle1.velocity {
      translateX: 490
      translateY: 300
      },
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
        opacity: if h.isFF() then 0 else 1
        transformOrigin: '100px'
      ,
        duration: 36*@dur
        easing: 'linear'

    @$divSparks.velocity {
      translateX: 235 - translateSize/8
      translateY: 50 + translateSize/8
      },
        duration: 3*@dur
        delay:    @start
        easing: 'easeOutElastic'
        begin:=> @$divSparks.show()

    @start = @start - 50*@s
    @dur = 100*@s
    @$divSparks.children().each (i, item)=>
      $item = $(item)
      length = $item[0].getTotalLength()
      $item.velocity {'strokeDasharray': length}, duration: 1

        .velocity
          'strokeDashoffset': if i is 3 then -length else length
        ,
          delay: @start + h.rand(1,50)*@s + i*20*@s
          duration: @dur
          begin:=>
            @$divSparks.show()
          complete:-> $item.hide()

    @blow()

  blow:->
    @$gW.css 'transform-origin': '640px 450px'
    @$gW.velocity {
      translateX: 1800
      translateY: 1000
      rotateZ: h.rand(500,1000)
      },
        duration: 2000*@s
        delay: @blowDelay*@s
        easing: 'ease-out'

    @$vW.css 'transform-origin': '400px 400px'
    @$vW.velocity {
      translateY: 2000
      translateX: -60
      rotateZ: h.rand(500,1000)
      },
        duration: 1200*@s
        delay: @blowDelay*@s
        easing: 'ease-out'

    @$svgTextW.css 'transform-origin': '650px 650px'
    @$svgTextW.velocity {
      translateY: 2000
      translateX: -20
      rotateZ: h.rand(500,1000)
      },
        duration: 800*@s
        delay: (@blowDelay+50)*@s
        easing: 'ease-out'
        complete:=> @$svg.hide()

    @$gradientWrapper.css 'transform-origin': '640px 700px'
    @$gradientWrapper.velocity {
      translateX: -1600
      # translateY: 50
      rotateZ: 100
      },
        duration: 1200*@s
        delay: @blowDelay*@s
        easing: 'ease-out'
        begin:=>
          @$s.velocity('stop')
          @$v.velocity('stop')
          @$g.velocity('stop')




window.Triangles = Triangles