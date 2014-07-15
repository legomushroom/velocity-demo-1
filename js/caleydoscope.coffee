class Caleydoscope
  constructor:(@o={})->
    @vars()
    @run()

  vars:->
    @s = h.time(1)
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
    @delay = @o.delay or 0

  run:->
    $mask1 = $('#js-c-mask1')
    caleydDelay1 = 100*@s

    $mask1.velocity {
      r: 75
    },
      delay: @delay + 1900*@s + caleydDelay1
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
        # scale:  0
        }, duration: 1

        .velocity {
          opacity: 1
          strokeDashoffset: 0
          # scale:  1
        },
          duration: 1000*@s + h.rand(0, 100)*@s
          delay: @delay + 0*@s + h.rand(0, 500)*@s
          easing: 'linear'

        .velocity {
          rotateZ: h.rand(25, 120)
          translateX: h.rand(-200, 200)
          translateY: h.rand(-200, 200)
          scale: 0
        },
          duration: 500*@s + h.rand(0, 100)*@s
          delay: caleydDelay1 + h.rand(0, 200)*@s + h.time(1000)

    @$blow.children().each (i, item)=>
      $item  = $(item)
      $item.velocity {
        r:  if i is 0 then 75 else h.rand(10, 50)
        },
          delay: @delay + 1400*@s + h.rand(0, 500)*@s
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
            $mask1.hide()

    $paths = @$caleydoscope.find('path')
    $paths.each (i, item)=>
      $path = $(item)
      length = $path[0].getTotalLength()
      $path
        .velocity {
          opacity: 1
        },
          delay: h.rand(1,150)*@s + i*150*@s + @delay
          duration: 900


    @$caleydoscope.css 'transform-origin': 'center center'
    @$caleydoscope.velocity {
      rotateZ: 720
      },
        duration: 12000
        easing: 'linear'
        delay: @delay


    @$caleydoscopeImage.css 'transform-origin': 'center center'
    @$caleydoscopeImage.velocity {
      translateX: -150
      translateY: -150
    },
      loop: 2
      duration: 5000
      easing: 'ease'
      delay: @delay

    @$caleydoscopeImage2.css 'transform-origin': 'center center'
    @$caleydoscopeImage2.velocity {
      translateX: 150
      translateY: 150
    },
      loop: 2
      duration: 5000
      easing: 'ease'
      delay: @delay

    @$caleydoscopeImage3.css 'transform-origin': 'center center'
    @$caleydoscopeImage3.velocity {
      translateX: -150
      translateY: -150
    },
      loop: 2
      duration: 5000
      easing: 'ease'
      delay: @delay

    @$caleydoscopeImage4.css 'transform-origin': 'center center'
    @$caleydoscopeImage4.velocity {
      translateX: 150
      translateY: 150
    },
      loop: 2
      duration: 5000
      easing: 'ease'
      delay: @delay

    @$caleydoscopeImage5.css 'transform-origin': 'center center'
    @$caleydoscopeImage5.velocity {
      translateX: -150
      translateY: -150
    },
      loop: 2
      duration: 5000
      easing: 'ease'
      delay: @delay

    @$caleydoscopeImage6.css 'transform-origin': 'center center'
    @$caleydoscopeImage6.velocity {
      translateX: 150
      translateY: 150
    },
      loop: 2
      duration: 5000
      easing: 'ease'
      delay: @delay

window.Caleydoscope = Caleydoscope