const assert = require('assert');
const api = require('../backend/api.js');
const events = require('../backend/events.js');

// Arrange-Act-Assert pattern: test events list
function testEvents() {
  // Arrange: set up req and res
  const req = {};
  let jsonOutput;
  const res = {
    json(data) {
      jsonOutput = data;
    },
  };

  // Act: call the events function
  api.events(req, res);

  // Assert: check that the events are returned
  assert.deepStrictEqual(jsonOutput, events);
  console.log('testEvents passed');
}

// Arrange-Act-Assert pattern: test single event by id
function testEvent() {
  // Arrange: set up req with param object because api uses req.param.eventId
  const eventId = 1;
  const req = { param: { eventId } };
  let jsonOutput;
  const res = {
    json(data) {
      jsonOutput = data;
    },
  };

  // Act: call the event function
  api.event(req, res);

  // Assert: check that the specific event is returned
  assert.deepStrictEqual(jsonOutput, events[eventId]);
  console.log('testEvent passed');
}

testEvents();
testEvent();
