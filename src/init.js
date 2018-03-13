$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
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

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var blinkyDancer = new BlinkyDancer(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
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
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 500
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
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(pigDancer);
    $('body').append(pigDancer.$node);
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
        window.dancers[i].lineUp(500 + 50 * pigCount);
      } else if (window.dancers[i].constructor === ChickenDancer) {
        chickenCount++;
        window.dancers[i].lineUp(500 + 50 * chickenCount);
      } else if (window.dancers[i].constructor === BlinkyDancer) {
        blinkyCount++;
        window.dancers[i].lineUp(500 + 50 * blinkyCount);
      }
    }
  });
});

