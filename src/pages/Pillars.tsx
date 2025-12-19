import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, GraduationCap, Heart, MapPin, CheckCircle, Users, Globe, Leaf } from "lucide-react";
import pillarBusiness from "@/assets/business.png";
import pillarEducation from "@/assets/education.png";
import gokitemp from "@/assets/gokitemp.png";
import bas from "@/assets/bas.png";
import heroBg from "@/assets/frenchcolony.png";
import pillarEnvironment from "@/assets/auro.png";
import pillarCollaboration from "@/assets/opportunities_hero.png";

const pillarsData = [
  {
    id: "community",
    letter: "C",
    title: "Community & Culture",
    heading: "Preserving Identity, Celebrating Diversity",
    description: "Puducherry’s true strength lies in its people and its rich cultural roots. This pillar focuses on preserving traditions while encouraging community participation. We aim to keep Puducherry’s identity alive — not just in monuments, but in everyday life.",
    image: bas, // Highlighting heritage/culture
    icon: Users,
    focusAreas: [
      "Celebrating local art, language, festivals, and heritage",
      "Supporting community-led initiatives and social harmony",
      "Encouraging citizen participation in civic and cultural activities",
    ],
    color: "from-orange-500 to-orange-600",
  },
  {
    id: "education",
    letter: "E",
    title: "Education & Youth",
    heading: "Nurturing Future Leaders",
    description: "Education is the foundation for long-term progress. This pillar focuses on nurturing knowledge, skills, and leadership among students and young professionals. We believe empowered youth shape a confident and capable Puducherry.",
    image: pillarEducation,
    icon: GraduationCap,
    focusAreas: [
      "Promoting quality education and lifelong learning",
      "Supporting skill development, career awareness, and mentorship",
      "Encouraging youth participation in innovation and social impact",
    ],
    color: "from-purple-500 to-purple-600",
  },
  {
    id: "entrepreneurship",
    letter: "B",
    title: "Entrepreneurship",
    heading: "Driving Local Economy",
    description: "A thriving local economy creates opportunities and strengthens communities. This pillar supports sustainable business growth and innovation. By supporting local enterprise, we help Puducherry grow from within.",
    image: pillarBusiness,
    icon: Briefcase,
    focusAreas: [
      "Encouraging local entrepreneurs, startups, and small businesses",
      "Promoting ethical, responsible, and inclusive business practices",
      "Creating platforms for collaboration, learning, and growth",
    ],
    color: "from-blue-500 to-blue-600",
  },
  {
    id: "tourism",
    letter: "T",
    title: "Tourism & Heritage",
    heading: "Mindful Exploration",
    description: "Tourism is one of Puducherry’s strongest assets. This pillar focuses on promoting tourism that respects culture, environment, and local communities. We aim to create memorable experiences while preserving Puducherry’s charm.",
    image: gokitemp,
    icon: MapPin,
    focusAreas: [
      "Showcasing Puducherry’s beaches, heritage streets, and spiritual spaces",
      "Promoting responsible and sustainable tourism",
      "Highlighting lesser-known destinations and local experiences",
    ],
    color: "from-cyan-500 to-cyan-600",
  },
  {
    id: "environment",
    letter: "E",
    title: "Environment",
    heading: "Sustainable Future",
    description: "Protecting our environment is essential for future generations. This pillar focuses on eco-conscious development and conservation. Sustainability ensures that progress does not come at the cost of nature.",
    image: pillarEnvironment,
    icon: Leaf,
    focusAreas: [
      "Supporting clean, green, and healthy neighborhoods",
      "Encouraging environmental awareness and responsible living",
      "Promoting conservation of coastal areas and natural resources",
    ],
    color: "from-green-500 to-green-600",
  },
  {
    id: "collaboration",
    letter: "C",
    title: "Collaboration",
    heading: "Collective Governance",
    description: "Lasting change happens through collaboration. This pillar focuses on partnerships between citizens, institutions, and stakeholders. Together, we can shape a Puducherry that reflects shared values and common goals.",
    image: pillarCollaboration,
    icon: Globe,
    focusAreas: [
      "Encouraging transparent dialogue and collective action",
      "Supporting citizen-driven initiatives and policy awareness",
      "Building bridges between communities, experts, and leaders",
    ],
    color: "from-red-500 to-red-600",
  },
];

import SEO from "@/components/SEO";

const Pillars = () => {
  return (
    <Layout>
      <SEO
        title="Our Pillars"
        description="At Namma Puducherry, our vision is shaped by a strong foundation of core pillars: Community, Education, Entrepreneurship, Tourism, Environment, and Collaboration."
        keywords="Namma Puducherry Pillars, Community Empowerment, Sustainable Growth, Cultural Heritage"
      />
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="Namma Puducherry Pillars"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-center md:text-left space-y-6 animate-fade-up">
            <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium">
              Our Pillars
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold">
              The Foundation of Namma Puducherry
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full md:mx-0 mx-auto" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Namma Puducherry, our vision is shaped by a strong foundation of core pillars. These pillars reflect the values, priorities, and collective aspirations of our people. Each pillar works independently, yet together they create a balanced, inclusive, and sustainable Puducherry.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars Sections */}
      {pillarsData.map((pillar, index) => (
        <section
          key={pillar.id}
          id={pillar.id}
          className={`py-20 lg:py-28 ${index % 2 === 1 ? "bg-muted/30" : ""}`}
        >
          <div className="container mx-auto px-4">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""} animate-fade-up`}>
                <div className="relative rounded-2xl overflow-hidden card-shadow">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full aspect-[4/3] object-cover"
                  />

                </div>
              </div>

              <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""} animate-fade-up delay-200`}>
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center`}>
                    <pillar.icon className="text-primary-foreground" size={24} />
                  </div>
                  <span className="text-primary font-medium text-sm uppercase tracking-wider">
                    {pillar.title}
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-display font-bold">
                  {pillar.heading}
                </h2>

                <p className="text-slate-600 leading-relaxed text-lg font-medium">
                  {pillar.description}
                </p>

                <div className="space-y-3">
                  <h3 className="font-display font-semibold text-lg">What this means:</h3>
                  <ul className="space-y-2">
                    {pillar.focusAreas.map((area) => (
                      <li key={area} className="flex items-center gap-3 text-slate-700">
                        <CheckCircle className="text-primary flex-shrink-0" size={20} />
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 lg:py-28 gradient-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">
              One Belief
            </h2>
            <p className="text-primary-foreground/90 text-2xl font-serif italic">
              "When people come together with purpose, progress follows naturally."
            </p>
            <p className="text-primary-foreground/80 text-lg">
              These pillars guide our journey towards a proud, inclusive, and future-ready Puducherry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="xl"
                className="bg-background text-foreground hover:bg-background/90 font-semibold"
                asChild
              >
                <Link to="/contact">
                  Get Involved
                  <ArrowRight size={18} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pillars;
