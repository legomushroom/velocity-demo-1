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
    new Spriter 
      sprites:  @$dust.children()
      duration: 800
      delay:    275

    @$flowersCream.velocity
        y: 300
      ,
        duration: 300*@s
        easing: 'ease-in'
    
    @$sliceLine.velocity
        rotateZ: 315
        scale: 1
        opacity: 100
        width: 600
        transformOrigin: '50% 50%'
      ,
        delay: 1000

new Main
