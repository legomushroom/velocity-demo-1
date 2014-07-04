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
    setTimeout =>
      @$owlsImage.velocity
          opacity: 1
        ,
          duration: 1500

      $currDust = null
      $prevDust = null
      $dustChilds = @$dust.children()
      s = @s
      $dustChilds.each (i, item)->
        $prevDust = $currDust
        $currDust = $(item)
        do ($prevDust, $currDust, i, $dustChilds, s)->
          setTimeout =>
            $prevDust?.hide()
            $currDust.show()
            if i is $dustChilds.length-1
              setTimeout =>
                $currDust.hide()
              , 80

          , (i*80*s)
    , 275*@s

    @$flowersCream.velocity
        y: 300
      ,
        duration: 300*@s
        easing: 'ease-in'
    
    @$sliceLine.velocity
        rotateZ: 45
        opacity: 0
      ,
        duration: 1

    @$sliceLine.velocity
        rotateZ: 315
        scale: 1
        opacity: 100
        width: 600
        transformOrigin: '50% 50%'
      ,
        delay: 800

new Main