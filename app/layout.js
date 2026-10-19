import Header from "@/components/Header";
import ScrollReveal from "@/components/ScrollReveal";
import { site } from "@/lib/content";
import "./globals.css";

export const metadata = {
  title: { default: `${site.name} UI/UX Portfolio`, template: `%s · ${site.name}` },
  description: `Portfolio of ${site.name}: UI/UX design, full stack development, and AI automation.`,
  icons: { icon: site.logo },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <footer className="footer">
          <p>&copy; 2026 {site.name}. All rights reserved.</p>
        </footer>
        <ScrollReveal />
      </body>
    </html>
  );
}
