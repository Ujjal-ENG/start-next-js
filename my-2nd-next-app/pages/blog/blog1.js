import Navbar from "@/components/navbar";
import React from "react";
export const getStaticProps = async () => {
  const fetchURL = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await fetchURL.json();
  return {
    props: {
      data,
    },
  };
};
const blog1 = ({ data }) => {
  return (
    <div>
      <Navbar />
      {data.map((el) => {
        return (
          <div className="card" key={el.id}>
            <h1>{el.id}</h1>
            <p>{el.title}</p>
          </div>
        );
      })}

      <style jsx>
        {`
          .card {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 20px;
            margin: 20px;
            width: 600px;
            border-radius: 10px;
            padding: 20px;
            cursor: pointer;
            background-color: white;
            color: black;
          }
        `}
      </style>
    </div>
  );
};

export default blog1;
