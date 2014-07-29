class Tribits
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
    @$bits1 = $('#js-tri-bits1')
    @$bits2 = $('#js-tri-bits2')
    @$bits3 = $('#js-tri-bits3')
    # @$entire = $('#js-entire-tri-bits')

  run:->
    @runBits1()
    @runBits2()
    @runBits3()

  runBits3:->
    @$bits3.children().each (i, bit)=>
      $bit = $ bit
      $bit.css 'transform-origin': 'center center'
      $bit.velocity {
        translateY: 800 + h.rand -150, 150
        translateX: -800  + h.rand -150, 150
        rotateZ: h.rand(-600,600)
        },
          duration: 150*@s
          delay: h.rand(0, 15)*@s
          easing: 'ease-in'
          begin:-> $bit.show()
  
  runBits2:->
    @$bits2.children().each (i, bit)=>
      $bit = $ bit
      $bit.css 'transform-origin': 'center center'
      $bit.velocity {
        translateY: -600 + h.rand -150, 150
        translateX: 600  + h.rand -150, 150
        rotateZ: h.rand(-600,600)
        },
          duration: 150*@s
          delay: h.rand(0, 25)*@s
          easing: 'ease-in'
          begin:-> $bit.show()

  runBits1:->
    @$bits1.children().each (i, bit)=>
      $bit = $ bit
      dur = 1400*@s + h.rand(0, 200)*@s
      $bit.css 'transform-origin': 'center center'
      .velocity {
        translateY: -320
        translateX: h.rand 0,-50
        rotateZ: h.rand(-950, 950)
        }, duration: 1
      .velocity {
        translateY: 0
        rotateZ: 0
        translateX: 0
        },
          easing: 'easeOutBounce'
          duration: dur
          delay: h.rand(0, 200)*@s
          begin:-> $bit.show()

      $child = $bit.children()
      $child
      .css 'transform-origin': 'center center'
      .velocity {
        # translateY: -100
        translateX: -280
        }, duration: 1

      .velocity {
        translateY: 0
        translateX: h.rand(-50,50)
        },
          # delay: 500*@s
          duration: dur + 300*@s
          easing: 'ease-out'
          # easing: 'linear'
          begin:-> $child.show()




window.Tribits = Tribits