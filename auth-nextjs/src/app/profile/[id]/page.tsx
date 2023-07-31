const ProfilePage = ({ params }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>ProfilePage Number: {params.id}</h1>
    </div>
  );
};

export default ProfilePage;
