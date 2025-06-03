"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../reduxToolkit/slice";

const AddEmpolyees = () => {
  const [empName, setEmpName] = useState("");
  const dispatch = useDispatch();
  const dataDispatch = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addEmployee(empName));
  };
  return (
    <div>
      <h2> Add Employees</h2>
      <input
        type="text"
        placeholder="Enter employee name"
        className="border p-2 rounded mb-4 w-full"
        value={empName}
        onChange={(e) => setEmpName(e.target.value)}
      />
      <button
        onClick={dataDispatch}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Add Employee
      </button>
    </div>
  );
};
export default AddEmpolyees;
export const metadata = {
  title: "Add Employees",
  description: "Add new employees to the system",
};
