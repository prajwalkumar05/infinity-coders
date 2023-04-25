import React, { useEffect, useState } from "react";
import QrReader from "react-qr-reader";
import { useNavigate } from "react-router-dom";
import { db } from "../Firebase/config";
import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";

const QRreader = () => {
  let navigate = useNavigate();
  const [result, setResult] = useState(0);

  const [model, setModel] = useState(false);

  const colRef = doc(db, "points", "mgkgNShWPN746F3OGZye");
  const col = collection(db, "points");

  const [dataa, setData] = useState(null);

  console.log(dataa);

  useEffect(() => {
    onSnapshot(col, (snap) => {
      let data = [];
      snap.docs.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      // console.log(data);
      setData(data[0].value);
    });
  }, []);

  const handle = async (e) => {
    e.preventDefault();

    updateDoc(colRef, {
      value: parseInt(result) + parseInt(dataa),
    }).then((response) => {});

    console.log("hii");

    navigate("/");
  };

  const handleScan = (data) => {
    if (data) {
      setResult(data);
      setModel(!model)
    }
  };

  return (
    <div>
      {model ? (
        <div className="fixed h-full w-full py-16 px-4 bg-slate-700 z-40">
          <div
            role="alert"
            className="container mx-auto w-11/12 md:w-2/3 max-w-lg"
          >
            <div className="relative py-8 px-8 md:px-16 bg-white dark:bg-gray-800 dark:border-gray-700 shadow-md rounded border border-gray-400">
              <div className="w-full flex justify-center text-green-400 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-circle-check"
                  width={56}
                  height={56}
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <circle cx={12} cy={12} r={9} />
                  <path d="M9 12l2 2l4 -4" />
                </svg>
              </div>
              <h1 className="text-center text-gray-800 dark:text-gray-100 font-lg font-bold tracking-normal leading-tight mb-4">
                Congratulations
              </h1>
              <p className="mb-5 text-sm text-gray-600 dark:text-gray-400 text-center font-normal">
                You Get {result}.00 Points
              </p>
              <div className="flex items-center justify-center w-full">
                <button
                  onClick={handle}
                  className="focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-4 sm:px-8 py-2 text-xs sm:text-sm"
                >
                  Okk
                </button>
              </div>
              <div className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-500 transition duration-150 ease-in-out">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Close"
                  className="icon icon-tabler icon-tabler-x"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <line x1={18} y1={6} x2={6} y2={18} />
                  <line x1={6} y1={6} x2={18} y2={18} />
                </svg>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <QrReader
        height={300}
        style={{ height: "100vh", border: "3px solid red" }}
        delay={300}
        onScan={handleScan}
      />

<p>{result}</p>
        <button onClick={handle}>Okk</button>
    </div>
  );
};

export default QRreader;
