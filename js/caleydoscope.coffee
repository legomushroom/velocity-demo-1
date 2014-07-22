class Caleydoscope
  constructor:(@o={})->
    @vars()
    $('<div />').velocity {
      p: 1
      },
        duration: @delay
        complete:=> @$caleydoscopeEntire.show(); @run()

  vars:->
    @s = 1*h.time(1)
    @$velocityText = $('#js-velocity-text')
    @$blow         = $('#js-c-blow')
    @$caleydoscopePattern = $('#caleydoscope-pattern')
    @$caleydoscopeImage = $('#js-caleydoscope-image')
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

    len = 20
    @$burst.children().each (i, item)=>
      $item = $ item
      $item.velocity {
        strokeDashoffset: 0
        },
          delay: 2300*@s
          duration: 200*@s

      .velocity {
        strokeDashoffset: -len
        }, duration: 200*@s

    len = 10
    @$burst2.children().each (i, item)=>
      $item = $ item
      $item.velocity {
        strokeDashoffset: 0
        },
          delay: 2500*@s
          duration: 200*@s

      .velocity {
        strokeDashoffset: -len
        }, duration: 200*@s

    $mask1.velocity {
      r: 75
    },
      delay: 1800*@s + caleydDelay1
      duration: 600*@s
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
          delay: 600*@s + h.rand(0, 500)*@s
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
        r:  if i is 0 then 75 else h.rand(10, 50)
        },
          delay: 1350*@s + h.rand(0, 500)*@s
          duration: 400*@s + h.rand(0, 300)*@s

        .velocity {
          translateY: h.rand(-150, 150)
          translateX: h.rand(-150, 150)
          r: 0
          rotateZ: h.rand(-100,100)
        },
          duration: 800*@s
          delay: 400*@s + caleydDelay1 + h.rand(0, 300)*@s
          begin: =>
            @$blow.css 'opacity': 1
            $mask1.css 'opacity': 0
          complete:-> $item.hide()

    $paths = @$caleydoscope.find('path')
    $paths.each (i, item)=>
      $path = $(item)
      length = $path[0].getTotalLength()
      $path
        .velocity {
          opacity: 1
        },
          delay: h.rand(1,150)*@s + i*150*@s
          duration: 900


    @$caleydoscope.css 'transform-origin': 'center center'
    @$caleydoscope.velocity {
      rotateZ: 720
      },
        duration: 12000*@s
        easing: 'linear'


    @$caleydoscopeImage.css 'transform-origin': 'center center'
    @$caleydoscopeImage.velocity {
      translateX: -150
      translateY: -150
    },
      loop: 0
      duration: 5000
      easing: 'ease'

    @$caleydoscopeImage2.css 'transform-origin': 'center center'
    @$caleydoscopeImage2.velocity {
      translateX: 150
      translateY: 150
    },
      loop: 0
      duration: 5000
      easing: 'ease'

    @$caleydoscopeImage3.css 'transform-origin': 'center center'
    @$caleydoscopeImage3.velocity {
      translateX: -150
      translateY: -150
    },
      loop: 0
      duration: 5000
      easing: 'ease'

    @$caleydoscopeImage4.css 'transform-origin': 'center center'
    @$caleydoscopeImage4.velocity {
      translateX: 150
      translateY: 150
    },
      loop: 0
      duration: 5000
      easing: 'ease'

    @$caleydoscopeImage5.css 'transform-origin': 'center center'
    @$caleydoscopeImage5.velocity {
      translateX: -150
      translateY: -150
    },
      loop: 0
      duration: 5000
      easing: 'ease'

    @$caleydoscopeImage6.css 'transform-origin': 'center center'
    @$caleydoscopeImage6.velocity {
      translateX: 150
      translateY: 150
    },
      loop: 0
      duration: 5000
      easing: 'ease'

window.Caleydoscope = Caleydoscope