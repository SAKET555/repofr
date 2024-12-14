import { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User signed up with", email, password);

    // Show success alert
    setShowAlert(true);

    // Hide the alert after 3 seconds (optional)
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <form
        className="bg-white p-6 rounded-lg shadow-md w-96"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">
          Signup
        </h2>

        {/* Success Alert */}
        {showAlert && (
          <div className="alert alert-success mb-4">
            <span>User signed up successfully!</span>
          </div>
        )}

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            className="input input-bordered w-full mt-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            className="input input-bordered w-full mt-1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-full mt-4">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
