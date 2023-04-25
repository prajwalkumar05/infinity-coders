import { Card, Button } from "react-bootstrap";
import { CartState } from "../context/Context";
import Rating from "./Rating";

const SingleProduct = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div className="products">
      <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gray-300 h-64 flex items-center justify-center">
          <img
            className="w-full h-full object-cover"
            src={prod.image}
            alt="Product"
          />
        </div>
        <div className="px-4 py-2 sm:px-6 sm:py-4">
          <h2 className="text-gray-900 font-bold text-2xl mb-2">{prod.name}</h2>
          <p className="text-gray-700 text-base mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </p>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="rounded-full bg-green-500 text-white font-bold px-3 py-1 text-sm mr-2">
                <span>₹ {prod.price.split(".")[0]}</span>
              </div>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-yellow-500 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 1l2.928 6.196L19 7.327l-4.214 4.1.993 6.115L10 16.318l-5.778 3.224.993-6.115L1 7.327l5.072-.131L10 1z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gray-600 font-bold">
                <Rating rating={prod.ratings} />
              </span>
            </div>
          </div>
          {cart.some((p) => p.id === prod.id) ? (
            <button
              style={{ border: "1px solid #000", padding: "6px 20px" }}
              variant="danger"
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: prod,
                })
              }
            >
              Remove from Cart
            </button>
          ) : (
            <button
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: prod,
                })
              }
              disabled={!prod.inStock}
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              {!prod.inStock ? "Out of Stock" : "Add to Cart"}
            </button>
          )}
        </div>
      </div>

      
    </div>
  );
};

export default SingleProduct;
