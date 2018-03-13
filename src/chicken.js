var ChickenDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('chickenDancer');
  this.$node.prepend('<img id="chicken" src="chickenImage.jpg"/>');
}

ChickenDancer.prototype = Object.create(Dancer.prototype);
ChickenDancer.prototype.constructor = ChickenDancer;

ChickenDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  //this.$node.toggle();
  //it will waggle

   function beeLeft() {
        this.$node.animate({left: "-=20"}, 500, "swing");
    }
    function beeRight() {
        this.$node.animate({left: "+=20"}, 500, "swing");
    }

  beeRight.call(this);
  beeLeft.call(this);
}

ChickenDancer.prototype.lineUp = function(top) {
  this.setPosition(top, 500);
}