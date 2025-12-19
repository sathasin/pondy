import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ArrowRight, Briefcase, GraduationCap, Heart, MapPin, Users, Calendar, Handshake, Leaf, Globe } from "lucide-react";
import heroPuducherry from "@/assets/pondibanner.jpg";
import auro from "@/assets/Auro.png";
import pillarBusiness from "@/assets/business.png";
import pillarEducation from "@/assets/education.png";
import pillarSpirituality from "@/assets/gokitemp.png";
import pillarTourism from "@/assets/beach.png";
import pillarEnvironment from "@/assets/frenchcolony.png"; // Reusing for Environment
import pillarCollaboration from "@/assets/opportunities_hero.png"; // Reusing for Collaboration

const pillars = [
  {
    letter: "C",
    title: "Community & Culture",
    description: "Preserving traditions while encouraging community participation.",
    image: pillarEnvironment,
    color: "from-orange-500 to-orange-600",
  },
  {
    letter: "E",
    title: "Education & Youth",
    description: "Nurturing knowledge, skills, and leadership among students.",
    image: pillarEducation,
    color: "from-purple-500 to-purple-600",
  },
  {
    letter: "E",
    title: "Entrepreneurship",
    description: "Supporting sustainable business growth and innovation.",
    image: pillarBusiness,
    color: "from-blue-500 to-blue-600",
  },
  {
    letter: "T",
    title: "Tourism & Heritage",
    description: "Promoting tourism that respects culture and environment.",
    image: pillarTourism,
    color: "from-cyan-500 to-cyan-600",
  },
  {
    letter: "E",
    title: "Environment",
    description: "Eco-conscious development and conservation.",
    image: pillarSpirituality, // Using temple/greenery image
    color: "from-green-500 to-green-600",
  },
  {
    letter: "C",
    title: "Collaboration",
    description: "Partnerships between citizens, institutions, and stakeholders.",
    image: pillarCollaboration,
    color: "from-red-500 to-red-600",
  },
];

const focusAreas = [
  {
    icon: Briefcase,
    title: "Entrepreneurship & MSME Growth",
    category: "Business",
    items: ["Executive mentoring", "Market access networks", "Investment facilitation"],
  },
  {
    icon: GraduationCap,
    title: "Talent Development & Pathways",
    category: "Education",
    items: ["Industry-campus partnerships", "Career acceleration programs", "Skill bootcamps"],
  },
  {
    icon: Heart,
    title: "Wellbeing & Harmony Programs",
    category: "Spirituality",
    items: ["Interfaith dialogues", "Youth wellness initiatives", "Mindfulness platforms"],
  },
  {
    icon: MapPin,
    title: "Conscious Tourism & Heritage",
    category: "Tourism",
    items: ["Cultural experience trails", "Community-based tourism", "Craftsperson networks"],
  },
];

const upcomingEvents = [
  {
    title: "Namma Puducherry Launch",
    description: "Official launch bringing together key stakeholders",
    icon: Calendar,
  },
  {
    title: "Namma Puducherry Summit 2025/2026",
    description: "A gathering of changemakers, visionaries, and partners",
    icon: Users,
  },
  {
    title: "Campus Conversations",
    description: "Youth voices shaping Puducherry's tomorrow",
    icon: GraduationCap,
  },
  {
    title: "Entrepreneurship Accelerator",
    description: "Connecting founders with mentors and investors",
    icon: Briefcase,
  },
];

import SEO from "@/components/SEO";

