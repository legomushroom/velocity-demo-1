class Svg
  constructor:(@o={})->
    @vars()
    @run()

  vars:->
    @delay = @o.delay or 0

    @$div = $('<div />')
    @$circles = $('#js-svg-circles')
    @$s = $('#js-svg-s')
    @$g = $('#js-svg-g')
    @$t = $('#js-svg-t')

  run:->
    @hider()

    @changeS()
    @runG()
    @runT()

  runT:->
    @$t.css 'transform-origin': 'center center'
    arr = []
    points =  @$t.attr('d').split /\,|M|L|\s/
    for point,i in points
      if point and point isnt 'Z'
        arr.push parseInt point, 10
    console.log arr
    @$t.velocity {
      rotateY: 80
      },
        progress:()=>
          console.log arguments
          @$t.attr 'd', "M#{arr[0]},#{arr[1]} L#{arr[2]},#{arr[3]} L#{arr[4]},#{arr[5]} L#{arr[6]},#{arr[7]} Z"
    
    .velocity {
      rotateY: 0
    }, easing: 'easeOutElastic'


  changeS:->
    @$s.velocity {
      'translateY': -194
      'translateX': -52
      },
        duration: h.time 1000
        delay:    h.time 800
        easing:   'easeOutBounce'
        complete:=>
          @$s.velocity {
            'translateY': 0
            'translateX': 0
            },
              duration: 1
          @changeS()

  runG:->
    @isRunG = !@isRunG
    @$g.css 'transform-origin': 'center center'
    @$g.velocity {
      scaleX: if @isRunG  then 1.25 else 1
      scaleY: if !@isRunG then 1.25 else 1
      # rotateZ: h.rand(-20,20)
      },
        duration: h.time 400

    .velocity {
      scaleX:  1
      scaleY:  1
      rotateZ: 0
      },
        duration: h.time 400
        complete:=> @runG()


  hider:->
    @$circles.children().each (i, item)=>
      $item = $(item)
      data = $item.data()
      x = data.x
      y = data.y

      $item.velocity {
        translateX: x
        translateY: y
        },
          duration: 1
          delay: @delay
          begin:=>
            !@isCircles and @$circles.show()
            @isCircles = true

      .velocity {
        r: h.rand(150,300)
        rotateZ: h.rand(20,70)
        translateX: x
        translateY: y
        }

window.Svg = Svg