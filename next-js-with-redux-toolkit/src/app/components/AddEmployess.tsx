const AddEmpolyees = () => {
  return (
    <div>
      <h2> Add Employees</h2>
      <input
        type="text"
        placeholder="Enter employee name"
        className="border p-2 rounded mb-4 w-full"
      />
      <button className="bg-blue-500 text-white p-2 rounded">
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
