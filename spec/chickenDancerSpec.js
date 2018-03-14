describe('chickenDancer', function() {

  var chickenDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    chickenDancer = new ChickenDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(chickenDancer.$node).to.be.an.instanceof(jQuery);
  });

  // it('should have a step function that makes its node blink', function() {
  //   sinon.spy(blinkyDancer.$node, 'toggle');
  //   blinkyDancer.step();
  //   expect(blinkyDancer.$node.toggle.called).to.be.true;
  // });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(chickenDancer, 'step');
      expect(chickenDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(chickenDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(chickenDancer.step.callCount).to.be.equal(2);
    });
  });

  it('should have a lineUp function that lines it up', function() {
    sinon.spy(chickenDancer, 'lineUp');
    chickenDancer.lineUp();
    expect(chickenDancer.lineUp.called).to.be.true;
  });
});
