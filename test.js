var expect = require('chai').expect
  , split = require('./')

describe('split', function() {

  it('should split string into array', function() {
    expect(split('.')('foo.bar')).to.be.eql(['foo', 'bar'])
  })

})