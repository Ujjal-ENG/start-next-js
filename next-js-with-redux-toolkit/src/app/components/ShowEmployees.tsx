const ShowEmployees = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Employees List</h2>
      <ul className="list-disc pl-5">
        {/* {employees.map((employee) => (
          <li key={employee.id} className="mb-2">
            {employee.name}
          </li>
        ))} */}
      </ul>
    </div>
  );
};

export default ShowEmployees;
export const metadata = {
  title: "Show Employees",
  description: "Display the list of employees",
};
