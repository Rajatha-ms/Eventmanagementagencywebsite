import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Palette, Calendar, Building, Users, Group, Sparkles, Zap, Volume2, UtensilsCrossed, Handshake, Heart, PartyPopper } from "lucide-react";
import portfolioImg from '../../imports/portfolio.png';
import collectivePulseImg from '../../imports/Collective_Pulse.png';
import babyshowerImg from '../../imports/babyshower.png';

export default function Home() {
  const stats = [
    { number: "600", label: "Events Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "15Y", label: "Years Experience" },
    { number: "88", label: "Team Members" },
  ];

  const eventImages = [
    {
      url: "http://localhost:5173/src/imports/babyshower.png?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      alt: "Baby shower event",
      title: "Social",
    },
    {
      url: "https://images.unsplash.com/photo-1768508949307-044ec3c1836a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      alt: "People at formal event",
      title: "Networking Event",
    },
    {
      url: "http://localhost:5173/src/imports/Immersive_wedding.jpg?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      alt: "Woman at formal gathering",
      title: "The 'Fake' Wedding",
    },
  ];

  const testimonials = [
    {
      name: "Meenakshi Jain",
      role: "Happy customer",
      text: "I hired Scripted Rituals for my baby shower and wow! The event was a great success. Kavya and Rajatha made everything so easy, simple, and stress-free. They were very diligent in getting all of my ideas together and ensuring the day turned out exactly how I envisioned. They worked until late at night on the setup and went above and beyond. The room looked amazing and everyone loved it! Thank you for taking the load off my shoulders; I loved every moment and will definitely use this team again.",
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
              From the first sketch to the final curtain, we plan, design, and script bespoke experiences that bring your vision to life.
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 md:p-6 hover:bg-white/20 transition-all min-h-24 flex flex-col justify-center text-center">
              <Sparkles className="w-8 h-8 mx-auto mb-2 text-white" />
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2">Creative</div>
              <div className="text-xs sm:text-sm md:text-base lg:text-lg opacity-90 space-y-1">
                <div>Event Concept</div>
                <div>Design</div>
                <div>Entertainment</div>
                <div>Immersive themes</div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 md:p-6 hover:bg-white/20 transition-all min-h-24 flex flex-col justify-center text-center">
              <div className="flex justify-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-white" />
                <Volume2 className="w-5 h-5 text-white" />
                <UtensilsCrossed className="w-5 h-5 text-white" />
              </div>
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2">Production</div>
              <div className="text-xs sm:text-sm md:text-base lg:text-lg opacity-90 space-y-1">
                <div>Catering management</div>
                <div>Venue sourcing</div>
                <div>Logistics</div>
                <div>Coordination</div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 md:p-6 hover:bg-white/20 transition-all min-h-24 flex flex-col justify-center text-center">
              <div className="flex justify-center gap-2 mb-2">
                <Group className="w-5 h-5 text-white" />
                <Handshake className="w-5 h-5 text-white" />
              </div>
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2">Corporate</div>
              <div className="text-xs sm:text-sm md:text-base lg:text-lg opacity-90 space-y-1">
                <div>Conferences</div>
                <div>Summits</div>
                <div>Brand Activations</div>
                <div>Community Events</div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 md:p-6 hover:bg-white/20 transition-all min-h-24 flex flex-col justify-center text-center">
              <div className="flex justify-center gap-2 mb-2">
                <Users className="w-5 h-5 text-white" />
                <Heart className="w-5 h-5 text-white" />
              </div>
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
              <img
                src={portfolioImg}
                alt="Portfolio preview"
                className="rounded-lg w-full h-64 object-cover md:col-span-2"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl mb-6">From Vision to Reality: Our Curated Approach</h2>
              <p className="text-base md:text-lg text-gray-700 mb-6">
               At Scripted Rituals, we partner with individuals and brands to translate unique visions into realities. We believe every event is a narrative waiting to be told. Whether we are designing an intimate social celebration or a high-impact corporate gathering, we blend meticulous precision with unparalleled atmosphere to create moments that linger. Explore our specialized event pillars and signature series below.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Collective Pulse Subsection */}
      <section className="mt-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-white rounded-lg shadow p-6 md:p-10 flex flex-col md:flex-row items-center gap-8">
            <img
              src={collectivePulseImg}
              alt="The Collective Pulse event"
              className="w-full max-w-xs md:max-w-xs rounded-lg object-cover mb-6 md:mb-0"
            />
            
            <div className="flex-1">
                                      <p className="text-base md:text-lg text-gray-700 mb-6">
               OUR SIGNATURE SERIES
              </p>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">The Collective Pulse</h3>
              <h4 className="text-lg md:text-xl font-semibold mb-4 text-gray-700">Our signature series connecting the community with medical specialists.</h4>
              <p className="text-base md:text-lg text-gray-600">
                Knowledge is the best medicine. Our sessions bring medical experts directly to you to demystify complex topics. Listen to a deep-dive presentation on a specific area of expertise, followed by an open Q&A where your voice is heard and your questions are answered.
              </p><br/>
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
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-5xl mx-auto">
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
