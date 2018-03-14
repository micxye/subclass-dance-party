describe('pigDancer', function() {

  var pigDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    pigDancer = new PigDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(pigDancer.$node).to.be.an.instanceof(jQuery);
  });

  // it('should have a step function that makes its node blink', function() {
  //   sinon.spy(blinkyDancer.$node, 'toggle');
  //   blinkyDancer.step();
  //   expect(blinkyDancer.$node.toggle.called).to.be.true;
  // });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(pigDancer, 'step');
      expect(pigDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(pigDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(pigDancer.step.callCount).to.be.equal(2);
    });
  });

  it('should have a lineUp function that lines it up', function() {
    sinon.spy(pigDancer, 'lineUp');
    pigDancer.lineUp();
    expect(pigDancer.lineUp.called).to.be.true;
  });
});
