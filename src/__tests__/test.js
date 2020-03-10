import orderByProps from '../js/app';

test('Успешно', () => {
  const received = orderByProps(
    {
      name: 'лучник',
      health: 40,
      level: 2,
      attack: 90,
      defence: 10,
      power: 70,
      mind: 120,
    }, ['name', 'level'],
  );

  const expected = [
    { key: 'name', value: 'лучник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 90 },
    { key: 'defence', value: 10 },
    { key: 'health', value: 40 },
    { key: 'mind', value: 120 },
    { key: 'power', value: 70 },
  ];

  expect(received).toEqual(expected);
});
