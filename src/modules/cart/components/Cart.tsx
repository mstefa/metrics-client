import { useItemsContext } from '../../items/context/ItemsContext';
import { useCart } from '../hooks/useCart';
import { ItemCartDetailsType } from '../types/CartTypes';
import { CartItem } from './CartItem';

export function Cart() {
  const { cart, increaseQuantity } = useCart();
  const { items } = useItemsContext();

  const enrichCartItem = (
    id: string,
    quantity: number
  ): ItemCartDetailsType | null => {
    const item = items.find((item) => item.id === id);
    return item ? { ...item, quantity } : null;
  };

  return (
    <div>
      {!cart.products
        ? 'loading..'
        : cart.products.map((e) => {
            const item = enrichCartItem(e.productId, e.quantity);
            return item ? <CartItem key={e.productId} {...item} /> : null;
          })}
    </div>
  );
}
