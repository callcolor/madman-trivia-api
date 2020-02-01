import assert from 'assert';
import app from '../../src/app';

describe('\'answers\' service', () => {
  it('registered the service', () => {
    const service = app.service('answers');

    assert.ok(service, 'Registered the service');
  });

  it('accepts an answer', () => {
    const service = app.service('answers');
    service.create({}, null).then(response => {
      assert.equal(response.isCorrect, true);
    });
  })
});
