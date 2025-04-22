"use client";

import { Link } from "react-router-dom";
import GalleryImg1 from "../../assets/images/gallery/suraj21.jpg";
import GalleryImg2 from "../../assets/images/gallery/Sarayu8.webp";
import GalleryImg3 from "../../assets/images/gallery/nivin.jpeg";
import GalleryImg4 from "../../assets/images/gallery/vyshnav.jpg";
import GalleryImg5 from "../../assets/images/gallery/anu.png";
import GalleryImg6 from "../../assets/images/gallery/BabyJean2.jpg";
import GalleryImg7 from "../../assets/images/gallery/gabry.jpeg";
import GalleryImg9 from "../../assets/images/gallery/julis.jpg";
import GalleryImg10 from "../../assets/images/gallery/oar2.jpg";

const galleryItems = [
  {
    src: GalleryImg1,
    alt: "Gallery 1",
    title: "Suraj Venjaramoodu ",
    subtitle: " National Award-winning actor and entertainer",
    href: "/gallery-details",
  },
  {
    src: GalleryImg2,
    alt: "Gallery 2",
    title: "Sarayu Mohan Ammu",
    subtitle: "Film and TV actress with a dynamic stage presence",
    href: "/gallery-details",
  },
  {
    src: GalleryImg3,
    alt: "Gallery 3",
    title: "Nipin Niravath",
    subtitle: " Celebrated mentalist and mind-reader",
    href: "/gallery-details",
  },
  {
    src: GalleryImg4,
    alt: "Gallery 4",
    title: "Vaishnav Girish",
    subtitle: "Singer and performer from Indian Idol fame",
    href: "/gallery-details",
  },
  {
    src: GalleryImg5,
    alt: "Gallery 5",
    title: "Anju Joseph ",
    subtitle: " Popular playback singer known for her melodious voice",
    href: "/gallery-details",
  },
  {
    src: GalleryImg6,
    alt: "Gallery 6",
    title: "Babyjean ",
    subtitle: "EDM and international club music",
    href: "/gallery-details",
  },
  {
    src: GalleryImg7,
    alt: "Gallery 7",
    title: "Gabri",
    subtitle: " Known for Bollywood-infused party sets",
    href: "/gallery-details",
  },
  {
    src: GalleryImg9,
    alt: "Gallery 9",
    title: "Julia Bliss ",
    subtitle: "International DJ, blending house and electro",
    href: "/gallery-details",
  },
  {
    src: GalleryImg10,
    alt: "Gallery 9",
    title: "DJ Curly",
    subtitle: " High-octane commercial and dance music",
    href: "/gallery-details",
  },
];

export default function GalleryOne() {
  return (
    <section className="gallery-one">
      <div className="container">
        <div className="section-title text-center">
          <div className="section-title__tagline-box">
            <span className="section-title__tagline">
              Star Performers of Uyire
            </span>
          </div>
          <h2 className="section-title__title">
            An unforgettable lineup of music legends <br /> and crowd-favorite
            entertainers.
          </h2>
        </div>
        <div className="row masonary-layout">
          {galleryItems.map((item, index) => (
            <div key={index} className="col-xl-3 col-lg-6 col-md-6">
              <div className="gallery-one__single" style={{ height: "100%" }}>
                <div className="gallery-one__img">
                  <img
                    src={item.src}
                    alt={item.alt}
                    style={{
                      width: "100%",
                      height: "300px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="gallery-one__content">
                    <div className="gallery-one__sub-title-box">
                      <div className="gallery-one__sub-title-shape"></div>
                      <p className="gallery-one__sub-title">{item.subtitle}</p>
                    </div>
                    <h4 className="gallery-one__title">
                      <Link to={item.href}>{item.title}</Link>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
