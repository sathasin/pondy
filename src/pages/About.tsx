import { Layout } from "@/components/layout/Layout";
import { Users, Heart, Eye, Lightbulb, GraduationCap, Briefcase, Leaf } from "lucide-react";
import namasivayamImage from "@/assets/Namasivayam.png";
import muthuImage from "@/assets/Muthu.jpeg"
import saravananImage from "@/assets/saravanan.png";
import selvaganapthyImage from "@/assets/Selvaganapthy.png";
import vinarassanImage from "@/assets/Vinarassan.png";
import kamrajImage from "@/assets/kamraj.png";
import samrajImage from "@/assets/samraj.png";
import siddhar1 from "@/assets/siddhar-1.svg";
import siddhar2 from "@/assets/siddhar-2.svg";
import siddhar3 from "@/assets/siddhar-3.svg";
import auro from "@/assets/Auro.png";
import frenchcolony from "@/assets/frenchcolony.png";
import beach from "@/assets/beach.png";
import gokitemp from "@/assets/gokitemp.png";
import heroBg from "@/assets/hero-puducherry.jpg";
import mourouganImage from "@/assets/mourougan.png";

const values = [
  {
    icon: Users,
    title: "Collaboration Over Competition",
    description: "Synergies multiply impact. We unite diverse stakeholders toward shared prosperity.",
    bgImage: auro,
  },
  {
    icon: Lightbulb,
    title: "Inclusive, Sustainable Growth",
    description: "Development that uplifts all and leaves no one behind.",
    bgImage: frenchcolony,
  },
  {
    icon: Heart,
    title: "Youth as Change Agents",
    description: "Investing in young minds, voices, and visions for tomorrow.",
    bgImage: beach,
  },
  {
    icon: Eye,
    title: "Culture & Spirituality First",
    description: "Honoring heritage, wisdom, and inner harmony as foundations of progress.",
    bgImage: gokitemp,
  },
];

import SEO from "@/components/SEO";

