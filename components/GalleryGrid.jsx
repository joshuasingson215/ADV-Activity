"use client";

import { useCallback, useState } from "react";
import { gallery } from "@/lib/content";
import ImageModal from "./ImageModal";

const filters = ["All", "Projects", "Certificates", "Personal"];

export default function GalleryGrid() {
  const [filter, setFilter] = useState("All");
  const [index, setIndex] = useState(null);

  const shown = filter === "All" ? gallery : gallery.filter((item) => item.category === filter);
  const current = index === null ? null : shown[index];

  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (delta) => setIndex((i) => (i === null ? i : (i + delta + shown.length) % shown.length)),
    [shown.length],
  );
  const prev = useCallback(() => step(-1), [step]);
  const next = useCallback(() => step(1), [step]);

  return (
    <>
      <div className="gallery-filters" role="tablist" aria-label="Filter gallery">
        {filters.map((f) => (
          <button
            key={f}
            role="tab"
            aria-selected={filter === f}
            className={`gallery-filter ${filter === f ? "active" : ""}`}
            onClick={() => {
              setFilter(f);
              setIndex(null);
            }}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {shown.map((item, i) => (
          <button key={item.src} className="gallery-item" onClick={() => setIndex(i)}>
            <img src={item.src} alt={item.title} loading="lazy" />
            <span className="gallery-caption">
              <strong>{item.title}</strong>
              <span>{item.category}</span>
            </span>
          </button>
        ))}
      </div>

      <ImageModal
        src={current?.src}
        alt={current?.title}
        onClose={close}
        onPrev={shown.length > 1 ? prev : undefined}
        onNext={shown.length > 1 ? next : undefined}
      />
    </>
  );
}
