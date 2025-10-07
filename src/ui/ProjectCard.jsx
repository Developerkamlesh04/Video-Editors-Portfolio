import React from "react";

export default function ProjectCard({ project }) {
  return (
    <article className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition">
      <div className="relative">
        <img
          src={project.poster}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute left-3 top-3 px-2 py-1 rounded bg-black/60 text-white text-xs">
          {project.duration}
        </div>
      </div>
      <div className="p-4">
        <h4 className="font-semibold">{project.title}</h4>
        <p className="text-sm text-slate-500 mt-2">{project.description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags?.map((t) => (
            <span key={t} className="text-xs px-2 py-1 bg-slate-100 rounded">
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
