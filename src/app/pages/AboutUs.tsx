import { Card, CardContent } from "../components/ui/card";
import { Award, Heart, Target, TrendingUp } from "lucide-react";

export default function AboutUs() {
  const values = [
    {
      icon: Heart,
      title: "Passion",
      description: "We pour our hearts into every event, treating each one as our own",
    },
    {
      icon: Target,
      title: "Precision",
      description: "Meticulous attention to detail ensures flawless execution",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We set the highest standards and consistently exceed expectations",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Constantly evolving to bring fresh ideas and modern solutions",
    },
  ];

  const team = [
    { name: "Sarah Mitchell", role: "Founder & CEO", specialty: "Corporate Events" },
    { name: "Michael Chen", role: "Creative Director", specialty: "Event Design" },
    { name: "Emily Rodriguez", role: "Operations Manager", specialty: "Logistics" },
    { name: "David Thompson", role: "Client Relations", specialty: "Customer Experience" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="text-white py-16 lg:py-24 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl lg:text-5xl mb-4">About Scripted Rituals</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Crafting unforgettable moments through the art of event management
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl mb-6">Our Story</h2>
            <div className="space-y-4 text-lg text-gray-700">
              <p>
                Founded in 2015, Scripted Rituals was born from a simple belief: every event
                deserves to be extraordinary. What started as a small team of passionate event
                enthusiasts has grown into a full-service event management company known for
                transforming visions into reality.
              </p>
              <p>
                Over the years, we've had the privilege of creating memorable experiences for
                hundreds of clients, from intimate gatherings to large-scale corporate events.
                Our approach combines creative innovation with meticulous planning, ensuring
                that every detail is perfect.
              </p>
              <p>
                Today, we're proud to be recognized as industry leaders, but we've never lost
                sight of what matters most: creating genuine connections and unforgettable
                moments for our clients and their guests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-4xl mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index}>
                  <CardContent className="pt-8 pb-6 text-center">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-gradient-to-br from-purple-400 to-pink-400">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-4xl mb-12 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-8 pb-6">
                  <div className="w-24 h-24 rounded-full mx-auto mb-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500"></div>
                  <h3 className="text-xl mb-1">{member.name}</h3>
                  <p className="mb-2 text-purple-600">{member.role}</p>
                  <p className="text-sm text-gray-600">{member.specialty}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
