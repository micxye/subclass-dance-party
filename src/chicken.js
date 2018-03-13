var ChickenDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('chickenDancer');
  this.$node.prepend('<img id="chicken" src="chickenImage.png"/>');
};

ChickenDancer.prototype = Object.create(Dancer.prototype);
ChickenDancer.prototype.constructor = ChickenDancer;

ChickenDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  //this.$node.toggle();
  //it will waggle

  //  function beeLeft() {
  //       this.$node.animate({left: this.currentLeft - 10}, 250, "swing");
  //   }
  //   function beeRight() {
  //       this.$node.animate({left: this.currentLeft + 10}, 250, "swing");
  //   }

  // beeRight.call(this);
  // beeLeft.call(this);

  // this.$node.rotate({animateTo: +45});
  // this.$node.rotate({animateTo: +45});

  var rotation = function (){
    this.$node.rotate({
      angle:0,
      animateTo:45,
      callback: rotation
    });
  };

  rotation.call(this);
};

ChickenDancer.prototype.lineUp = function(top) {

  Dancer.prototype.lineUp.call(this, top, 100);
  this.currentLeft = 100;
  this.currentTop = top;
};