import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users } from "lucide-react";
import summitImg from "@/assets/events/AURO2.png";
import campusImg from "@/assets/events/campusconversions.png";
import entrepreneurImg from "@/assets/events/enterprenurship.png";
import Slide2 from "@/assets/Slide2.JPG";
import Slide3 from "@/assets/Slide3.JPG";
import heroBg from "@/assets/event.png";
import SEO from "@/components/SEO";

interface EventItem {
  id: number;
  title: string;
  image: string;
  date: string;
  time: string;
  location: string;
  category: string;
  registrationLink?: string;
}

const upcomingEvents: EventItem[] = [
  {
    id: 1,
    title: "Namma Puducherry Launch",
    image: Slide3,
    date: "20th December 2025",
    time: "5:00 PM - 7:00 PM",
    location: "Open Air Auditorium (Old Port)",
    category: "Flagship Event",
    registrationLink: "https://forms.gle/kF26dAqH8opEz9Gk8",
  },

];

const featuredEvents: EventItem[] = [
  {
    id: 3,
    title: "Namma Puducherry Summit 2025/2026",
    image: summitImg,
    date: "Planned 2025",
    time: "To Be Announced",
    location: "Puducherry",
    category: "Flagship Event",
  },
  {
    id: 4,
    title: "Campus Conversations",
    image: campusImg,
    date: "Rolling Program",
    time: "Various Times",
    location: "Various Campuses",
    category: "Education",
  },
  {
    id: 5,
    title: "Entrepreneurship Accelerator Series",
    image: entrepreneurImg,
    date: "Quarterly",
    time: "10:00 AM - 4:00 PM",
    location: "Puducherry",
    category: "Business",
  },
];

const pastEvents: EventItem[] = [
  {
    id: 6,
    title: "Community Gathering",
    image: Slide2,
    date: "October 2024",
    time: "Completed",
    location: "Puducherry",
    category: "Community",
  },
];

const eventSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Namma Puducherry Summit",
  startDate: "2025-01-01",
  location: {
    "@type": "Place",
    name: "Puducherry",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Puducherry",
      addressCountry: "IN",
    },
  },
  organizer: {
    "@type": "Organization",
    name: "Namma Puducherry",
    url: "https://nammapuducherry.org",
  },
};

const EventCard = ({ event }: { event: EventItem }) => (
  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 overflow-hidden flex flex-col group">
    {/* Event Image */}
    <div className="aspect-[4/5] relative overflow-hidden bg-slate-50">
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
      />
    </div>

    {/* Event Details */}
    <div className="p-6 pt-4 flex-1 flex flex-col items-center text-center space-y-4">
      <h3 className="text-xl font-display font-bold text-primary leading-tight px-2">
        {event.title}
      </h3>

      <div className="space-y-2 w-full pt-2">
        {event.registrationLink ? (
          <Button className="w-full bg-primary hover:bg-primary/90 transition-colors duration-300" asChild>
            <a href={event.registrationLink} target="_blank" rel="noopener noreferrer">
              Register Now <ArrowRight size={16} className="ml-2" />
            </a>
          </Button>
        ) : (
          <>
            <div className="flex items-center justify-center gap-2">
              <span className="text-red-500 font-medium text-sm">Location :</span>
              <span className="text-slate-600 font-medium text-sm">
                {event.location}
              </span>
            </div>

            <div className="flex items-center justify-center gap-2">
              <span className="text-red-500 font-medium text-sm">Date :</span>
              <span className="text-slate-600 font-medium text-sm">
                {event.date}
              </span>
            </div>

            <div className="flex items-center justify-center gap-2">
              <span className="text-red-500 font-medium text-sm">Time :</span>
              <span className="text-slate-600 font-medium text-sm">
                {event.time}
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  </div>
);

const Events = () => {
  return (
    <Layout>
      <SEO
        title="Upcoming Events"
        description="Join Namma Puducherry's community events, workshops, cultural festivals, and business summits. Be part of the change."
        keywords="Puducherry Events 2025, Business Summit Pondicherry, Cultural Festivals, Namma Puducherry Workshops"
      />
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="Namma Puducherry Events"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
              Events
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Shaping Our Future Together
            </h1>
            <p className="text-lg text-slate-700 leading-relaxed font-medium">
              From business summits to cultural celebrations, every Namma
              Puducherry event is designed to connect, inspire, and drive
              meaningful action.
            </p>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Upcoming Events Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold text-primary mb-8 pl-2 border-l-4 border-red-500">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}


          </div>
        </div>

        {/* Past Events Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold text-slate-700 mb-8 pl-2 border-l-4 border-slate-500">
            Past Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>

        {/* Featured Initiatives Section */}
        <div>
          <h2 className="text-3xl font-display font-bold text-blue-900 mb-8 pl-2 border-l-4 border-blue-500">
            Featured Initiatives
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Events;
