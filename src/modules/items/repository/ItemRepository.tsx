import { ItemType } from '../types/ItemTypes';

async function retrieveItems(): Promise<ItemType[]> {
  return fetch(`https://fakestoreapi.com/products`)
    .then((response) => response.json())
    .then((json) =>
      json.map(
        (e: {
          id: string;
          title: string;
          price: number;
          category: string;
          description: string;
          image: any;
        }) => {
          return {
            id: e.id,
            title: e.title,
            price: e.price,
            category: e.category,
            description: e.description,
            imgUrl: e.image,
          };
        }
      )
    );
}

async function retrieveItem(id: string): Promise<ItemType> {
  return fetch(`https://fakestoreapi.com/products/${id}`)
    .then((response) => response.json())
    .then((e) => {
      return {
        id: e.id,
        title: e.title,
        price: e.price,
        category: e.category,
        description: e.description,
        imgUrl: e.image,
      };
    });
}

export { retrieveItems, retrieveItem };

//{"id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men's clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating":{"rate":3.9,"count":120}},
