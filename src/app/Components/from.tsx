// components/ContactForm.tsx
"use client";
import { useState } from "react";

interface SignupData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  age: number;
}

const AuthForm: React.FC = () => {
  const [formData, setFormData] = useState<SignupData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    age: 0,
  });
  const [isSignup, setIsSignup] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [ageError, setAgeError] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [users, setUsers] = useState<{ email: string; password: string }[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (formData.age < 18) {
      setAgeError("You are underage. You must be at least 18 years old to sign up.");
      return;
    }

    const newUser = { email: formData.email, password: formData.password };
    setUsers([...users, newUser]);
    console.log("Signup Data:", formData);
    setSubmitted(true);
    setError("");
    setAgeError("");
    setIsSignup(false);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const foundUser = users.find(
      (user) => user.email === formData.email && user.password === formData.password
    );

    if (foundUser) {
      console.log("Login successful!");
      setLoginSuccess(true);
      setError("");
    } else {
      setError("Account not found");
      setLoginSuccess(false);
    }
  };

  return (
    <div className="mt-10">
      <h2 className="text-green-600 font-bold mb-6 text-center text-4xl">Data Submission Form</h2>
      <h2 className="text-blue-600 font-bold mb-6 text-center text-6xl">Facebook</h2>
      <form onSubmit={isSignup ? handleSignup : handleLogin} className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">{isSignup ? "Create A New Account" : "Login to Your Account"}</h2>
        <div className={`grid ${isSignup ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"} gap-4`}>
          {isSignup && (
            <>
              <div className="mb-4">
                <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">First Name:</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">Last Name:</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500"
                />
              </div>
            </>
          )}

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500"
            />
          </div>

          {isSignup && (
            <>
              <div className="mb-4">
                <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-bold mb-2">Confirm Password:</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="age" className="block text-gray-700 text-sm font-bold mb-2">Age:</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500"
                />
              </div>
            </>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          {isSignup ? "Sign Up" : "Log In"}
        </button>

        {submitted && isSignup && <p className="mt-4 text-green-600 text-center">Signup successful! Now you can log in.</p>}
        {loginSuccess && <p className="mt-4 text-green-600 text-center">Login successful!</p>}
        {error && <p className="mt-4 text-red-600 text-center">{error}</p>}
        {ageError && <p className="mt-4 text-red-600 text-center">{ageError}</p>}

        <p className="mt-4 text-center">
          {isSignup ? "Already have an account?" : "Don't have an account?"}
          <button onClick={() => setIsSignup(!isSignup)} className="text-blue-600 font-bold">
            {isSignup ? " Log In" : " Sign Up"}
          </button>
        </p>
      </form>
    </div>
  );
};

export default AuthForm;
