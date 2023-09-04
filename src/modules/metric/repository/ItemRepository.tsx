import { Metric } from '../types/MetricTypes';

async function retrieveItems(): Promise<Metric[]> {
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

export { retrieveItems };
