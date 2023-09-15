import HomePage from "@/layouts/HomePage";

export async function getServerSideProps() {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return { props: { products } };
}

export default function Home({ products }: IProductProps) {
  return (
    <main>
      <HomePage products={products} />
    </main>
  );
}
