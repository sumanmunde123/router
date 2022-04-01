import { Link, Navigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
// import { NotFoundPage } from "./NotFoundPage";

export const ProductsDetailsPage = () => {
  const { id } = useParams();
  
  const [product, setProduct] = useState([]);
  const [notFound, setNotfound] = useState(false);
  let ans = product.details;

  useEffect(() => {
    getPrdoducts();
  }, []);

  const getPrdoducts = () => {
    axios
      .get(`http://localhost:8080/products/${id}`)
      .then(({ data }) => {
        setProduct(data);
      })
      .catch((err) => {
        setNotfound(true);
      });
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          paddingTop: "50px",
          justifyContent: "center",
          textAlign: "left",
        }}
      >
        {notFound ? (
          <Navigate to={"/notfound"} />
        ) : (
          <>
            {" "}
            <img src={product.image} alt="" />
            <div className="productDetails" style={{ padding: "20px" }}>
              <div>
                <h2 className="productName">{product.name}</h2>
                <h5 className="productPrice">Price : {product.price}</h5>
              </div>
              <h5>Specifications : </h5>
              <div style={{ width: "700px", paddingLeft: "30px" }}>
                {/* Show Product specification here */}
                {/* {ans.map((e) => {
              return (
                <>
                  <p>{e}</p>
                </>
              );
            })} */}
                <p>{ans}</p>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
