var PigDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('pigDancer');
  this.$node.prepend('<img id="pig" src="pig.png"/>');
}

PigDancer.prototype = Object.create(Dancer.prototype);
PigDancer.prototype.constructor = PigDancer;

PigDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  // this.$node.toggle();
  

  //  function beeLeft() {
  //       this.$node.animate({left: "-=150"}, 500, "swing");
  //   }
  //   function beeRight() {
  //       this.$node.animate({left: "+=150"}, 500, "swing");
  //   }

  // beeRight.call(this);
  // beeLeft.call(this);
  var rotation = function (){
    this.$node.rotate({
      angle:0,
      animateTo:360,
      callback: rotation
    });
  }
  rotation.call(this);
}

PigDancer.prototype.lineUp = function(top) {
  Dancer.prototype.lineUp.call(this, top, 1000);
}