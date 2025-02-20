import { useState } from 'react';

type AddProductFormProps = {
  addProduct: (product: {
    id: number;
    name: string;
    price: number;
    quantity: number;
  }) => void;
};

function AddProductForm({ addProduct }: AddProductFormProps) {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState(0);
  const [productQuantity, setProductQuantity] = useState(0);

  const onAddProduct = () => {
    addProduct({
      id: Date.now(),
      name: productName,
      price: productPrice,
      quantity: productQuantity,
    });
    setProductName('');
    setProductPrice(0);
    setProductQuantity(0);
  };

  return (
    <>
      <label htmlFor="product-Input">Add Product: </label>
      <input
        id="product-Input"
        type="text"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        placeholder="Product Name"
      />
      <input
        type="number"
        value={productPrice}
        onChange={(e) => setProductPrice(Number(e.target.value))}
        placeholder="Product Price"
      />
      <input
        type="number"
        value={productQuantity}
        onChange={(e) => setProductQuantity(Number(e.target.value))}
        placeholder="Product Quantity"
      />
      <button onClick={onAddProduct}>Add</button>
    </>
  );
}

export default AddProductForm;
