import Navbar from "@/components/navbar";
import Link from "next/link";
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
      {data.slice(0, 5).map((el) => {
        return (
          <div className="card" key={el.id}>
            <h1>{el.id}</h1>
            <Link href={`/blog/${el.id}`}>
              <p>{el.title}</p>
            </Link>
          </div>
        );
      })}

      <style jsx>
        {`
          .card {
            display: flex;
            justify-content: between;
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
          .card h1 {
            background-color: skyBlue;
            text-align: center;
            width: 50px;
            height: 50px;
            border-radius: 50%;
          }
          .card p {
            font-weight: bold;
            font-size: 20px;
          }
        `}
      </style>
    </div>
  );
};

export default blog1;
