export default function BlogPost() {
  return (
    <div className="max-w-3/6 flex flex-col justify-center items-center shadow-xl shadow-amber-300 rounded-lg p-6 bg-white w-full">
      <h2 className="text-2xl font-semibold">Blog Posts</h2>
      <p className="text-gray-600">Here you can read the latest blog posts.</p>
      <ul className="list-disc list-inside mt-2">
        <li>Blog Post 1</li>
        <li>Blog Post 2</li>
        <li>Blog Post 3</li>
      </ul>
    </div>
  );
}
