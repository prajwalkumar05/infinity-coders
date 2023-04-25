import { useEffect, useState } from "react";
import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { CartState } from "../context/Context";
import Rating from "./Rating";
import { db } from "../../Firebase/config";
import { collection, doc, onSnapshot } from "firebase/firestore";
import Model from "../../components/Model";

const Cart = () => {
  const colRef = doc(db, "points", "mgkgNShWPN746F3OGZye");
  const col = collection(db, "points");

  const [points, setPoints] = useState(0);
  const [model, setModel] = useState(false);
  console.log(model)

  useEffect(() => {
    onSnapshot(col, (snap) => {
      let data = [];
      snap.docs.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      console.log(data);
      setPoints(data[0].value);
    });
  }, []);

  const {
    state: { cart },
    dispatch,
  } = CartState();
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  return (
    <>
    {model ? <Model points={points} model={model} setModel={setModel} /> : null}
      <div className="2xl:container 2xl:mx-auto py-14 px-4 md:px-6 xl:px-20">
        <div className="flex flex-col xl:flex-row justify-center items-center space-y-10 xl:space-y-0 xl:space-x-8">
          <div className="w-full lg:w-9/12 xl:w-full">
            <img
              className="w-full hidden xl:block"
              src="https://i.ibb.co/RcMmXKc/Rectangle-19.png"
              alt="wardrobe "
            />
            <img
              className="w-full hidden md:block xl:hidden"
              src="https://i.ibb.co/ZhjHb0R/Rectangle-19-2.png"
              alt="wardrobe "
            />
            <img
              className="w-full md:hidden"
              src="https://i.ibb.co/sbV9CD2/Rectangle-19.png"
              alt="wardrobe "
            />
          </div>
          <div className="flex justify-center flex-col items-start w-full lg:w-9/12 xl:w-full ">
            <h3 className="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 w-full  md:text-left text-gray-800">
              Order Summary
            </h3>
            <p className="text-base leading-none mt-4 text-gray-800">
              Paid using credit card ending with{" "}
              <span className="font-semibold">8822</span>
            </p>

            <ListGroup>
              {cart.map((prod) => (
                <div className="flex gap-6 m-6  md:flex-row justify-start items-start md:items-center  border border-gray-200 w-full">
                  <div className="w-40 md:w-32">
                    <img
                      className="hidden md:block"
                      src={prod.image}
                      alt="girl-in-red-dress"
                    />
                    <img
                      className="md:hidden "
                      src={prod.image}
                      alt="girl-in-red-dress"
                    />
                  </div>
                  <div className="flex justify-start md:justify-between items-start md:items-center  flex-col md:flex-row w-full p-4 md:px-8 ">
                    <div className="flex flex-col md:flex-shrink-0  justify-start items-start">
                      <h3 className="text-lg md:text-xl  w-full font-semibold leading-6 md:leading-5  text-gray-800">
                        {prod.name}
                      </h3>
                      <div className="flex flex-row justify-start  space-x-4 md:space-x-6 items-start mt-4 ">
                        <p className="text-sm leading-none text-gray-600">
                          Size: <span className="text-gray-800"> Small</span>
                        </p>
                        <p className="text-sm leading-none text-gray-600">
                          <Col md={2}>
                            <Form.Control
                              as="select"
                              value={prod.qty}
                              onChange={(e) =>
                                dispatch({
                                  type: "CHANGE_CART_QTY",
                                  payload: {
                                    id: prod.id,
                                    qty: e.target.value,
                                  },
                                })
                              }
                            >
                              {[...Array(prod.inStock).keys()].map((x) => (
                                <option key={x + 1}>{x + 1}</option>
                              ))}
                            </Form.Control>
                          </Col>
                        </p>
                      </div>
                    </div>
                    <div className="flex mt-4 md:mt-0 md:justify-end items-center w-full ">
                      <p className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-gray-800">
                        {prod.price}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </ListGroup>

            <div className="flex flex-col justify-start items-start mt-8 xl:mt-10 space-y-10 w-full">
              <div className="flex flex-col space-y-4 w-full">
                <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                  <div className="flex justify-between  w-full">
                    <p className="text-base leading-4 text-gray-800">
                      Subtotal
                    </p>
                    <p className="text-base leading-4 text-gray-600">
                      ₹ {total}{" "}
                    </p>
                  </div>
                  <div className="flex justify-between  w-full">
                    <p className="text-base leading-4 text-gray-800">
                      Redeem{" "}
                      <span className="bg-gray-200 p-1 text-xs font-medium leading-3  text-gray-800">
                        Points
                      </span>
                    </p>
                    <p className="text-base leading-4 text-gray-600">
                      {points}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center w-full">
                  <p className="text-base font-semibold leading-4 text-gray-800">
                    Total
                  </p>
                  <p className="text-base font-semibold leading-4 text-gray-600">
                    Total pay: ₹ {total - points}
                  </p>
                </div>
                <div className="flex w-full justify-center items-center pt-1 md:pt-4  xl:pt-8 space-y-6 md:space-y-8 flex-col">
                  <button
                    className="border py-2"
                    type="button"
                    disabled={cart.length === 0}
                    onClick={() => setModel(!model)}
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
