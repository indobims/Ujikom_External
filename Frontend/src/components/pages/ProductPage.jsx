import React, { useState, useEffect } from "react";
import axios from "axios";
import "../style/style.css";
import NavbarUser from './NavbarUser';
import NavbarComp from './NavbarComp';
import FootersB from "./FooterB";
import { useHistory } from "react-router-dom";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const history = useHistory();
  const token = sessionStorage.getItem('token');
  const email = sessionStorage.getItem('email');

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      const response = await axios.get("http://localhost:5000/product");
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuy = async (id) => {
    try {
      const email = sessionStorage.getItem('email');
      const token = sessionStorage.getItem('token');
  
      if (!email || !token) {
        history.push("/login");
        return;
      }
  
      const response = await axios.get(`http://localhost:5000/product/$${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (response.status === 200) {
        history.push(`/payment/${id}`);
      } else {
        // Handle error case
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        history.push("/login");
      } else {
        // Handle other errors
      }
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filterProducts = (products, type) => {
    return products
      .filter((product) => product.jenis === type)
      .filter((product) => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.harga.toString().includes(searchTerm)
      );
  };

  const renderProductsByType = (type) => {
    const filteredProducts = filterProducts(products, type);

    if (filteredProducts.length === 0) {
      return null;
    }

    const productTypeClass = type === "Barang" ? "product-type-barang" : "product-type-jasa";

    return (
      <div className={`product-type-container ${productTypeClass}`}>
        <h2 className="product-type">{type === "Barang" ? "BimsPetShop Food" : "BimsPetShop Service"}</h2>
        <div className="card-grid">
          {filteredProducts.map((product) => (
            <div className="card has-background-cyan animated-card" key={product.id} style={{ position: 'relative', overflow: 'hidden' }}>
              <div className="card-image">
                <div align="center" className="product-item">
                  <img
                    src={product.url}
                    alt="Image"
                    className="centered-image"
                    style={{
                      width: '100%',
                      height: '200px',
                      objectFit: 'contain',
                      padding: '10px'
                    }}
                  />
                </div>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">{product.name}</p>
                    <p className="subtitle is-6">Rp {product.harga}</p>
                  </div>
                </div>
              </div>
              <footer className="card-footer">
                <button
                  onClick={() => handleBuy(product.id)}
                  className="card-footer-item buy-button"
                >
                  Buy
                </button>
              </footer>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  return (
    <div>
      {token && email ? <NavbarUser /> : <NavbarComp />}
      <div className="container mt-5">
        <div className="search-container" style={{ marginBottom: '20px' }}>
          <input
            type="text"
            placeholder="Search products by name or price..."
            value={searchTerm}
            onChange={handleSearch}
            style={{
              width: '100%',
              padding: '10px',
              fontSize: '16px',
              borderRadius: '5px',
              border: '1px solid #ddd'
            }}
          />
        </div>
        <div className="columns is-multiline mt-2">
          <div className="column is-full">
            {renderProductsByType("Barang")}
            {renderProductsByType("jasa")}
          </div>
        </div>
        <section>
          <FootersB />
        </section>
      </div>
    </div>
  );
};

export default ProductPage;
