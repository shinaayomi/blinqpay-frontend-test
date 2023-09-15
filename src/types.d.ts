interface IProduct {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  rating: { rate: number; count: number };
  category: string;
}

interface IProductProps {
  products: IProduct[];
}
