import React from "react";

export default function ServiceCard({ title, desc }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:scale-102 transition transform">
      <h4 className="font-semibold">{title}</h4>
      <p className="text-sm text-slate-500 mt-2">{desc}</p>
    </div>
  );
}
