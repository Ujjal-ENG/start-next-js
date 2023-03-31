import Navbar from "@/components/navbar";
import Image from "next/image";
import React from "react";

const contact = () => {
  return (
    <div className="contact">
      <Navbar />
      contact
      <Image src="/pic.jpg" width="500" height="600" alt="kopaUjjal" />
      <style jsx>
        {`
          .contact {
            background-color: red;
            color: white;
            height: 100vh;
            width: 100%;
          }
        `}
      </style>
    </div>
  );
};

export default contact;
