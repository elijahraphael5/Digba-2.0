import { HOMEPAGE_HTML } from "./homepage-html";
import HomepageScripts from "@components/HomepageScripts";

const pageButtons = [
  { href: "/", label: "Home" },
  { href: "/home/about", label: "About" },
  { href: "/home/events", label: "Events" },
  { href: "/home/gallery", label: "Gallery" },
  { href: "/home/music", label: "Music" },
  { href: "/home/video", label: "Video" },
  { href: "/home/contact", label: "Contact" },
];

export default function Home() {
  return (
    <>
      <link
        rel="stylesheet"
        href="/cdn.prod.website-files.com/6783d77212b58244ace7036d/css/digba-e11a8f.webflow.5058991ee.css"
      />
      <link rel="stylesheet" href="/unpkg.com/lenis%401.1.9/dist/lenis.css" />
      <div dangerouslySetInnerHTML={{ __html: HOMEPAGE_HTML }} />
      <nav className="homeNav" aria-label="Pages">
        {pageButtons.map((btn) => (
          <a key={btn.href} href={btn.href} className="homeNav-btn">
            {btn.label}
          </a>
        ))}
      </nav>
      <HomepageScripts />
    </>
  );
}