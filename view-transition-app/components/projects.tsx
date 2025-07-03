export default function Project() {
  return (
    <div className="max-w-3/6 flex flex-col justify-center items-center shadow-xl shadow-amber-300 rounded-lg p-6 bg-white w-full">
      <h2 className="text-2xl font-semibold">Projects</h2>
      <p className="text-gray-600">Here you can manage your projects.</p>
      <ul className="list-disc list-inside mt-2">
        <li>Project 1</li>
        <li>Project 2</li>
        <li>Project 3</li>
      </ul>
    </div>
  );
}
