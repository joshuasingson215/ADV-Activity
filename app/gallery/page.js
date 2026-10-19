import GalleryGrid from "@/components/GalleryGrid";
import PageIntro from "@/components/PageIntro";

export const metadata = { title: "Gallery" };

export default function GalleryPage() {
  return (
    <>
      <PageIntro label="Gallery" title="Snapshots of My Work">
        Screens from my design projects, my certificates, and more. Click any image to view it full
        size and use the arrow keys to browse.
      </PageIntro>

      <section className="gallery">
        <div className="gallery-container">
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