const Index = () => {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Namma Puducherry",
    "url": "https://nammapuducherry.org",
    "logo": "https://nammapuducherry.org/logo.png",
    "description": "A people-centric initiative dedicated to showcasing Puducherry’s culture, community, creativity, and sustainability.",
    "sameAs": [
      "https://twitter.com/nammapuducherry",
      "https://facebook.com/nammapuducherry"
    ]
  };

  return (
    <Layout>
      <SEO
        title="Home"
        description="Namma Puducherry - Celebrating the Heart, Heritage & Harmony of Puducherry"
        schema={orgSchema}
      />
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={heroPuducherry}
            alt="Beautiful aerial view of Puducherry coastline"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl space-y-6 animate-fade-up">
            <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium">
              NAMMA PUDUCHERRY
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold leading-tight text-slate-900 animate-fade-up">
              Celebrating the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-violet-500">Heart, Heritage &</span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-violet-500">Harmony</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-medium">
              A people-centric initiative dedicated to showcasing Puducherry’s culture, community, creativity, and sustainability — preserving the past while building a brighter future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <Link to="/membership">
                  Be a Part
                  <ArrowRight size={20} className="ml-2" />
                </Link>
              </Button>
              <Button asChild className="bg-white text-primary border-2 border-primary hover:bg-primary/5 font-semibold px-8 py-6 text-lg rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                <Link to="/events">Host an Initiative</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Message Section */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Welcome to Namma Puducherry
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                Welcome to Namma Puducherry, a platform celebrating the spirit, diversity, and potential of Puducherry — our home. This is your gateway to understanding what makes our Union Territory unique: from serene beaches and colonial heritage to vibrant culture, education, enterprise, and community pride.
              </p>
              <p className="text-slate-700 leading-relaxed">
                We unite citizens, leaders, businesses, and visitors with a shared commitment to progress, harmony, and sustainability in every part of Puducherry — from its towns to its tranquil coastal retreats.
              </p>
              <p className="font-semibold text-primary text-xl">
                Explore, Connect, and Experience Puducherry — Namma Puducherry!
              </p>
            </div>
            <div className="animate-fade-up delay-200">
              <div className="relative rounded-2xl overflow-hidden card-shadow h-[400px]">
                <img
                  src={auro}
                  alt="Puducherry's vibrant community coming together"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        {/* Decorative Background Elements */}


        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-12 animate-fade-up">
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold tracking-wide uppercase">
                Who We Are
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 leading-tight">
                About Namma Puducherry
              </h2>
              <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-light">
                Namma Puducherry is more than a name — it’s a movement rooted in:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              {[
                { text: "Community empowerment", color: "bg-blue-500", shadow: "shadow-blue-200" },
                { text: "Inclusive development", color: "bg-indigo-500", shadow: "shadow-indigo-200" },
                { text: "Cultural celebration", color: "bg-purple-500", shadow: "shadow-purple-200" },
                { text: "Sustainable growth", color: "bg-teal-500", shadow: "shadow-teal-200" }
              ].map((item, i) => (
                <div
                  key={i}
                  className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center gap-4 animate-fade-up"
                  style={{ animationDelay: `${i * 150}ms` }}
                >
                  <span className="font-semibold text-lg text-slate-800 group-hover:text-primary transition-colors">{item.text}</span>
                </div>
              ))}
            </div>

            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto">
              We believe in uplifting local voices, promoting <span className="font-semibold text-blue-700">heritage</span> and <span className="font-semibold text-purple-700">creativity</span>, and supporting initiatives that make life better for everyone who calls Puducherry home — residents, students, entrepreneurs, and travellers alike.
            </p>
          </div>
        </div>
      </section>

      {/* Our Pillars Section */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <div className="inline-block mb-4">
              <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium">
                Our Foundation
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Our Pillars
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full mx-auto mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              At Namma Puducherry, our vision is shaped by a strong foundation of core pillars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className="group relative overflow-hidden rounded-2xl card-shadow bg-card animate-fade-up hover:elevated-shadow hover:scale-105 transition-all duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3">

                    <h3 className="font-display text-xl font-semibold">{pillar.title}</h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="gradient" size="lg" asChild>
              <Link to="/pillars">
                Explore All Pillars
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What We Promote Section */}
      <section className="py-20 lg:py-28 bg-blue-50/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-up">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-blue-900 mb-6">
                What We Promote
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mx-auto" />
            </div>

            <div className="space-y-8">
              {/* Explore Puducherry - Full Width */}
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 animate-fade-up">
                <div className="flex items-center gap-4 mb-6 border-b border-slate-100 pb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                    <MapPin size={24} />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-slate-800">
                    Explore Puducherry
                  </h3>
                </div>

                <p className="text-slate-600 mb-6 font-medium text-lg">Puducherry offers:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  {[
                    "Heritage districts and French colonial avenues",
                    "Spiritual centers, meditation retreats, and cultural hubs",
                    "Beaches from serene sands to lively promenades",
                    "Local festivals, arts, and music experiences"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 group">
                      <div className="w-2 h-2 rounded-full bg-purple-500 mt-2.5 group-hover:scale-125 transition-transform" />
                      <span className="text-slate-600 leading-relaxed group-hover:text-slate-900 transition-colors">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Grid for Learn & Business */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Learn & Grow */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 animate-fade-up delay-100 flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-6 border-b border-slate-100 pb-4">
                    <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600">
                      <GraduationCap size={24} />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-slate-800">
                      Learn & Grow
                    </h3>
                  </div>
                  <ul className="space-y-4 flex-grow">
                    {[
                      "Educational opportunities including workshops, cultural exchange, and community learning",
                      "Career development and youth leadership initiatives"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 group">
                        <div className="w-2 h-2 rounded-full bg-purple-500 mt-2.5 group-hover:scale-125 transition-transform" />
                        <span className="text-slate-600 leading-relaxed group-hover:text-slate-900 transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Business & Innovation */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 animate-fade-up delay-200 flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-6 border-b border-slate-100 pb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                      <Briefcase size={24} />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-slate-800">
                      Business & Innovation
                    </h3>
                  </div>
                  <ul className="space-y-4 flex-grow">
                    {[
                      "Supporting local brands, startups, and sustainable enterprises",
                      "Celebrating creative industries and community entrepreneurship"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 group">
                        <div className="w-2 h-2 rounded-full bg-purple-500 mt-2.5 group-hover:scale-125 transition-transform" />
                        <span className="text-slate-600 leading-relaxed group-hover:text-slate-900 transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Upcoming Events
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full mx-auto mb-4" />
            <p className="text-muted-foreground">
              Join us in shaping Puducherry's future
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {upcomingEvents.map((event, index) => (
              <div
                key={event.title}
                className="p-6 bg-card rounded-2xl card-shadow hover:elevated-shadow hover:scale-105 transition-all duration-500 group animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-secondary transition-all duration-300 group-hover:scale-110 shadow-md">
                  <event.icon className="text-accent-foreground group-hover:text-primary-foreground transition-colors duration-300" size={24} />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">
                  {event.title}
                </h3>
                <p className="text-slate-600 text-sm">
                  {event.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="gradient" size="lg" asChild>
              <Link to="/events">
                View All Events
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-up">
            <Handshake className="w-16 h-16 mx-auto text-primary" />
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Built on Collaboration
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              A thriving ecosystem of educational innovators, industry pioneers, spiritual leaders, tourism catalysts, and community changemakers.
            </p>
            <p className="text-foreground font-medium">
              Namma Puducherry thrives through authentic partnerships. We invite bold institutions, social enterprises, impact-focused businesses, and passionate citizen groups to co-create transformative initiatives.
            </p>
            <Button variant="hero" asChild>
              <Link to="/membership">
                Be a Part
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 gradient-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground">
              Join the Movement!
            </h2>
            <p className="text-primary-foreground/90 text-lg">
              Be a part of Namma Puducherry — share your stories, celebrate local achievements, and contribute to building a vibrant, inclusive, and sustainable Puducherry.
            </p>

            <Button
              size="xl"
              className="bg-background text-foreground hover:bg-background/90 font-semibold"
              asChild
            >
              <Link to="/contact">
                Join the Movement
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
