"use client";

import { useState } from "react";
import { projects } from "@/lib/content";
import useSeeMore from "./useSeeMore";

export default function ProjectList() {
  const { visible, canToggle, label, toggle } = useSeeMore(projects);
  // Screenshot that follows the cursor while hovering a project button
  const [preview, setPreview] = useState({ src: "", x: 0, y: 0 });

  return (
    <>
      {visible.map((project) => (
        <div key={project.name} className="project-item">
          <div className="project-year">{project.year}</div>
          <div className="project-details">
            <h4 className="project-name">{project.name}</h4>
            <p className="project-description">{project.description}</p>
            <div className="project-buttons">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  title={`${link.label}: ${project.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className="project-btn"
                    type="button"
                    onMouseEnter={(e) =>
                      link.preview && setPreview({ src: link.preview, x: e.clientX, y: e.clientY })
                    }
                    onMouseMove={(e) =>
                      link.preview && setPreview((p) => ({ ...p, x: e.clientX, y: e.clientY }))
                    }
                    onMouseLeave={() => setPreview((p) => ({ ...p, src: "" }))}
                  >
                    {link.label}
                  </button>
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
      {canToggle && (
        <button className="see-more-btn" onClick={toggle}>
          {label}
        </button>
      )}

      <div
        className="cursor-preview"
        style={{ left: preview.x, top: preview.y, opacity: preview.src ? 1 : 0 }}
      >
        {preview.src && <img src={preview.src} alt="preview" />}
      </div>
    </>
  );
}
