import { Carousel } from 'react-bootstrap';
import './Home.css';
import '../index.css';
// import AddProductForm from './AddProductForm';
// Define the Product type
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

// Define the Product type
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
interface HomeProps {
  products: Product[];
  addToCart: (item: Product) => void;
  // addProductHandler: (newProduct: any) => void;
}

function Home({
  products,
  addToCart,
  //  addProductHandler
}: HomeProps) {
  const handleAddToCart = (item: Product) => {
    addToCart(item);
  };

  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <div className="home">
      <Carousel slide={true} interval={3000}>
        {products.slice(0, 3).map((product) => (
          <Carousel.Item key={product.id}>
            <img
              className="d-block w-100"
              src={product.image}
              alt={product.title}
              style={{ height: '400px', objectFit: 'contain' }}
            />
            <Carousel.Caption>
              <h3 style={{ color: 'blue', fontWeight: 800 }}>
                {product.title}
              </h3>
              <p style={{ color: 'red' }}>
                {product.description.substring(0, 100)}...
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      {/* <AddProductForm addProduct={addProductHandler} /> */}
      <div className="categories">
        {categories.map((category) => (
          <div key={category} className="category-row">
            <h3>{category}</h3>
            <div className="products-grid">
              {products
                .filter((product) => product.category === category)
                .map((product) => (
                  <div key={product.id} className="product-item">
                    <img src={product.image} alt={product.title} />
                    <h4>{product.title}</h4>
                    <p>${product.price}</p>
                    <button
                      className="add-to-cart"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
