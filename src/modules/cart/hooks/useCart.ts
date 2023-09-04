import { useEffect, useState } from "react";
import { retrieveItem } from "../../items/repository/ItemRepository";
import { retrieveCart, updateCart } from "../repository/CartRepository";
import { CartType } from "../types/CartTypes";

export const useCart = () => {
  
  const [cart, setCart] = useState({} as CartType);

  useEffect(() => {

    retrieveCart().then(
      carts => setCart(carts[0])
    )

  }, []);

  const increaseQuantity = ((productId: string) =>
  {
    const products = cart.products.map(item => {
      if (item.productId === productId){
        item.quantity++
      }
      return item
    })

    updateCart({...cart, products})
    .then(()=> retrieveCart())
    .then(carts => setCart(carts[0]))
  })

  return {cart, increaseQuantity}
}