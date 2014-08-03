class Caleydoscope
  constructor:(@o={})->
    @vars()
    @run()

  vars:->
    @s = 1*h.time(1)
    @$velocityText = $('#js-velocity-text')
    @$blow         = $('#js-c-blow')
    @$caleydoscopePattern = $('#caleydoscope-pattern')
    @$caleydoscopeInner   = $('#js-caleydoscope-inner')
    @$caleydoscopeImage  = $('#js-caleydoscope-image')
    @$caleydoscopeImage2 = $('#js-caleydoscope-image2')
    @$caleydoscopeImage3 = $('#js-caleydoscope-image3')
    @$caleydoscopeImage4 = $('#js-caleydoscope-image4')
    @$caleydoscopeImage5 = $('#js-caleydoscope-image5')
    @$caleydoscopeImage6 = $('#js-caleydoscope-image6')
    @$caleydoscope = $('#js-caleydoscope')
    @$caleydoscopeWrap = $('#js-caleydoscope-wrapper')
    @$caleydoscopeEntire = $('#js-entire-caleydoscope')
    @$burst  = $('#js-caleydoscope-burst')
    @$burst2 = $('#js-caleydoscope-burst2')
    @delay = @o.delay or 0

  run:->
    $mask1 = $('#js-c-mask1')
    caleydDelay1 = 100*@s
    @$caleydoscopeEntire

    len = 21
    @$burst.children().each (i, item)=>
      $item = $ item
      $item.velocity {
        strokeDashoffset: 0
        },
          delay: 2300*@s + @delay
          duration: 200*@s

      .velocity {
        strokeDashoffset: -len
        }, duration: 200*@s

    len = 11
    @$burst2.children().each (i, item)=>
      $item = $ item
      $item.velocity {
        strokeDashoffset: 0
        },
          delay: 2500*@s + @delay
          duration: 200*@s

      .velocity {
        strokeDashoffset: -len
        }, duration: 200*@s

    $mask1.velocity {
      r: 75
    },
      delay: 1800*@s + caleydDelay1 + @delay
      duration: 500*@s
      # easing: 'easeOutElastic'

    @$velocityText.children().each (i, item)=>
      $item  = $(item)
      $item.css 'transform-origin': 'center center'
      length = $item[0].getTotalLength()
      size = 14
      x = if i < 5 then size*(5-i) else -size*i

      $item.velocity {
        strokeDasharray: length
        strokeDashoffset: length
        rotateY: if i % 1 is 0 then 90 else -90
        opacity: 0
        }, duration: 1

        .velocity {
          opacity: 1
          strokeDashoffset: 0
          rotateY: 0
        },
          duration: 1000*@s + h.rand(0, 100)*@s
          delay: 600*@s + h.rand(0, 500)*@s + @delay
          easing: 'linear'
          begin:=> if i is 0 then @$velocityText.show()

        .velocity {
          rotateZ: h.rand(25, 120)
          translateX: h.rand(-200, 200)
          translateY: h.rand(-200, 200)
          scale: 0
        },
          duration: 500*@s + h.rand(0, 100)*@s
          delay: caleydDelay1 + h.rand(0, 200)*@s + h.time(1000)
          complete:-> $item.hide()


    @$blow.children().each (i, item)=>
      $item  = $(item)
      $item.velocity {
        r:  if i is 0 then 55 else h.rand(10, 50)
        },
          duration: 1

        .velocity {
          translateY: h.rand(-150, 150)
          translateX: h.rand(-150, 150)
          r: 0
          rotateZ: h.rand(-100,100)
        },
          duration: 800*@s
          delay: 2500*@s + caleydDelay1 + h.rand(0, 600)*@s
          begin: =>
            i is 0 and @$blow.show()
            @$blow.css 'opacity': 1
            $mask1.css 'opacity': 0
          complete:-> $item.hide()

    $paths = @$caleydoscope.find('path')
    $paths.each (i, item)=>
      $path = $(item)
      length = $path[0].getTotalLength()
      $path.css 'transform-origin': 'center center'
      rotate = parseInt $path.attr('transform')?.match(/rotate\((.+?)\)/)[1], 10
      
      $path.velocity {rotateZ: rotate}, duration: 1
      .velocity {
        opacity: 1
        },
          delay: h.rand(1,150)*@s + i*150*@s + @delay
          duration: 900*@s

      .velocity {
        rotateZ: h.rand(-500,500)
        translateX: h.rand(-800,800)
        translateY: h.rand(-800,800)
        scale: 0
      },
        delay: 2000*@s - i*150*@s
        duration: 900*@s


    @$caleydoscope.css 'transform-origin': '640px 450px'
    @$caleydoscope.velocity {
      rotateZ: 360
      },
        duration: 6000*@s
        delay: @delay
        easing: 'linear'
        begin:=> @$caleydoscopeEntire.show()

    @$caleydoscopeInner.css 'transform-origin': 'center center'
    @$caleydoscopeInner.velocity {
      scale: .5
      },
        duration: 2000*@s
        delay: @delay
        easing: 'linear'

    # @$caleydoscopeImage.css 'transform-origin': 'center center'
    # @$caleydoscopeImage.velocity {
    #   translateX: -150
    #   translateY: -150
    # },
    #   loop: 0
    #   duration: 5000
    #   easing: 'ease'

    @$caleydoscopeImage2.css 'transform-origin': 'center center'
    @$caleydoscopeImage2.velocity {
      translateX: 150
      translateY: 150
    },
      loop: 0
      duration: 5000
      easing: 'ease'

    # @$caleydoscopeImage3.css 'transform-origin': 'center center'
    # @$caleydoscopeImage3.velocity {
    #   translateX: -150
    #   translateY: -150
    # },
    #   loop: 0
    #   duration: 5000
    #   easing: 'ease'

    # @$caleydoscopeImage4.css 'transform-origin': 'center center'
    # @$caleydoscopeImage4.velocity {
    #   translateX: 150
    #   translateY: 150
    # },
    #   loop: 0
    #   duration: 5000
    #   easing: 'ease'

    # @$caleydoscopeImage5.css 'transform-origin': 'center center'
    # @$caleydoscopeImage5.velocity {
    #   translateX: -150
    #   translateY: -150
    # },
    #   loop: 0
    #   duration: 5000
    #   easing: 'ease'

    # @$caleydoscopeImage6.css 'transform-origin': 'center center'
    # @$caleydoscopeImage6.velocity {
    #   translateX: 150
    #   translateY: 150
    # },
    #   loop: 0
    #   duration: 5000
    #   easing: 'ease'

window.Caleydoscope = Caleydoscope