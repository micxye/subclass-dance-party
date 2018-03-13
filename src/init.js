$(document).ready(function() {
  window.dancers = [];

  $('.addAlpacaButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('BlinkyDancer');
    console.log('clicked on alpaca')

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var blinkyDancer = new BlinkyDancer(
      939 * Math.random(),
      1086 * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(blinkyDancer);
    $('body').append(blinkyDancer.$node);
  });

  $('.addChickenButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('ChickenDancer');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var chickenDancer = new ChickenDancer(
      939 * Math.random(),
      1086 * Math.random(),
      5000
    );
    window.dancers.push(chickenDancer);
    $('body').append(chickenDancer.$node);

  });

  $('.addPigButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('PigDancer');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    
    var pigDancer = new PigDancer(
      939 * Math.random(),
      1086 * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(pigDancer);
    $('body').append(pigDancer.$node);
      
    //check for this pig's coordinates
    var top = pigDancer.currentTop;
    var left = pigDancer.currentLeft;
    //loop through existing dancers
    for (var i=0; i<window.dancers.length-1; i++) {
      var currentDancerTop = window.dancers[i].currentTop;
      var currentDancerLeft = window.dancers[i].currentLeft;
      if (Math.abs(top-currentDancerTop) < 100 && Math.abs(left-currentDancerLeft) < 100 ) {
        // console.log('close!');
        window.dancers[i].fly();
        $(window.dancers[i].$node).fadeOut("slow");
      }
      
    }
    

  });

  $('.lineUpButton').on('click', function(event) {
    // $.each(window.dancers, function(dancer){
    //   console.log(dancer);
    // })
    var pigCount = 0;
    var chickenCount = 0;
    var blinkyCount = 0;
    for (var i = 0; i < window.dancers.length; i++) {
      if (window.dancers[i].constructor === PigDancer) {
        pigCount++;
        window.dancers[i].lineUp(250 + 50 * pigCount);
      } else if (window.dancers[i].constructor === ChickenDancer) {
        chickenCount++;
        window.dancers[i].lineUp(250 + 50 * chickenCount);
      } else if (window.dancers[i].constructor === BlinkyDancer) {
        blinkyCount++;
        window.dancers[i].lineUp(250 + 50 * blinkyCount);
      }
    }
  });
  
  $(document).on('mouseenter', '.blinkyDancer', function() {
    $(this).children('img').remove();
    $(this).prepend('<img id="alpacaMouseover" src="alpacaMouseover.gif"/>');
  });
  
});

