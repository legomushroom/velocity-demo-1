class Fish
  constructor:(@o={})->
    @vars()
    $('<div />').velocity {
      p: 1
      },
        duration: @delay
        complete:=> @run()

  vars:->
    @delay = @o.delay or 0
    @s = 1*h.time 1

    @$bottomSplash1 = $('#js-bottom-splash1')
    @$bottomSplash2 = $('#js-bottom-splash2')

    @$topSplash1 = $('#js-top-splash1')
    @$topSplash2 = $('#js-top-splash2')
    @$scene      = $('#js-fish-scene')

    @$fish  = $('#js-fish')
    @$fish.css 'transform-origin': 'center center'
    @$fish.velocity {
      translateX: 35
      translateY: 390
      }, duration: 1

    @$fishW = $('#js-fish-wrapper')

  run:->
    delayForSplash = 100
    @splash
      delayForSplash: delayForSplash
      splash1: @$bottomSplash1
      splash2: @$bottomSplash2

    setTimeout =>
      @splash
        delayForSplash: delayForSplash
        splash1: @$topSplash1
        splash2: @$topSplash2
    , 750*@s

    @$fish.velocity {
      translateX: 30
      translateY: -150
      },
        duration: 1600*@s
        easing: 'linear'
        delay:  100*@s + delayForSplash*@s

  splash:(o)->
    bubbleRadius = 20
    o.splash1.children().each (i,item)=>
      $item = $ item
      if i > 5 and i < 12
        $item.velocity {
          translateX: h.rand(-bubbleRadius,bubbleRadius)
          translateY: h.rand(0,bubbleRadius)
          r: 10
          },
            duration: 300*@s

        $item.velocity {
          translateX: h.rand(-5*bubbleRadius,5*bubbleRadius)
          translateY: h.rand(-5*bubbleRadius,5*bubbleRadius)
          r: 0
          },
            duration: 800*@s
            delay:    h.rand(50,100)*@s
            complete:-> $item.hide()

      else
        $item.velocity {
          translateX: h.rand(-bubbleRadius,bubbleRadius)
          translateY: h.rand(0,bubbleRadius)
          r: h.rand(15, 20)
          },
            duration: 300*@s + h.rand(50,100)*@s
            delay: h.rand(50,150)*@s + o.delayForSplash*@s

        $item.velocity {
          translateX: 0
          translateY: 0
          r: 0
          rotateZ: h.rand(-100,100)
          },
            duration: 800*@s
            complete:-> $item.hide()

    o.splash2.children().each (i,item)=>
      $item = $ item
      $item.velocity {
        translateX: h.rand(-bubbleRadius,bubbleRadius)
        translateY: h.rand(-bubbleRadius,0)
        r: h.rand(10, 15)
        },
          duration: 300*@s
          delay: h.rand(50,150)*@s + o.delayForSplash*@s

      $item.velocity {
        translateX: 0
        translateY: 0
        r: 0
        rotateZ: h.rand(-100,100)
        },
          duration: 800*@s
          complete:-> $item.hide()

window.Fish = Fish