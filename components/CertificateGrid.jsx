"use client";

import { useState } from "react";
import { certificates } from "@/lib/content";
import ImageModal from "./ImageModal";

export default function CertificateGrid() {
  const [open, setOpen] = useState(null);

  return (
    <>
      <div className="certificates-grid">
        {certificates.map((cert) => (
          <div key={cert.title} className="certificate-card" onClick={() => setOpen(cert)}>
            <span>{cert.title}</span>
          </div>
        ))}
      </div>
      <ImageModal src={open?.image} alt={open?.title} onClose={() => setOpen(null)} />
    </>
  );
}
