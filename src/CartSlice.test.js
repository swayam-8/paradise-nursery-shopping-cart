import { describe, it, expect } from 'vitest';
import reducer, { addItem, removeItem, increaseQuantity, decreaseQuantity, selectCartCount, selectCartTotal } from './CartSlice.jsx';
import { plants, categories } from './plants.js';
const plant = plants[0];
describe('shopping cart', () => {
 it('adds only one entry per plant and calculates quantities and totals', () => {
  let cart = reducer(undefined, addItem(plant));
  cart = reducer(cart, addItem(plant));
  expect(cart.items).toHaveLength(1);
  cart = reducer(cart, increaseQuantity(plant.id));
  expect(selectCartCount({cart})).toBe(2);
  expect(selectCartTotal({cart})).toBe(plant.price * 2);
  cart = reducer(cart, decreaseQuantity(plant.id));
  expect(cart.items[0].quantity).toBe(1);
  cart = reducer(cart, decreaseQuantity(plant.id));
  expect(cart.items).toHaveLength(0);
 });
 it('removes an item without affecting other plants and allows adding it again', () => {
  let cart = reducer(undefined, addItem(plant));
  cart = reducer(cart, addItem(plants[1]));
  cart = reducer(cart, removeItem(plant.id));
  expect(cart.items.map(item=>item.id)).toEqual([plants[1].id]);
  cart = reducer(cart, addItem(plant));
  expect(selectCartCount({cart})).toBe(2);
  expect(selectCartTotal({cart})).toBe(plant.price+plants[1].price);
 });
 it('contains six unique plants in each of three categories', () => {
  expect(categories).toHaveLength(3);
  expect(new Set(plants.map(plant=>plant.name)).size).toBe(18);
  categories.forEach(category=>expect(plants.filter(plant=>plant.category===category)).toHaveLength(6));
 });
});
