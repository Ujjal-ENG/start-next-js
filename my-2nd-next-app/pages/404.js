import Link from "next/link";
import React from "react";

const error = () => {
  return (
    <>
      <h1>404</h1>
      <h3>
        We are sorry to say, this page is under maintenance or the page is
        remove or not include in our websites!!!
      </h3>
      <Link href="/">Go back Home Page Click Here/..</Link>
    </>
  );
};

export default error;
