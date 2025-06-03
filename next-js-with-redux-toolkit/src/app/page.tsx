import AddEmpolyees from "./components/AddEmployess";
import ShowEmployees from "./components/ShowEmployees";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4">
        Welcome to the Employee Management System
      </h1>
      <AddEmpolyees />
      <ShowEmployees />
    </>
  );
}
