import React, { useState, useRef, useEffect } from "react";


import QrReader from "react-qr-reader";
import { useNavigate } from "react-router-dom";
import { db } from "../../Firebase/config";
import { collection, doc, onSnapshot, updateDoc } from "firebase/firestore";

function App() {

    const navigate = useNavigate();

  const [text, setText] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [scanResultFile, setScanResultFile] = useState("");

  const colRef = doc(db,'points' ,"mgkgNShWPN746F3OGZye")
  const col= collection(db,'points')


  const qrRef = useRef(null);


  const handleErrorFile = (error) => {
    console.log(error);
  };
  const handleScanFile = (result) => {
    if (result) {
      setScanResultFile(result);
    }
  };

  const [dataa,setData] = useState(null)

  console.log(dataa)

      useEffect(() =>{
        onSnapshot(col,(snap) => {
            let data=[]
            snap.docs.forEach((doc) =>{
              data.push({...doc.data(),id:doc.id})
            })
            console.log(data)
            setData(data[0].value)
            
          })
          
      },[])

  const onScanFile = () => {
    qrRef.current.openImageDialog();
  }

  const handle = async () =>{

    
   await  updateDoc(colRef,{
        value:parseInt(scanResultFile) + parseInt(dataa)
      } ).then(response => {
      }).catch(error =>{
        console.log(error.message)
      })
  
      console.log("hii")
  
      navigate("/")
  }

  return (
    <div>
      <button  onClick={onScanFile}>Scan Qr Code</button>
      <QrReader
        ref={qrRef}
        delay={300}
        style={{ width: "100%" }}
        onError={handleErrorFile}
        onScan={handleScanFile}
        legacyMode
      />
      <h3>Scanned Code: {scanResultFile}</h3>
      <button onClick={handle}>okk</button>
    </div>
  );
}


export default App;






















  const handle =  (e) =>{
  

  }
