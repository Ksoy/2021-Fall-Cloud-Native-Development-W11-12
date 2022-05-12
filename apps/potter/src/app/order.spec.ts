import { basic_price, Order } from './order';

describe('Order', () => {
  it('should create an instance', () => {
    expect(new Order()).toBeTruthy();
  });

  it('order basic', () => {
    const order = new Order();
    expect(order.price).toBe(0);
  })

  it('order basic - b0 * 1', () => {
    const order = new Order();
    order.buy(0);
    expect(order.price).toBe(basic_price);
  })

  it('order basic - b1 * 1', () => {
    const order = new Order();
    order.buy(1);
    expect(order.price).toBe(basic_price);
  })

  it('order basic - b2 * 1', () => {
    const order = new Order();
    order.buy(2);
    expect(order.price).toBe(basic_price);
  })

  it('order basic - b3 * 1', () => {
    const order = new Order();
    order.buy(3);
    expect(order.price).toBe(basic_price);
  })

  it('order basic - b4 * 1', () => {
    const order = new Order();
    order.buy(4);
    expect(order.price).toBe(basic_price);
  })

  it('order basic - multiple same books - b1 * 3', () => {
    const order = new Order();
    order.buy(1);
    order.buy(1);
    order.buy(1);
    expect(order.price).toBe(basic_price * 3);
  })

});
