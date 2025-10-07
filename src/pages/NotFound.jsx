import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 — Page not found</h1>
        <p className="mb-6 text-slate-600">
          The page you are looking for doesn't exist.
        </p>
        <Link to="/" className="px-4 py-2 rounded bg-indigo-600 text-white">
          Go Home
        </Link>
      </div>
    </div>
  );
}
