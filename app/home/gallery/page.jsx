"use client";

import Nav from "@components/Nav";
import SiteScripts from "@components/SiteScripts";

const photos = [
  { src: "/home/photos/homephoto.jpg", credit: "AndresImagery", color: false },
  { src: "/home/photos/Timothy Headshot.jpg", credit: null, color: false },
  { src: "/home/photos/IMG_2192-min.JPG", credit: "Kristen Pierce", color: false },
  { src: "/home/photos/DSC05574-min.jpg", credit: "Kristen Pierce", color: false },
  { src: "/home/photos/IMG_9340.png", credit: "Vogel, NJ", color: true },
  { src: "/home/photos/DSC05492-min.jpg", credit: "Kristen Pierce", color: false },
  { src: "/home/photos/IMG_0869 copy.png", credit: "AndresImagery", color: false },
  { src: "/home/photos/DSC05480-min.jpg", credit: "Kristen Pierce", color: false },
  { src: "/home/photos/about.jpg", credit: "Ulpjana", color: true },
];

export default function Gallery() {
  return (
    <div className="galleryPage">
      <Nav />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <section id="portfolio">
            <div className="container-fluid">
              <div className="horiz-gallery-wrapper">
                <div className="horiz-gallery-strip">
                  {photos.map((photo) => (
                    <div className="project-wrap" key={photo.src}>
                      <div className="project-image">
                        <img src={photo.src} alt="" />
                        {photo.credit && (
                          <p
                            className="credit"
                            style={photo.color ? { color: "white" } : undefined}
                          >
                            {photo.credit}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <SiteScripts />
    </div>
  );
}