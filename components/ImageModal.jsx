"use client";

import { useEffect } from "react";

// Full-screen image viewer shared by Certificates and Gallery.
// Optional onPrev/onNext enable arrow buttons and arrow-key browsing.
export default function ImageModal({ src, alt, onClose, onPrev, onNext }) {
  const open = Boolean(src);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && onPrev) onPrev();
      if (e.key === "ArrowRight" && onNext) onNext();
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose, onPrev, onNext]);

  return (
    <div
      className={`modal-overlay image-modal ${open ? "active" : ""}`}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <button className="modal-close" onClick={onClose} aria-label="Close">
        &times;
      </button>
      {onPrev && (
        <button className="modal-nav prev" onClick={onPrev} aria-label="Previous image">
          ‹
        </button>
      )}
      {open && <img className="modal-image" src={src} alt={alt} />}
      {onNext && (
        <button className="modal-nav next" onClick={onNext} aria-label="Next image">
          ›
        </button>
      )}
    </div>
  );
}
