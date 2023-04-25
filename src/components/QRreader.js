import React from 'react'
import QrReader from 'react-qr-reader';

const QRreader = () => {

    const handleScan = (data) => {
        if (data) {
          console.log(data);
          return 0
        }
      };

  return (
    <div>
         <QrReader
            height={300}
            style={{ height: "100vh", border: "3px solid red" }}
            delay={300}
            onScan={handleScan}
          />
    </div>
  )
}

export default QRreader