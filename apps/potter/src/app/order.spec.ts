import { Order } from './order';

describe('Order', () => {
  it('should create an instance', () => {
    expect(new Order()).toBeTruthy();
  });

  it('order basic', () => {
    const order = new Order();
    expect(order.price).toBe(0);
  })
});
