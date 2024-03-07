import React, { useState, useEffect } from "react";
import axios from "axios";

// Custom hook for fetching data
function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMess, setErrorMess] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setErrorMess("Error fetching data.");
        setLoading(false);
      }
    };

    fetchData();
  }, [url]); // Fetch data when URL changes

  return { data, loading, errorMess };
}

export default function Show() {
  const { data: products, loading, errorMess } = useFetch(
    "http://localhost:3001/products"
  );

  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleOutOfStock = () => {
    const outOfStockProducts = products.filter((p) => p.quantity === 0);
    console.log(outOfStockProducts);
    setFilteredProducts(outOfStockProducts);
  };

  return (
    <div className="w-75 m-auto">
      <h1>Products Show</h1>
      {loading ? (<><div className="d-flex align-items-center justify-content-center w-100 h-100">
        <i className="fa fa-spinner"></i></div>
     </> ) : (
        <>
          <div className="row row-cols-lg-3 row-cols-md-2">
            {(filteredProducts.length > 0 ? filteredProducts : products).map(
              (item) => (
                <div
                  key={item.id}
                  className="card"
                  style={{ minHeight: "330px" }}
                >
                  <img
                    src={item.imgUrl}
                    className="card-img-top"
                    alt="..."
                    style={{ height: "200px" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.price}</p>
                    <p className="card-text">
                      {item.quantity === 0 ? (
                        <span className="badge rounded-pill bg-danger text-light">
                          outOfStock
                        </span>
                      ) : (
                        <p>{item.quantity}</p>
                      )}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
          <button
            className="btn btn-dark w-100 mt-3"
            onClick={handleOutOfStock}
          >
            Filter out of stock
          </button>
        </>
      )}
      {errorMess && <div className="alert alert-danger">{errorMess}</div>}
    </div>
  );
}
