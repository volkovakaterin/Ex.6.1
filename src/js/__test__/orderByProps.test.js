/* eslint-disable linebreak-style */
import orderByProps from '../legend';

test('orderByProps', () => {
  const obj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const rule = ['name', 'level'];
  const objSort = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: '2' },
    { key: 'attack', value: '80' },
    { key: 'defence', value: '40' },
    { key: 'health', value: '10' },
  ];
  expect(orderByProps(obj, rule)).toEqual(objSort);
});
test('orderByProps1', () => {
  const obj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const rule = ['name', 'level'];
  const objSort = [
    { key: 'attack', value: '80' },
    { key: 'defence', value: '40' },
    { key: 'level', value: '2' },
    { key: 'name', value: 'мечник' },
    { key: 'health', value: '10' },
  ];
  expect(orderByProps(obj, rule)).not.toBe(objSort);
});
