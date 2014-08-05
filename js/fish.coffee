class Fish
  constructor:(@o={})->
    @vars()
    @run()

  vars:->
    @delay = @o.delay or 0
    @s = 1*h.time 1

    @$bottomSplash1 = $('#js-bottom-splash1')
    @$bottomSplash2 = $('#js-bottom-splash2')

    @$topSplash1 = $('#js-top-splash1')
    @$topSplash2 = $('#js-top-splash2')
    @$scene      = $('#js-fish-scene')

    @$fish       = $('#js-fish')
    @$fishEntire = $('#js-fish-scene')
    @$fish.css 'transform-origin': 'center center'
    @$fish.velocity {
      translateX: 35
      translateY: 390
      }, duration: 1

    @$shadow  = $('#js-fish-shadow')
    @$shadow.css 'transform-origin': 'center center'
    @$shadow.velocity {
      translateX: 45
      translateY: 390
      }, duration: 1

    @$fishW = $('#js-fish-wrapper')

  run:->
    delayForSplash = 100
    @splash()
    @$fish.velocity {
      translateX: 30
      translateY: -150
      },
        duration: 1600*@s
        easing: 'ease-in-out'
        delay:  100*@s + delayForSplash*@s + @delay
        begin:=> @$fishEntire.show()

    @$shadow.velocity {
      translateX: 40
      translateY: 200
      scale: .65
      opacity: .05
      },
        duration: 800*@s
        easing: 'ease-in'
        delay:  100*@s + delayForSplash*@s + @delay

    .velocity {
      translateX: 30
      translateY: -150
      scale: 1
      opacity: .2
      },
        duration: 600*@s
        easing: 'ease-out'

  splash:()->
    @$splash1 = $('#js-clip-splash1')
    @$splash1Top = $('#js-clip-top-splash1')

    @$splash1.css 'transform-origin': 'center center'
    @$splash1.velocity {
      scale: 0
      }, duration: 1

    .velocity {
      scale: 1
      },
        duration: 400*@s
        delay: @delay + 200*@s
        easing: 'linear'

    .velocity {
      scale: 0
      },
        duration: 500*@s
        easing: 'linear'

    @$splash1Top.css 'transform-origin': 'center center'
    @$splash1Top.velocity {
      scale: 0
      }, duration: 1

    .velocity {
      scale: 1
      },
        duration: 400*@s
        delay: @delay + 200*@s
        easing: 'linear'

    .velocity {
      scale: 0
      translateY: -20
      },
        duration: 500*@s
        easing: 'linear'


    @$splash2 = $('#js-clip-splash2')
    @$splash2Top = $('#js-clip-top-splash2')

    @$splash2.css 'transform-origin': 'center center'
    @$splash2.velocity {
      scale: 0
      }, duration: 1

    .velocity {
      scale: 1
      # translateY: -10
      # rotateZ: 10
      },
        duration: 200*@s
        delay: @delay + 1000*@s
        easing: 'linear'

    .velocity {
      scale: 0
      },
        duration: 300*@s
        easing: 'linear'

    @$splash2Top.css 'transform-origin': 'center center'
    @$splash2Top.velocity {
      scale: 0
      }, duration: 1

    .velocity {
      scale: 1
      translateY: 20
      rotateZ: 10
      },
        duration: 200*@s
        delay: @delay + 930*@s
        easing: 'linear'

    .velocity {
      scale: 0
      },
        duration: 300*@s
        easing: 'linear'


    @$topSplash = $('#js-top-splash')
    bubbleRadius = 20
    @$topSplash.children().each (i,item)=>
      $item = $ item
      $item.velocity {
        translateX: h.rand(-bubbleRadius,bubbleRadius)
        translateY: h.rand(0,bubbleRadius)
        r: 10
        },
          duration: 700*@s
          delay: @delay + 500*@s

      $item.velocity {
        translateX: h.rand(-5*bubbleRadius,5*bubbleRadius)
        translateY: h.rand(-5*bubbleRadius,5*bubbleRadius)
        r: 0
        },
          duration: 500*@s
          delay:    h.rand(50,100)*@s
          # complete:-> $item.hide()

    @$bottomSplash = $('#js-bottom-splash')
    bubbleRadius = 20
    @$bottomSplash.children().each (i,item)=>
      $item = $ item
      $item.velocity {
        translateX: h.rand(-bubbleRadius,bubbleRadius)
        translateY: h.rand(0,bubbleRadius)
        r: 10
        },
          duration: 300*@s
          delay: @delay

      $item.velocity {
        translateX: h.rand(-5*bubbleRadius,5*bubbleRadius)
        translateY: h.rand(-5*bubbleRadius,5*bubbleRadius)
        r: 0
        },
          duration: 800*@s
          delay:    h.rand(50,100)*@s
          # complete:-> $item.hide()


window.Fish = Fish