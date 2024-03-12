import { restaurants, Restaurant } from './restaurants'
import { orders, Order, PriceBracket } from './orders'

/// Add your getMaxPrice() function below:
function getMaxPrice(price: PriceBracket): number {
  switch (price) {
    case PriceBracket.Low:
      return 10.0
    case PriceBracket.Medium:
      return 20.0
    case PriceBracket.High:
      return 30.0
  }
}

/// Add your getOrders() function below:
function getOrders(price: PriceBracket, orders: Order[][]): Order[][] {
  const filtredOrder: Order[][] = []

  orders.forEach((restaurantOrder: Order[]) => {
    const result = restaurantOrder.filter(
      (order: Order) => order.price <= getMaxPrice(price),
    )
    filtredOrder.push(result)
  })
  return filtredOrder
}

/// Add your printOrders() function below:
function printOrders(restaurants: Restaurant[], orders: Order[][]) {
  restaurants.forEach((restaurant: Restaurant, index: number) => {
    if (orders[index].length > 0) {
      console.log(restaurant.name)
      orders[index].forEach((order: Order) =>
        console.log(`- ${order.name}: $${order.price}`),
      )
    }
  })
}

/// Main
const elligibleOrders = getOrders(PriceBracket.Medium, orders)

printOrders(restaurants, elligibleOrders)
