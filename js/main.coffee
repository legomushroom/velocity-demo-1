class Main
  constructor:->
    @vars()
    @run()

  vars:->
    @s = 1
    @$pattern      = $('#flowers-cream-pattern')
    @$dust         = $('#js-dust')
    @$owlsImage    = $('#js-owls-image')
    @$flowersCream = $('#js-flowers-cream')
    @$sliceLine    = $('#js-slice-line')
    @$divSparks    = $('#js-div-sparks')
    @$creamTriangle1 = $('#js-cream-triangle1').css 'transform': 'translate(490px,300px)'
    @$creamTriangle2 = $('#js-cream-triangle2')
    @$creamTriangles = $('#js-cream-triangles')
    @$creamTriangleWrapper = $('#js-cream-triangle2-wrapper').css 'transform': 'translate(490px,300px)'

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


     @$creamTriangle2.velocity
        rotateX: 90
      ,
        duration: 800*@s
        delay: @start + 1200*@s
        easing: 'easeOutBounce'
        begin:=>
          @$creamTriangle2.css transformOrigin: '50% 100%'

    @$divSparks.velocity
        translateX: 235 - translateSize/5
        translateY: 50 + translateSize/5
      ,
        duration: 3*@dur
        delay:    @start
        easing: 'easeOutElastic'
        begin:=> @$divSparks.show()


    @start = @start - 50*@s
    @dur = 50*@s
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
          delay: @start + h.rand(1,300)*@s + i*20*@s
          duration: @dur + h.rand(50,100)*@s
          begin:=>
            @$divSparks.show()

setTimeout =>
  new Main
, 500
