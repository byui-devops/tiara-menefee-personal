const events = require('../backend/events');

test('events module exports an array', () => {
  expect(Array.isArray(events)).toBe(true);
});

test('events array contains data', () => {
  expect(events.length).toBeGreaterThan(0);
});

test('each event has required properties', () => {
  events.forEach(event => {
    expect(event).toHaveProperty('id');
    expect(event).toHaveProperty('title');
    expect(event).toHaveProperty('date');
  });
});

test('event IDs are unique', () => {
  const ids = events.map(event => event.id);
  const uniqueIds = [...new Set(ids)];
  expect(uniqueIds.length).toBe(ids.length);
});

//Data validation Unit Tests