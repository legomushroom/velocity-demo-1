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

    @$bottomSplash  = $('#js-bottom-splash')
    @$bottomSplash2 = $('#js-bottom-splash2')

    @$fish  = $('#js-fish')
    @$fish.css 'transform-origin': 'center center'
    @$fish.velocity {
      translateX: 35
      translateY: 390
      }, duration: 1

    @$fishW = $('#js-fish-wrapper')

  run:->
    position = @$fishW.attr('transform').split /translate\(|,|\)/
    startX = parseInt position[1], 10
    startY = parseInt position[2], 10

    bubbleRadius = 20
    delayForSplash = 100
    @$bottomSplash.children().each (i,item)=>
      $item = $ item
      if i > 5 and i < 12
        $item.velocity {
          translateX: h.rand(-bubbleRadius,bubbleRadius)
          translateY: h.rand(0,bubbleRadius)
          r: h.rand(5, 20)
          },
            duration: 400*@s

        $item.velocity {
          translateX: h.rand(-5*bubbleRadius,5*bubbleRadius)
          translateY: h.rand(-5*bubbleRadius,5*bubbleRadius)
          r: 0
          },
            duration: 700*@s
            delay:    h.rand(50,100)*@s
      else
        $item.velocity {
          translateX: h.rand(-bubbleRadius,bubbleRadius)
          translateY: h.rand(0,bubbleRadius)
          r: h.rand(15, 20)
          },
            duration: 300*@s + h.rand(50,100)*@s
            delay: h.rand(50,150)*@s + delayForSplash*@s

        $item.velocity {
          translateX: 0
          translateY: 0
          r: 0
          rotateZ: h.rand(-100,100)
          },
            duration: 800*@s


    @$bottomSplash2.children().each (i,item)=>
      $item = $ item
      $item.velocity {
        translateX: h.rand(-bubbleRadius,bubbleRadius)
        translateY: h.rand(-bubbleRadius,0)
        r: h.rand(10, 15)
        },
          duration: 300*@s
          delay: h.rand(50,150)*@s + delayForSplash*@s

      $item.velocity {
        translateX: 0
        translateY: 0
        r: 0
        rotateZ: h.rand(-100,100)
        },
          duration: 800*@s


    @$fish.velocity {
      translateX: 30
      translateY: -150
      },
        duration: 2000*@s
        easing: 'linear'
        delay:  100*@s + delayForSplash*@s

    # @$fishW.velocity {
    #   opacity: 100
    #   translateX: startX - 20
    #   translateY: startY - 40
    #   },duration: 1

    #   .velocity {
    #     opacity: 100
    #     translateX: startX - 170
    #     translateY: startY - 340
    #     },
    #       duration: 4000*@s
    #       easing: 'linear'



window.Fish = Fish