class Mushroom
  constructor:(@o={})->
    @vars()
    $('<div />').velocity {
      p:1
      },
        duration: @delay
        complete:=> @run()

  vars:->
    @delay = @o.delay or 0
    @s = 1*h.time(1)

    @$m = $('#js-mushroom')
    @$mEntire = $('#js-entire-mushroom')
    @$text1 = $('#js-mush-text1')
    @$text2 = $('#js-mush-text2')

  run:->
    $childs = @$m.children()
    len = $childs.length
    $childs.each (i, child)=>
      $brick = $ child
      $brick
      .velocity {
        # translateX: h.rand(-100,100)
        translateY: h.rand(-0,-200)
        opacity: 0
        },
          duration: duration: 1
          easing: 'linear'

      .velocity {
        translateX: 0
        translateY: 0
        opacity: 1
        },
          duration: 800*@s
          delay: (len-i-1)*15*@s
          easing: 'easeOutBounce'
          begin:=>
            i is 1 and @$mEntire.show()
            i is 1 and console.log 'aa'

    @$text1.velocity {
      opacity: 1
      },
        delay: 1200*@s
        duration: 800*@s

    @$text2.velocity {
      opacity: 1
      },
        delay: 1800*@s
        duration: 800*@s



window.Mushroom = Mushroom