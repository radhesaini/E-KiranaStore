type ProductItemProps = {
  product: { id: number; name: string; price: number; quantity: number };
};

function ProductItem({ product }: ProductItemProps) {
  return (
    <li className="product-item">
      <div className="details">
        {product.name} - ${product.price} - {product.quantity} pcs
      </div>
      <div className="actions">
        <i className="fas fa-edit"></i>
        <i className="fas fa-trash-alt"></i>
      </div>
    </li>
  );
}

export default ProductItem;
