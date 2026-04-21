import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Link } from "react-router";
import {
  Briefcase,
  Heart,
  PartyPopper,
  GraduationCap,
  Building2,
  Palette,
  Users2,
  Music,
} from "lucide-react";

export default function OurServices() {
  const services = [
    {
      icon: Briefcase,
      title: "Corporate Events",
      description:
        "From conferences to product launches, we create professional events that leave a lasting impression on your stakeholders.",
      features: ["Team Building", "Conferences", "Product Launches", "Corporate Parties"],
    },
    {
      icon: Heart,
      title: "Weddings",
      description:
        "Your special day deserves perfection. We handle every detail to create the wedding of your dreams.",
      features: ["Venue Selection", "Vendor Coordination", "Day-of Coordination", "Full Planning"],
    },
    {
      icon: PartyPopper,
      title: "Social Events",
      description:
        "Celebrate life's milestones with style. We bring creativity and energy to every celebration.",
      features: ["Birthday Parties", "Anniversaries", "Holiday Parties", "Family Gatherings"],
    },
    {
      icon: GraduationCap,
      title: "Educational Events",
      description:
        "Seminars, workshops, and training sessions designed to engage and inspire participants.",
      features: ["Workshops", "Seminars", "Training Sessions", "Networking Events"],
    },
    {
      icon: Building2,
      title: "Venue Management",
      description:
        "Complete venue coordination ensuring your space is perfect for your event's needs.",
      features: ["Venue Selection", "Layout Design", "Vendor Access", "Setup & Breakdown"],
    },
    {
      icon: Palette,
      title: "Event Design",
      description:
        "Creative design services that bring your vision to life with stunning visual impact.",
      features: ["Theme Development", "Decor Planning", "Lighting Design", "Branding"],
    },
    {
      icon: Users2,
      title: "Guest Management",
      description:
        "Seamless registration, communication, and coordination for all your attendees.",
      features: ["RSVP Management", "Check-in Services", "Guest Communication", "Seating Plans"],
    },
    {
      icon: Music,
      title: "Entertainment",
      description:
        "Curated entertainment options to make your event memorable and engaging.",
      features: ["Live Music", "DJs", "Performers", "Interactive Experiences"],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="text-white py-16 lg:py-24 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl lg:text-5xl mb-4">Our Services</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Comprehensive event management solutions tailored to your unique needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-gradient-to-br from-purple-500 to-pink-500">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <div className="w-1.5 h-1.5 rounded-full mr-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl mb-4">Let's Create Something Amazing Together</h2>
            <p className="text-xl text-gray-600 mb-8">
              Ready to start planning your next event? Get in touch with us today.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white border-0">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
