import { Layout } from "@/components/layout/Layout";
import heroPuducherry from "@/assets/hero-puducherry.jpg";
import auro from "@/assets/Auro.png";
import gokitemp from "@/assets/gokitemp.png";
import bas from "@/assets/bas.png";
import oceanspray from "@/assets/oceanspray.png";
import piltemp from "@/assets/piltemp.png";
import h1 from "@/assets/h1.png";
import beach from "@/assets/beach.png";
import surf from "@/assets/surf.png";
import heroBg from "@/assets/gallery.png";
import hostchurch from "@/assets/hostchurch.png";
import frenchcolony from "@/assets/frenchcolony.png";

const galleryImages = [
  {
    src: frenchcolony,
    alt: "Beautiful French colonial architecture in Puducherry's White Town",
    category: "Heritage",
    title: "French Colony",
  },
  {
    src: gokitemp,
    alt: "Temple architecture framed by palms and sky",
    category: "Heritage",
    title: "Temple Heritage",
  },
  {
    src: oceanspray,
    alt: "Coastal spray over rocky shores and shoreline",
    category: "Nature",
    title: "Coastal Beauty",
  },
  {
    src: hostchurch,
    alt: "Historic church architecture in Puducherry",
    category: "Heritage",
    title: "Heritage Church",
  },
  {
    src: auro,
    alt: "Auroville's serene gardens and architecture",
    category: "Spirituality",
    title: "Auroville Gardens",
  },
  {
    src: bas,
    alt: "Heritage basilica and colonial-era architecture",
    category: "Heritage",
    title: "Basilica & Heritage",
  },
  {
    src: piltemp,
    alt: "Pillar temple and spiritual site",
    category: "Spirituality",
    title: "Temple Gardens",
  },
  {
    src: beach,
    alt: "Serene beach with golden sands and calm waters",
    category: "Tourism",
    title: "Beach Paradise",
  },
  {
    src: surf,
    alt: "Surfing and water sports at Puducherry coast",
    category: "Adventure",
    title: "Surf & Adventure",
  },
];

import SEO from "@/components/SEO";

const Gallery = () => {
  return (
    <Layout>
      <SEO
        title="Gallery"
        description="See Namma Puducherry in action. Photos of our events, heritage sites, and community initiatives."
        keywords="Puducherry Photos, Pondicherry Gallery, Namma Puducherry Events, Cultural Heritage Images"
      />
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="Gallery Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl space-y-6 animate-fade-up">
            <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium">
              Gallery
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold">
              Moments of Impact
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full md:mx-0" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              A visual journey through our events, initiatives, and the vibrant community of Namma Puducherry.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden card-shadow animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium mb-2">
                      {image.category}
                    </span>
                    <h3 className="font-display text-xl font-semibold text-background">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 animate-fade-up">
            <p className="text-muted-foreground text-lg">
              More stories coming soon as we document Namma Puducherry's journey and the transformation unfolding across our community.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden card-shadow animate-fade-up">
              <img
                src={heroPuducherry}
                alt="Beautiful panoramic view of Puducherry's coastline and culture"
                className="w-full aspect-video object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-background mb-2">
                  Puducherry: A Beacon of Possibility
                </h2>
                <p className="text-background/90 max-w-2xl text-lg">
                  Where centuries of heritage, spiritual wisdom, entrepreneurial spirit, and natural beauty converge to shape a thriving, inclusive future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
