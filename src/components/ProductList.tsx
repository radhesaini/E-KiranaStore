import ProductItem from './ProductItem';

type ProductListProps = {
  products: { id: number; name: string; price: number; quantity: number }[];
};

function ProductList({ products }: ProductListProps) {
  return (
    <ul>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ul>
  );
}

export default ProductList;
