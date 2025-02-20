import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Home.css';

interface HomeProps {
  products: any[];
  addToCart: (item: any) => void;
}

function Home({ products, addToCart }: HomeProps) {
  const [currentPage, _] = useState(1);
  const productsPerPage = 10;

  const handleAddToCart = (item: any) => {
    addToCart(item);
  };

  const categories = [...new Set(products.map((product) => product.category))];

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  // Change page

  if (!products || products.length === 0) {
    return <div className="home">No products available.</div>;
  }

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
              <h3>{product.title}</h3>
              <p>{product.description.substring(0, 100)}...</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      <div className="categories">
        {categories.map((category) => (
          <div key={category} className="category-row">
            <h3>{category}</h3>
            <div className="products-grid">
              {products
                .filter((product) => product.category === category)
                .slice(indexOfFirstProduct, indexOfLastProduct)
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
