import React, { useState, useEffect } from 'react';
import { getcredentials, getaccesstoken, getproducts } from './api';
import productlist from './components/productlist';
import sort from './components/sort';

function App() {
  const [products, setProducts] = useState([]);
  const [company, setCompany] = useState('AMZ');
  const [category, setCategory] = useState('Laptop');
  const [top, setTop] = useState(10);
  const [minPrice, setMinPrice] = useState(1);
  const [maxPrice, setMaxPrice] = useState(10000);
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const fetchCredentialsAndToken = async () => {
      const credentials = await getcredentials();
      if (credentials) {
        const token = await getaccesstoken(credentials.clientID, credentials.clientSecret);
        setAccessToken(token);
      }
    };

    fetchCredentialsAndToken();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      if (accessToken) {
        const result = await getproducts(company, category, top, minPrice, maxPrice, accessToken);
        console.log('Fetched products:', result);
        setProducts(result);
      }
    };

    fetchProducts();
  }, [company, category, top, minPrice, maxPrice, accessToken]);

  return (
    <div className="App">
      <h1>Top {top} Products</h1>
      <sort
        company={company} setCompany={setCompany}
        category={category} setCategory={setCategory}
        top={top} setTop={setTop}
        minPrice={minPrice} setMinPrice={setMinPrice}
        maxPrice={maxPrice} setMaxPrice={setMaxPrice}
      />
      <productlist products={products} />
      <div>
        <h2>Fetched Products</h2>
        <pre>{JSON.stringify(products, null, 2)}</pre>
      </div>
    </div>
  );
}

export default App;
