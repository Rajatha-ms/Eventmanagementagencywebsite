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
    { name: "Rajatha", role: "Co-Founder" },
    { name: "Kavya", role: "Co-Founder" },
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
                Every great agency starts with a single, defining celebration. For us, that foundation was our very first baby shower. Designed with meticulous attention to detail, it proved how thoughtful styling and a warm atmosphere could transform a space into a lasting memory. That success set the DNA for Scripted Rituals: a commitment to designing elegant, purposeful experiences that bring people together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Founders */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl mb-6">The Founders: Strategic Execution meets People-First Design</h2>
            <div className="space-y-4 text-lg text-gray-700">
              <p>
                Rajatha and Kavya bring a unique synergy of professional leadership to the world of event design.
              </p>
              <p>
                Rajatha thrives on precision and high-level analytical oversight. She ensures that every event is anchored by seamless timelines and optimized logistics, managing every moving part to perfection. Kavya specializes in the human experience and the art of connection. She understands how to design environments that foster engagement and meaningful interaction, ensuring every event—whether social or educational—is driven by a clear, impactful narrative.
              </p>
              <p>
                Together, they apply executive-grade stakeholder management and operational excellence to "script" perfect events. This professional foundation ensures that every production is handled with a level of accountability and strategic rigor that is rare in the creative industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl mb-6">Our Philosophy: Responsive to Modern Times</h2>
            <div className="space-y-4 text-lg text-gray-700">
              <p>
                At Scripted Rituals, we don't just design for the past; we design for the present. We focus on what is truly needed in today's landscape—responding to the shifting priorities of our community.
              </p>
              <p>
                Whether it is addressing the critical need for accessible medical clarity through specialized health forums, or reflecting the philosophy of today's youth who value the joy and connection of a "wedding" experience without the traditional constraints, we adapt. We believe events should evolve with the people they serve, prioritizing authentic experience and real-world relevance over outdated formalities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bespoke Offerings */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl mb-6">Bespoke Offerings: A Versatile Portfolio</h2>
            <div className="space-y-4 text-lg text-gray-700">
              <p>
                While our expertise spans the full spectrum of event design, we specialize in high-concept productions where atmosphere meets authority. Our work is best reflected through our signature pillars:
              </p>
              <div className="mt-6 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-purple-600">The Collective Pulse</h3>
                  <p>An example of our commitment to modern health needs. We coordinate with medical specialists to bridge the gap between experts and the community, demystifying complex topics through structured presentations and meaningful dialogue.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-purple-600">Immersive Social & Milestone Events</h3>
                  <p>We celebrate life's big transitions—from birthdays and anniversaries to baby showers. We also pioneer modern rituals, like high-energy "Fake Weddings," which capture the magic of celebration while focusing entirely on guest connection and joy.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-purple-600">Corporate & Brand Partnerships</h3>
                  <p>We collaborate with brands to translate corporate values into physical realities. From product launches to private galas, we ensure every texture and logistical touchpoint aligns with a high-standard vision.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Scripted Rituals Promise */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl mb-6">The Scripted Rituals Promise</h2>
            <p className="text-lg text-gray-700">
              We partner with you to take the weight off your shoulders. We don't just host events; we design the atmosphere for life's most important moments through meticulous project management and bespoke execution.
            </p>
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
                  <p className="text-purple-600">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
