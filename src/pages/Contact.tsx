import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Send, Users, Building, Briefcase, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import heroBg from "@/assets/contacts_hero.png";

const volunteerWays = [
  {
    icon: Users,
    title: "Event & Program Support",
    description: "Bring community initiatives to life—help ideate, organize, and facilitate transformative gatherings",
  },
  {
    icon: Building,
    title: "Mentorship & Guidance",
    description: "Share your knowledge, mentor emerging leaders and entrepreneurs, inspire the next generation",
  },
  {
    icon: Briefcase,
    title: "Research, Content & Strategy",
    description: "Shape our narrative through research, storytelling, design, and digital presence",
  },
];

import SEO from "@/components/SEO";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('api/contact.php', { // Use relative path for consistency
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (data.success) {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. We will get back to you soon via email.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "name": "Namma Puducherry",
    "url": "https://nammapuducherry.org",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "hello@nammapuducherry.org",
      "contactType": "customer support"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Puducherry",
      "addressCountry": "IN"
    }
  };

  return (
    <Layout>
      <SEO
        title="Contact Us"
        description="Get in touch with Namma Puducherry. Collaborate, volunteer, or partner with us to drive development in Puducherry."
        keywords="Contact Namma Puducherry, NGO Office Pondicherry, Volunteer Contact, Partnership Opportunities"
        schema={contactSchema}
      />
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="Contact Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-center md:text-left space-y-6 animate-fade-up">
            <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold">
              Let's Build Together
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full md:mx-0 mx-auto" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you're an individual with passion, an organization with vision, or a business seeking impact—we welcome your collaboration, ideas, and participation. Every voice shapes our future.
            </p>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Become a Catalyst for Change
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Every volunteer brings unique gifts. Whether you have hours to offer or just your passion—there's a place for you in this movement. Together, we're creating the Puducherry we envision.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {volunteerWays.map((way, index) => (
                <div
                  key={way.title}
                  className="p-6 bg-card rounded-2xl card-shadow text-center group hover:elevated-shadow transition-shadow duration-300 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <way.icon className="text-primary-foreground" size={24} />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2">
                    {way.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {way.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center p-8 bg-accent/20 rounded-2xl animate-fade-up border border-accent/30">
              <h3 className="font-display text-xl font-semibold mb-3">Ready to Make an Impact?</h3>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Join our official membership program to get exclusive access to events, voting rights, and a digital membership ID.
              </p>
              <Link to="/membership">
                <Button variant="default" size="lg" className="font-semibold shadow-soft hover:shadow-card">
                  Become a Member <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8 animate-fade-up">
                <div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                    Connect With Us
                  </h2>
                  <p className="text-muted-foreground">
                    Have a vision? Seeking partnership? Ready to contribute? Reach out—we'd love to hear your story and explore possibilities together.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-5 bg-card rounded-xl card-shadow hover:elevated-shadow transition-shadow duration-300 border border-border/40 hover:border-primary/30">
                    <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shadow-soft">
                      <Mail className="text-primary-foreground" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-medium">Email</p>
                      <p className="font-semibold text-foreground">hello@nammapuducherry.org</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-5 bg-card rounded-xl card-shadow hover:elevated-shadow transition-shadow duration-300 border border-border/40 hover:border-primary/30">
                    <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shadow-soft">
                      <MapPin className="text-primary-foreground" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-medium">Based In</p>
                      <p className="font-semibold text-foreground">Puducherry, India</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="animate-fade-up delay-200">
                <form onSubmit={handleSubmit} className="p-8 lg:p-10 bg-card rounded-2xl card-shadow border border-border/40 space-y-6">
                  <h3 className="font-display text-2xl font-bold mb-6">Send us a Message</h3>

                  <div className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold mb-2 text-foreground">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        className="h-12 border-border/60 focus:border-primary"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold mb-2 text-foreground">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        className="h-12 border-border/60 focus:border-primary"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold mb-2 text-foreground">
                        Your Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us how you'd like to contribute or any questions you have..."
                        required
                        className="min-h-[140px] resize-none border-border/60 focus:border-primary"
                      />
                    </div>
                  </div>

                  <Button variant="hero" type="submit" className="w-full h-12 font-semibold text-base shadow-soft hover:shadow-card transition-shadow" disabled={loading}>
                    {loading ? "Sending..." : "Send Message"}
                    <Send size={18} className={loading ? "animate-spin ml-2" : "ml-2"} />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
