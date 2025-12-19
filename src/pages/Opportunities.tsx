import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, GraduationCap, Lightbulb, Users, BookOpen, Target, Rocket, HandHeart } from "lucide-react";
import heroBg from "@/assets/opportunities_hero.png";

const opportunityCategories = [
  {
    title: "Career Development",
    description: "Explore job opportunities, internships, and career guidance programs tailored for Puducherry's youth.",
    icon: Briefcase,
    items: ["Job Listings", "Internship Programs", "Resume Building Workshops", "Interview Preparation"],
  },
  {
    title: "Education & Learning",
    description: "Access scholarships, skill development courses, and educational resources for continuous learning.",
    icon: GraduationCap,
    items: ["Scholarship Information", "Skill Development Courses", "Online Learning Resources", "Certification Programs"],
  },
  {
    title: "Entrepreneurship",
    description: "Resources and support for aspiring entrepreneurs to start and grow their ventures.",
    icon: Lightbulb,
    items: ["Startup Incubation", "Funding Opportunities", "Mentorship Programs", "Business Plan Guidance"],
  },
  {
    title: "Community Programs",
    description: "Volunteer opportunities and community initiatives that make a meaningful impact.",
    icon: Users,
    items: ["Volunteer Programs", "Community Projects", "Social Impact Initiatives", "Youth Leadership"],
  },
];

const knowledgeResources = [
  {
    title: "Industry Insights",
    description: "Stay updated with the latest trends and developments across key sectors in Puducherry.",
    icon: BookOpen,
    comingSoon: true,
  },
  {
    title: "Success Stories",
    description: "Inspiring journeys of entrepreneurs, educators, and changemakers from our community.",
    icon: Target,
    comingSoon: true,
  },
  {
    title: "Resource Library",
    description: "Curated collection of guides, templates, and tools to support your growth journey.",
    icon: Rocket,
    comingSoon: true,
  },
  {
    title: "Expert Directory",
    description: "Connect with mentors, advisors, and industry experts willing to guide you.",
    icon: HandHeart,
    comingSoon: true,
  },
];

import SEO from "@/components/SEO";

const Opportunities = () => {
  return (
    <Layout>
      <SEO
        title="Opportunities"
        description="Explore career, education, and volunteer opportunities in Puducherry. Connect with mentors, find internships, and join community initiatives."
        keywords="Jobs in Puducherry, Internships Pondicherry, Volunteer Opportunities, Skill Development, Entrepreneurship Support"
      />
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 flex items-center min-h-[75vh]">
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="Opportunities Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-center md:text-left space-y-6 animate-fade-up">
            <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium">
              Opportunities
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold">
              Growth, Careers & Impact
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full md:mx-0 mx-auto" />
            <p className="text-lg text-slate-700 leading-relaxed font-medium">
              We connect talent with purpose. Explore internships, mentorships, and volunteer roles that empower you to lead, create, and succeed in a thriving Puducherry.
            </p>
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Explore Opportunities
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full mx-auto mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Find the right path for your personal and professional growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {opportunityCategories.map((category, index) => (
              <div
                key={category.title}
                className="group p-8 rounded-2xl bg-card card-shadow hover:elevated-shadow transition-all duration-300 animate-fade-up border border-border/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-soft">
                  <category.icon className="text-primary-foreground" size={28} />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">
                  {category.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {category.description}
                </p>
                <div className="space-y-2">
                  {category.items.map((item) => (
                    <div key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </div>
                  ))}
                </div>
                <Button variant="ghost" className="group-hover:translate-x-1 transition-transform p-0 hover:bg-transparent text-primary mt-4">
                  Explore <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 gradient-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">
              Have an Opportunity to Share?
            </h2>
            <p className="text-primary-foreground/80 text-lg">
              Partner with us to connect Puducherry's talent with meaningful opportunities.
              Share job listings, programs, or resources with our growing community.
            </p>
            <Button
              size="xl"
              className="bg-background text-foreground hover:bg-background/90 font-semibold"
              asChild
            >
              <Link to="/contact">
                Get in Touch
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Opportunities;