const About = () => {
  return (
    <Layout>
      <SEO
        title="About Us"
        description="Learn about Namma Puducherry's vision to transform the Union Territory through Business, Education, Spirituality, and Tourism. Meet our leadership and patrons."
        keywords="About Namma Puducherry, Namassivayam Puducherry, Muthukumar Subramanian, Puducherry Development Vision, Pondicherry NGO Leaders"
      />

      {/* Hero Section */}
      {/* Hero Section */}
      {/* About, Vision, Mission Section */}
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 flex items-center min-h-[60vh]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="About Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl space-y-10 animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900">
              About <span className="text-slate-900">Namma Puducherry</span>
            </h1>
            <p className="text-xl text-slate-800 max-w-2xl font-medium drop-shadow-sm">
              Namma Puducherry is more than a name — it’s a movement rooted in:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Community empowerment",
                "Inclusive development",
                "Cultural celebration",
                "Sustainable growth"
              ].map((text, idx) => (
                <div key={idx} className="bg-white/30 backdrop-blur-md p-6 rounded-xl border border-white/50 shadow-lg flex items-center justify-center hover:bg-white/40 transition-all duration-300 group">
                  <span className="font-bold text-slate-900 text-center drop-shadow-sm group-hover:scale-105 transition-transform">{text}</span>
                </div>
              ))}
            </div>

            <p className="text-lg text-slate-700 leading-relaxed max-w-4xl font-medium drop-shadow-sm">
              We believe in uplifting local voices, promoting heritage and creativity, and supporting initiatives that make life better for everyone who calls Puducherry home — residents, students, entrepreneurs, and travellers alike.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto space-y-16 animate-fade-up">
            <div className="text-center space-y-6">
              <span className="inline-block px-5 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wider uppercase border border-primary/20 shadow-sm">
                Our Aspiration
              </span>
              <h2 className="text-5xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-violet-500 to-primary pb-2">
                Our Vision
              </h2>
              <p className="text-xl md:text-2xl text-slate-700 leading-relaxed max-w-3xl mx-auto font-light">
                We aim to foster a Puducherry that is <span className="font-semibold text-primary">connected</span>, <span className="font-semibold text-primary">vibrant</span>, and <span className="font-semibold text-primary">sustainable</span>.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { text: "Every citizen has access to quality opportunities", gradient: "from-blue-500 to-cyan-500" },
                { text: "Culture and heritage are preserved and shared", gradient: "from-purple-500 to-pink-500" },
                { text: "The economy thrives through innovation, tourism, and entrepreneurship", gradient: "from-amber-500 to-orange-500" },
                { text: "Education, spirituality, and well-being flourish for all", gradient: "from-emerald-500 to-teal-500" }
              ].map((item, i) => (
                <div key={i} className="group flex items-center gap-6 p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0 text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <Eye size={24} />
                  </div>
                  <span className="text-lg md:text-xl text-slate-800 font-medium leading-snug group-hover:text-blue-900 transition-colors">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="relative mt-12">
              <div className="absolute inset-0 bg-blue-900/5 transform skew-y-1 rounded-3xl" />
              <div className="relative bg-white p-10 md:p-12 rounded-3xl border border-slate-100 shadow-lg text-center">
                <div className="text-blue-500 text-5xl font-serif leading-none mb-6 opacity-30">“</div>
                <p className="text-xl md:text-2xl text-slate-800 italic leading-relaxed font-serif">
                  We aim to celebrate the rich heritage, diverse communities, and natural beauty of Puducherry while advancing a future of shared prosperity and pride.
                </p>
                <div className="mt-8 flex justify-center">
                  <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-up">
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-semibold tracking-wide uppercase mb-4">
                Our Path to Progress
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                Mission Pillars
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-secondary/50 via-secondary to-secondary/50 rounded-full mx-auto mb-6" />
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                We build our vision on strong foundations. Each pillar represents a core commitment to the people and future of Puducherry.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-up delay-100">
              {[
                {
                  title: "Community & Culture",
                  icon: Users,
                  color: "bg-orange-100 text-orange-600",
                  border: "hover:border-orange-200",
                  items: ["Preserving languages, arts, and living traditions", "Celebrating festivals that unite our diverse social fabric"]
                },
                {
                  title: "Education & Youth",
                  icon: GraduationCap,
                  color: "bg-blue-100 text-blue-600",
                  border: "hover:border-blue-200",
                  items: ["Ensuring access to world-class skill development", "Empowering future leaders through civic engagement"]
                },
                {
                  title: "Sustainable Prosperity",
                  icon: Briefcase,
                  color: "bg-emerald-100 text-emerald-600",
                  border: "hover:border-emerald-200",
                  items: ["Supporting responsible, eco-friendly local businesses", "Creating dignified jobs that respect our heritage"]
                },
                {
                  title: "Environment & Heritage",
                  icon: Leaf,
                  color: "bg-teal-100 text-teal-600",
                  border: "hover:border-teal-200",
                  items: ["Protecting our unique architectural and natural landscapes", "Advocating for clean, green, and breathable neighborhoods"]
                }
              ].map((m) => (
                <div key={m.title} className={`bg-card p-8 rounded-2xl border border-border transition-all duration-300 shadow-sm hover:shadow-xl group relative overflow-hidden ${m.border}`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-transparent to-muted/50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500 opacity-50" />

                  <div className="flex items-center gap-5 mb-6 relative z-10">
                    <div className={`w-14 h-14 rounded-2xl ${m.color} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                      <m.icon size={28} />
                    </div>
                    <h3 className="font-display font-bold text-2xl text-foreground group-hover:text-primary transition-colors">
                      {m.title}
                    </h3>
                  </div>

                  <div className="space-y-4 relative z-10">
                    {m.items.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40 mt-2.5 group-hover:bg-primary transition-colors" />
                        <p className="text-muted-foreground text-lg leading-relaxed group-hover:text-foreground/80 transition-colors">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center animate-fade-up delay-200">
              <p className="text-xl text-foreground/80 font-medium italic">
                "Building a harmonious future, one pillar at a time."
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Patron Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 animate-fade-up">
                <span className="text-primary font-medium text-sm uppercase tracking-wider">
                  Our Patron
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4">
                  Shri A. Namassivayam
                </h2>
                <p className="text-xl text-muted-foreground mb-4">
                  Hon. Home Minister of Puducherry
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With visionary leadership rooted in public service and a deep commitment to Puducherry's transformation, our Patron guides Namma Puducherry toward creating systemic change. His stewardship ensures our initiatives remain grounded in governance excellence and citizen welfare, empowering authentic partnerships across all sectors.
                </p>
              </div>
              <div className="order-1 lg:order-2 animate-fade-up delay-200">
                <div className="aspect-square rounded-2xl overflow-hidden card-shadow">
                  <img
                    src={namasivayamImage}
                    alt="Shri A. Namassivayam, Hon. Home Minister of Puducherry"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder & Leadership Section */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-20 lg:space-y-24">

            {/* Founder: Muthukumar Subramanian */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              <div className="animate-fade-up lg:sticky lg:top-8 lg:col-span-1">
                <div className="aspect-square rounded-2xl gradient-bg-light flex items-center justify-center">
                  <div className="aspect-square rounded-2xl overflow-hidden card-shadow">
                    <img
                      src={muthuImage}
                      alt="Muthukumar Subramanian"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="animate-fade-up delay-200 space-y-4 lg:col-span-2 lg:pl-8">
                <span className="text-primary font-medium text-sm uppercase tracking-wider">
                  Founder
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4">
                  Muthukumar Subramanian
                </h2>
                <p className="text-muted-foreground leading-relaxed text-justify">
                  Muthukumar Subramanian began his professional journey in the telecommunications industry, where he developed and implemented large-scale Customer Care, Network Activation and Billing systems for leading telecom operators across the Asia Pacific. During his tenure at Oracle Singapore, he gained deep domain expertise and exposure to world-class infrastructure, governance and operational systems.
                </p>
                <p className="text-muted-foreground leading-relaxed text-justify">
                  Despite a successful career overseas, he felt a strong connection to Puducherry — his hometown and the place that shaped his values. Driven by a desire to give back rather than simply advance his career, he made the purposeful decision to return home.
                </p>

                <p className="text-muted-foreground leading-relaxed text-justify">
                  Coming from a family with a long legacy in the transport sector and strong educational foundations, Muthukumar envisions a Puducherry that grows with world-class efficiency, He manages transport fleet, bringing operational discipline and customer-centric practices to everyday services.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Community Leaders Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 animate-fade-up">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-2">
              Community Leaders
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Dedicated social workers and leaders who contribute at the grassroots to uplift communities across Puducherry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* 1. N. Saravanan */}
            <div className="animate-fade-up rounded-2xl overflow-hidden card-shadow p-6 bg-card/80 backdrop-blur-sm">
              <div className="aspect-square rounded-2xl overflow-hidden mb-4">
                <img src={saravananImage} alt="N. Saravanan" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">N. Saravanan</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                A dedicated social worker and community leader from Puducherry with extensive experience in public service, rural development, youth empowerment, and welfare initiatives. Actively involved in addressing social issues, organizing development programs, and participating in various community welfare activities. Recognized for strong leadership, commitment to public welfare, and grassroots-level engagement. He holds a Bachelor's degree in Sociology.
              </p>
            </div>

            {/* 2. R. Selvaganapthy */}
            <div className="animate-fade-up rounded-2xl overflow-hidden card-shadow p-6 bg-card/80 backdrop-blur-sm">
              <div className="aspect-square rounded-2xl overflow-hidden mb-4">
                <img src={selvaganapthyImage} alt="R. Selvaganapthy" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">R. Selvaganapthy</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                A social worker and former councilor who has strong commitment towards development of Puducherry. He has been actively involved in community development for over a decade, working on initiatives related to educational support, livelihood training, women’s empowerment, and access to government welfare schemes. He has a Bachelors Degree in Economics and Masters Degree in Public Administration. He has also pursued a Diploma in Agriculture
              </p>
            </div>

            {/* 3. P. Vinarassan */}
            <div className="animate-fade-up rounded-2xl overflow-hidden card-shadow p-6 bg-card/80 backdrop-blur-sm">
              <div className="aspect-square rounded-2xl overflow-hidden mb-4">
                <img src={vinarassanImage} alt="P. Vinarassan" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">P. Vinarassan</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Over the years, P. Vinarassan regularly conducts outreach camps in rural and semi-urban areas, helping individuals access government welfare schemes and counselling vulnerable youth. He focuses on education support, skill-development programs, and legal-rights awareness. Known for his compassion, persistence, and strong grassroots connection, he continues to work tirelessly to build a more inclusive society.
              </p>
            </div>

            {/* 4. T. Kamaraj */}
            <div className="animate-fade-up rounded-2xl overflow-hidden card-shadow p-6 bg-card/80 backdrop-blur-sm">
              <div className="aspect-square rounded-2xl overflow-hidden mb-4">
                <img src={kamrajImage} alt="T. Kamaraj" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">T. Kamaraj</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Entrepreneur and dedicated social worker from Puducherry with 15 years of experience demonstrating a strong commitment to serving disadvantaged youth and adults, including homeless, emancipated youth, and special-needs populations. Has served flood-affected areas in Puducherry, Tamil Nadu and Kerala since 2015. Documented success overcoming challenges of limited resources to design high-quality, cost-effective, and comprehensive programs that improve lives. Skilled at building community support and strategic partnerships to transform under-served populations.
              </p>
            </div>

            {/* 5. S. Samraj */}
            <div className="animate-fade-up rounded-2xl overflow-hidden card-shadow p-6 bg-card/80 backdrop-blur-sm">
              <div className="aspect-square rounded-2xl overflow-hidden mb-4">
                <img src={samrajImage} alt="S. Samraj" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">S. Samraj</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                A dedicated social worker and community leader from Puducherry with extensive experience in public service, rural development, youth empowerment, and welfare initiatives. Actively involved in addressing social issues, organizing development programs, and participating in various community welfare activities. Recognized for strong leadership, commitment to public welfare, and grassroots-level engagement. He is deeply respected for his humility, leadership, and strong connection to the community. He has a Bachelors degree in Sociology.
              </p>
            </div>

            {/* 6. Mourougan Caliaperumal */}
            <div className="animate-fade-up rounded-2xl overflow-hidden card-shadow p-6 bg-card/80 backdrop-blur-sm">
              <div className="aspect-square rounded-2xl overflow-hidden mb-4">
                <img src={mourouganImage} alt="Mourougan Caliaperumal" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">Mourougan Caliaperumal</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                A visionary technology leader with over 20 years of experience building and scaling global technology organizations. As Chairman & Managing Director of Twilight IT Solutions and Founder of App Xperts, he champions educational and technological empowerment. He is passionate about mentoring job-ready talent through Appxperts Academy and driving digital transformation initiatives that position organizations—and communities—for future growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Our Values
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full mx-auto mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="relative overflow-hidden rounded-2xl card-shadow text-center group hover:elevated-shadow transition-all duration-300 animate-fade-up border border-border/40 hover:border-primary/30"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0">
                  <img
                    src={value.bgImage}
                    alt=""
                    className="w-full h-full object-cover opacity-15 group-hover:opacity-25 transition-opacity duration-300"
                  />
                </div>
                <div className="relative p-7 bg-card/80 backdrop-blur-sm h-full">
                  <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-soft">
                    <value.icon className="text-primary-foreground" size={28} />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-3 text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-2xl mx-auto text-center animate-fade-up">
            <p className="text-muted-foreground">
              <strong className="text-foreground">Radical Transparency & Community Voice</strong> are non-negotiable. Every decision reflects community input, every outcome is shared openly, and every voice has a seat at the table.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
