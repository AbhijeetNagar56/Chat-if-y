import { useState } from "react";

const Profile = () => {
  const [name, setName] = useState("Abhijeet");
  const [email] = useState("abhijeet@email.com");
  const [bio, setBio] = useState("Hey there! I am using chat-if-y.");

  return (
    <div className="min-h-screen bg-base-200 flex justify-center items-center">
      <div className="card w-full max-w-md bg-base-100 shadow-xl p-6">
        <h1 className="text-2xl font-bold text-center mb-4">My Profile</h1>

        {/* Avatar */}
        <div className="flex justify-center mb-4">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src="https://i.pravatar.cc/150?img=5" />
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="space-y-4">
          <input
            type="text"
            className="input input-bordered w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            className="input input-bordered w-full"
            value={email}
            disabled
          />

          <textarea
            className="textarea textarea-bordered w-full"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />

          <button className="btn btn-primary w-full">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;