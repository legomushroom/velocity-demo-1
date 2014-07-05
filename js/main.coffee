class Main
  constructor:->
    @vars()
    setTimeout =>
      @run()
    , 200*@s

  vars:->
    @s = 1
    @$pattern      = $('#flowers-cream-pattern')
    @$dust         = $('#js-dust')
    @$owlsImage    = $('#js-owls-image')
    @$flowersCream = $('#js-flowers-cream')
    @$sliceLine    = $('#js-slice-line')

  run:->
    @start = 0
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


    @start = @start + @dur
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

new Main
