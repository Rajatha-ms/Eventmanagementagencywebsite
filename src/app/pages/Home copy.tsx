import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Palette, Calendar, Building, Users } from "lucide-react";

export default function Home() {
  const stats = [
    { number: "600", label: "Events Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "15Y", label: "Years Experience" },
    { number: "88", label: "Team Members" },
  ];

  const eventImages = [
    {
      url: "https://images.unsplash.com/photo-1768851244529-39180171a168?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      alt: "Empty event space with decorated tables",
      title: "Corporate Gala",
    },
    {
      url: "https://images.unsplash.com/photo-1768508949307-044ec3c1836a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      alt: "People at formal event",
      title: "Networking Event",
    },
    {
      url: "https://images.unsplash.com/photo-1768508947825-0a63f7c46a2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      alt: "Woman at formal gathering",
      title: "Executive Conference",
    },
    {
      url: "https://images.unsplash.com/photo-1769812344142-00c7f6584885?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      alt: "Outdoor wedding ceremony",
      title: "Wedding Ceremony",
    },
    {
      url: "https://images.unsplash.com/photo-1768508948835-7dbab7ca6d58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      alt: "Formal dinner event",
      title: "Gala Dinner",
    },
    {
      url: "https://images.unsplash.com/photo-1762968269894-1d7e1ce8894e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      alt: "Conference presentation",
      title: "Business Summit",
    },
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      role: "CEO, Tech Innovations",
      text: "Scripted Rituals transformed our annual conference into an unforgettable experience. Their attention to detail and professionalism exceeded all expectations.",
    },
    {
      name: "David Thompson",
      role: "Wedding Client",
      text: "Our wedding day was absolutely perfect thanks to the amazing team. They handled every detail with care and made our dream celebration come true.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative text-white py-32 lg:py-48 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1768508948485-a7adc1f3427f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920')`,
        }}
      >
        
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              Every event has a script. We bring yours to life.
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 opacity-90">
              We partner with you to author every detail of your event. From the first sketch to the final curtain, we plan, design, and script bespoke experiences that bring your vision to life.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="text-base md:text-lg px-6 md:px-8 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white border-0"
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-center text-white mb-12">Types of Events We Specialize In</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 md:p-6 hover:bg-white/20 transition-all min-h-24 flex flex-col justify-center text-center">
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2">Creative</div>
              <div className="text-xs sm:text-sm md:text-base lg:text-lg opacity-90 space-y-1">
                <div>Event Concept</div>
                <div>Design</div>
                <div>Entertainment</div>
                <div>Immersive themes</div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 md:p-6 hover:bg-white/20 transition-all min-h-24 flex flex-col justify-center text-center">
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2">Production</div>
              <div className="text-xs sm:text-sm md:text-base lg:text-lg opacity-90 space-y-1">
                <div>Catering management</div>
                <div>Venue sourcing</div>
                <div>Logistics</div>
                <div>Coordination</div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 md:p-6 hover:bg-white/20 transition-all min-h-24 flex flex-col justify-center text-center">
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2">Corporate</div>
              <div className="text-xs sm:text-sm md:text-base lg:text-lg opacity-90 space-y-1">
                <div>Conferences</div>
                <div>Summits</div>
                <div>Brand Activations</div>
                <div>Community Events</div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 md:p-6 hover:bg-white/20 transition-all min-h-24 flex flex-col justify-center text-center">
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2">Social</div>
              <div className="text-xs sm:text-sm md:text-base lg:text-lg opacity-90 space-y-1">
                <div>Weddings</div>
                <div>Family Celebrations</div>
                <div>Luxury Socials</div>
                <div>Milestones</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1768508950790-3bbdfe3973c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
                alt="Event gathering"
                className="rounded-lg w-full h-64 object-cover"
              />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1768508947591-b650dacc70a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
                alt="Formal dinner table"
                className="rounded-lg w-full h-64 object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl mb-6">Embark On A Visual Journey Through Our Portfolio</h2>
              <p className="text-base md:text-lg text-gray-700 mb-6">
                Discover our portfolio of exceptional events, each crafted with meticulous
                attention to detail and creative excellence. From corporate conferences to
                elegant weddings, we transform spaces into unforgettable experiences.
              </p>
              <Link to="/upcoming-events">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0"
                >
                  View Our Events
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Always Staying One-Step Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Always Staying One-Step Ahead</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our diverse portfolio of successful events that showcase our expertise
              and commitment to excellence
            </p>
          </div>
        </div>
      </section>

      {/* Event Gallery Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventImages.map((image, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
              >
                <div className="relative">
                  <ImageWithFallback
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-64 object-cover"
                  />
                  <div
                    className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-purple-600/90 to-transparent"
                  >
                    <h3 className="text-white text-xl font-semibold">{image.title}</h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Our Clients Testimonials And Success Stories</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Hear what our clients say about their experience working with us
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-8 bg-gradient-to-br from-pink-500 to-orange-500 border-0"
              >
                <CardContent className="pt-0">
                  <div className="mb-6">
                    <div className="text-6xl opacity-50 text-white">"</div>
                  </div>
                  <p className="text-lg mb-6 leading-relaxed text-white">{testimonial.text}</p>
                  <div className="text-white">
                    <div className="font-semibold text-xl">{testimonial.name}</div>
                    <div className="opacity-90">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
