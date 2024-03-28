import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/ProductActions";
import "./../../src/App.css";

// import { RootState } from "../redux/store"; // Assuming you have RootState defined in your Redux store

type Product = {
  image: string;
  title: string;
  price: number;
  category: string;
  description: string;
};

const ProductDetails: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const product: Product = useSelector((state: any) => state.product);
  const dispatch = useDispatch();

  const fetchProductDetail = async (id: string) => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      dispatch(selectedProduct(response.data));
    } catch (err) {
      console.log("Err: ", err);
    }
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [dispatch, productId]);

  return (
    <>
      <h1>Product Details</h1>
      <div className="container">
        <div className="box">
          {Object.keys(product).length === 0 ? (
            <div>...Loading</div>
          ) : (
            <div className="ui placeholder segment">
              <div className="ui two column stackable center aligned grid">
                <div
                  className="middle aligned row"
                  style={{ display: "flex", alignItems: "flex-end" }}
                >
                  <div className="column lp">
                    <img
                      className="ui fluid image"
                      src={product.image}
                      alt={product.title}
                      style={{ height: "500px", width: "500px" }}
                    />
                  </div>
                  <div
                    className=""
                    style={{ marginBottom: "100px", paddingBottom: "4px" }}
                  >
                    <button className="sale">SALE</button>
                    <h5 style={{ color: "#03a9f4" }}>{product.category}</h5>
                    <h1>{product.title}</h1>
                    <h2>
                      <div>
                        <br />
                        <a>${product.price}</a>
                        <br />
                      </div>
                    </h2>
                    <br />
                    <div
                      style={{
                        borderTop: " 3px dotted #bbb",
                        padding: "9px",
                        color: "#eceff1",
                      }}
                    ></div>

                    <br />
                    <div style={{ display: "flex", gap: 200 }}>
                      <p>Size</p>
                      <button className="size">Choose your Size ^</button>
                    </div>
                    <br />
                    <div style={{ display: "flex", gap: 180 }}>
                      <p>Quantity</p>
                      <button className="button1">- 1 +</button>
                    </div>
                    <br />
                    <div
                      style={{
                        borderTop: " 3px dotted #bbb",
                        padding: "9px",
                        color: "#eceff1",
                      }}
                    ></div>

                    <div style={{ display: "flex", gap: 150 }}>
                      <div className="addcart">
                        <div className="hidden content">
                          <i className="shop icon"></i>
                        </div>
                        <div style={{ background: "#ffc107", color: "black" }}>
                          Add to Cart
                        </div>
                      </div>
                      <div className="buynow">
                        <div
                          className="visible content"
                          style={{ background: "#4caf50", color: "white" }}
                        >
                          Buy Now
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="paregaraph">
                  <p>Description: {product.description}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
