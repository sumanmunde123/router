import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export const HomePage = () => {
  const [showProducts, setShowProducts] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("http://localhost:8080/products")
      .then((res) => {
        setShowProducts(...showProducts, res.data);
      })
     
  };
  console.log(showProducts);

  return (
    <>
      <div
        style={{
          // display: "flex",
          justifyContent: "space-evenly",
          paddingTop: "100px",
        }}
        id="productsShow"
      >
        {/* Iterate over products and show links */}
        {showProducts.map((el) => {
          return (
            <>
              <div id="products">
                <img src={el.image} alt="images" />
                <Link to={`/products/${el.id}`}>more details</Link>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
