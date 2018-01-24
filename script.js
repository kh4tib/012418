(function($) {
    var ctrl = new ScrollMagic.Controller({
      globalSceneOptions: {
        triggerHook: 'onLeave'
      }
    });
    
    $('div').each(function() {
      
      var name = $(this).attr('class');
      
      new ScrollMagic.Scene({
        triggerElement: this
      })
      .setPin(this)
      .addIndicators({
        colorStart: "rgba(255,255,255,0.5)",
        colorEnd: "rgba(255,255,255,0.5)", 
        colorTrigger : "rgba(255,255,255,1)",
        name:name
      })
      .addTo(ctrl)
    });
    
    
  })(jQuery);
  
    
    
    
  
  
  
    
    
    
    
  