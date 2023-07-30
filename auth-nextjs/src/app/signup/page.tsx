"use client";
import Link from "next/link";
import { useState } from "react";

const SignUpPage = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const onSignUp = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen py-2">
      <h1 className="py-3">SignUp</h1>

      <form action="" className="flex flex-col space-y-3">
        <label htmlFor="username">UserName: </label>
        <input
          type="text"
          id="username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button
          onClick={onSignUp}
          className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50"
        >
          <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
          <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span className="relative">SignUp Here</span>
        </button>
        <Link
          href="/login"
          className="relative inline-flex items-center justify-center px-6 py-2 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group"
        >
          <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-purple-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
          <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
          <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-purple-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
          <span className="relative text-purple-600 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">
            Visit Login Page
          </span>
        </Link>
      </form>
    </div>
  );
};

export default SignUpPage;
