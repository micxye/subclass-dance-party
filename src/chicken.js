var ChickenDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('ChickenDancer');
  
}

ChickenDancer.prototype = Object.create(Dancer.prototype);
ChickenDancer.prototype.constructor = ChickenDancer;

ChickenDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  //this.$node.toggle();
  //it will waggle
}