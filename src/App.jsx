import React from "react";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-4 text-center bg-gray-50">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to StackIt</h1>
      <p className="text-gray-700 mb-6">
        A minimal Q&A platform like Stack Overflow. Built with React, Firebase, and Tailwind.
      </p>
      <Link
        to="/login"
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Get Started
      </Link>
    </div>
  );
}
