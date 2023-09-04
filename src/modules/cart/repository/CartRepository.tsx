import { CartType } from '../types/CartTypes';

async function retrieveCart(): Promise<CartType[]> {
  return fetch(`https://fakestoreapi.com/carts/user/2`)
    .then((response) => response.json())
    .then((json) => {
      return json as CartType[];
    });
}

async function updateCart(cart: any): Promise<CartType[]> {
  debugger;
  return fetch('https://fakestoreapi.com/carts/3', {
    method: 'PUT',
    body: JSON.stringify(cart),
  }).then((res) => res.json());
}

export { retrieveCart, updateCart };
