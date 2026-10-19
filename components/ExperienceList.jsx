"use client";

import { experience } from "@/lib/content";
import useSeeMore from "./useSeeMore";

export default function ExperienceList() {
  const { visible, canToggle, label, toggle } = useSeeMore(experience);

  return (
    <>
      {visible.map((job) => (
        <div key={job.role} className="experience-item">
          <h3 className="exp-role highlight">{job.role}</h3>
          <span className="exp-company">{job.company}</span>{" "}
          <span className="exp-date">{job.date}</span>
          <p className="exp-description">{job.description}</p>
        </div>
      ))}
      {canToggle && (
        <button className="see-more-btn" onClick={toggle}>
          {label}
        </button>
      )}
    </>
  );
}
