import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Link } from "react-router";
import { ChevronDown } from "lucide-react";
import {
  Briefcase,
  Users2,
  Building2,
  Palette,
  Music,
  GraduationCap,
  PartyPopper,
  Heart,
  Calendar,
  UtensilsCrossed,
  ClipboardList,
  Megaphone,
  Lightbulb,
} from "lucide-react";
import collectivePulseImg from '../../imports/Collective_Pulse.png';
import FakeweddingImg from '../../imports/Immersive_wedding.jpg';

export default function OurServices() {
  const [flippedCards, setFlippedCards] = useState<{ [key: string]: number | null }>({
    signature: null,
    corporate: null,
    social: null,
  });

  const toggleFlip = (section: string, index: number) => {
    setFlippedCards((prev) => ({
      ...prev,
      [section]: prev[section] === index ? null : index,
    }));
  };

  const signatureServices = [
    {
      image: collectivePulseImg,
      title: "The Collective Pulse",
      subtitle: "Bridging the gap between medical expertise and community wellness.",
      backTitle: "The Purpose",
      backDescription: "A signature Scripted Rituals production designed to transform the way we engage with healthcare. We curate high-level forums where clinical authority meets an approachable, engaging environment.",
      backFeatures: [
        "The Concept: A themed series of expert-led talks that demystify complex health topics in an elegant, social setting.",
        "The Experience: Guests move beyond traditional seminars into a space of discovery, featuring structured specialist presentations and meaningful dialogue.",
        "The Goal: To replace medical jargon with clarity, empowering the community through direct access to leading health professionals.",
        "The Ritual: An evening of intellectual energy, curated networking, and accessible expertise.",
      ],
    },
    {
      image: FakeweddingImg,
      title: "The 'Fake' Wedding Party",
      subtitle: "The magic of the celebration, scripted for pure experience.",
      backTitle: "The Experience",
      backDescription: "A fully produced, ticketed event by Scripted Rituals that captures the electric energy of a grand wedding night—without the pressure of the ceremony.",
      backFeatures: [
        "The Concept: All the best parts of a wedding—the outfits, the music, and the ceremonial moments—produced as a high-energy celebration.",
        "The Vibe: A night of uninhibited fun in a real luxury venue, designed for those who love the 'wedding feeling' but want to skip the obligations.",
        "The Difference: No expectations, no family dynamics, and no awkward small talk. Every guest is there for one reason only: to hit the dance floor.",
        "The Script: A meticulously planned 'wedding party' featuring live music, non-stop dancing, and a peak party atmosphere from start to finish.",
      ],
    },
  ];

  const corporateServices = [
    {
      icon: Briefcase,
      title: "Conferences & Summits",
      subheadline: "Where industry authority meets high-impact atmosphere.",
      frontDescription: "High-impact environments designed to facilitate knowledge sharing, brand authority, and professional connection.",
      backTitle: "Our Strategic Execution",
      backDescription: "We apply executive-level oversight to ensure your summit is seamless from the first slide to the final session.",
      backFeatures: [
        "Agenda Architecture: Strategic flow design to maximize audience engagement and retention.",
        "Speaker Concierge: High-touch management of VIPs, specialists, and technical rehearsals.",
        "Stakeholder Integration: Seamless alignment of sponsor deliverables and brand messaging.",
        "Technical Scripting: Minute-by-minute Run-of-Show (ROS) management for flawless AV execution.",
        "Operational Logistics: Comprehensive venue 'zoning' to optimize guest flow and registration.",
      ],
    },
    {
      icon: Megaphone,
      title: "Brand Activations",
      subheadline: "Translating brand values into tangible realities.",
      frontDescription: "High-concept environments designed to launch products, ignite social buzz, and create deep emotional connections with your audience.",
      backTitle: "Targeted Brand Impact",
      backDescription: "We treat your brand as the lead character in the story, ensuring every touchpoint is a reflection of your identity.",
      backFeatures: [
        "Sensory Branding: Aligning textures, moods, and aesthetics with your brand guidelines.",
        "Interactive Design: Crafting shareable, 'Instagrammable' moments to drive digital reach.",
        "Logistical Precision: Managing vendor sourcing and site build-outs under tight deadlines.",
        "Lead Engagement: Designing the flow of the space to maximize consumer interaction time.",
      ],
    },
    {
      icon: Users2,
      title: "Community Events",
      subheadline: "Building bridges through shared experiences.",
      frontDescription: "Inclusive gatherings—from neighborhood festivals to medical forums—designed to inform, inspire, and unite diverse groups.",
      backTitle: "Scalable Coordination",
      backDescription: "We manage the complexities of large-scale public interaction with professional diligence and safety.",
      backFeatures: [
        "Public Safety & Zoning: Strategic floor-planning to manage high-volume guest flow and accessibility.",
        "Stakeholder Liaison: Coordinating with specialists, and community leaders.",
        "Content Accessibility: Ensuring complex information (like health topics) is delivered in an engaging format.",
        "Volunteer & Staff Management: Scripting the 'On-the-Ground' team for a welcoming guest experience.",
      ],
    },
    {
      icon: GraduationCap,
      title: "Team Building",
      subheadline: "Strengthening bonds through shared experiences.",
      frontDescription: "Interactive experiences that strengthen team dynamics and foster collaboration.",
      backTitle: "Engagement Excellence",
      backDescription: "We design experiences that break down barriers and build lasting connections.",
      backFeatures: [
        "Workshop Design: Tailored activities that align with your company goals.",
        "Activity Planning: Curated experiences for all team sizes and preferences.",
        "Facilitation: Professional guidance to ensure meaningful participation.",
        "Follow-up Programs: Resources to sustain team growth after the event.",
      ],
    },
  ];

  const socialServices = [
    {
      icon: Heart,
      title: "Weddings & Luxury Socials",
      subheadline: "Elegance scripted to your unique story.",
      frontDescription: "High-end, bespoke celebrations—from traditional unions to modern 'Fake Weddings'—designed for maximum guest connection and aesthetic impact.",
      backTitle: "Flawless Narrative Flow",
      backDescription: "We manage the complexities of your day with graceful precision, ensuring you are free to be a guest at your own celebration.",
      backFeatures: [
        "Vendor Symphony: Rigorous selection and management of premium florists, caterers, and photographers.",
        "Atmosphere Engineering: Detailed design of lighting, textures, and moods to evoke the desired emotion.",
        "Technical Run-of-Show: A minute-by-minute script for cues, speeches, and transitions.",
        "On-site Command: Full-day coordination to manage the 'behind-the-scenes' while you stay in the moment.",
      ],
    },
    {
      icon: PartyPopper,
      title: "Family Gatherings & Baby Showers",
      subheadline: "Thoughtful celebrations for life’s most intimate rituals.",
      frontDescription: "Warm, joyful environments designed to honor new beginnings and family legacy with personalized styling and effortless flow.",
      backTitle: "Stress-Free Management",
      backDescription: "We handle the logistics of your family milestone with care, allowing you to focus entirely on the people who matter most.",
      backFeatures: [
        "Bespoke Styling: Thematic decor that reflects the family’s personality and heritage.",
        "Logistical Simplicity: Handling invitations, RSVPs, and guest communications seamlessly.",
        "Zoning for Connection: Designing layouts that encourage cross-generational interaction and comfort.",
        "Dietary & Comfort Oversight: Meticulous coordination of catering and venue amenities for all ages.",
      ],
    },
    {
      icon: Calendar,
      title: "Milestones",
      subheadline: "Marking the moments that define a lifetime.",
      frontDescription: "Whether it's a golden anniversary or a milestone birthday, we create enveloping atmospheres that celebrate the individual's journey.",
      backTitle: "Precision Planning",
      backDescription: "We orchestrate every highlight of your milestone event, ensuring each special moment is executed with effortless style.",
      backFeatures: [
        "Concept Development: Crafting unique themes that tell a specific life story or achievement.",
        "Entertainment Curation: Sourcing and managing performers, DJs, or live acts tailored to the vibe.",
        "Budget Optimization: Analytical oversight to ensure maximum impact and luxury within your parameters.",
        "Guest Experience Scripting: Managing the flow from arrival to the 'big reveal' for a memorable night.",
      ],
    },
  ];

  const creativeServices = [
    {
      icon: Palette,
      title: "Event Concept & Immersive Themes",
      description: "Designing the atmosphere for life's most important moments.",
      features: ["Theme Development", "Storytelling", "Visual Direction", "Experience Design"],
    },
    {
      icon: Lightbulb,
      title: "Decor & Lighting Design",
      description: "Creating stunning visual impact that transforms spaces.",
      features: ["Set Design", "Lighting Schemes", "Floral & Decor", "Ambient Design"],
    },
    {
      icon: Megaphone,
      title: "Branding & Visual Impact",
      description: "Translating brand identity into physical experiences.",
      features: ["Brand Integration", "Signage & Graphics", "Photo Moments", "Social Sharing Zones"],
    },
    {
      icon: Music,
      title: "Curated Entertainment",
      description: "Memorable entertainment options for engaged guests.",
      features: ["Live Music", "DJs", "Performers", "Interactive Experiences"],
    },
  ];

  const productionServices = [
    {
      icon: Building2,
      title: "Venue Sourcing & Management",
      description: "Finding and managing the perfect space for your event.",
      features: ["Venue Selection", "Layout Design", "Vendor Access", "Setup & Breakdown"],
    },
    {
      icon: UtensilsCrossed,
      title: "Catering Management",
      description: "Coordinating exceptional culinary experiences.",
      features: ["Menu Planning", "Vendor Selection", "Service Coordination", "Dietary Accommodations"],
    },
    {
      icon: Users2,
      title: "Guest Management",
      description: "Seamless registration, communication, and coordination.",
      features: ["RSVP Management", "Check-in Services", "Guest Communication", "Seating Plans"],
    },
    {
      icon: ClipboardList,
      title: "On-site Coordination & Logistics",
      description: "Precision logistics and seamless execution.",
      features: ["Timeline Management", "Vendor Coordination", "Staff Management", "Emergency Response"],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="text-white py-16 lg:py-24 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl lg:text-5xl mb-4">Our Services: Scripting Your Vision into Reality</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Comprehensive event management solutions tailored to your unique needs
          </p>
        </div>
      </section>

      {/* Signature Rituals */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-4xl mb-12 text-center">Our Signature Rituals</h2>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Events designed for the modern world
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {signatureServices.map((service, index) => (
              <div key={index} className="group perspective-1000">
                <div 
                  className={`relative w-full h-[28rem] md:h-80 transition-transform duration-500 transform-style-3d ${flippedCards.signature === index ? 'rotate-y-180' : ''} md:group-hover:rotate-y-180 cursor-pointer`}
                  onClick={() => toggleFlip('signature', index)}
                >
                  {/* Front of Card */}
                  <div className="absolute inset-0 backface-hidden">
                    <Card className="h-full overflow-hidden hover:shadow-xl transition-shadow">
                      <div className="relative h-full">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                          <p className="text-white/90">{service.subtitle}</p>
                          <div className="flex items-center justify-center mt-4 text-xs text-white/70 md:hidden">
                            <span>Tap to learn more</span>
                            <ChevronDown className="w-4 h-4 ml-1" />
                          </div>
                          <p className="text-xs text-white/70 mt-4 hidden md:block">Hover to learn more</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                  {/* Back of Card */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180">
                    <Card className="h-full bg-gradient-to-br from-purple-600 to-pink-500 text-white cursor-pointer overflow-y-auto">
                      <CardHeader className="pb-2 flex-shrink-0">
                        <CardTitle className="text-xl">{service.backTitle}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <p className="text-white/90 text-xs md:text-sm">{service.backDescription}</p>
                        <div className="space-y-1 text-xs">
                          {service.backFeatures.map((feature, idx) => (
                            <div key={idx} className="flex items-start">
                              <div className="w-1.5 h-1.5 rounded-full mr-2 bg-white mt-1 flex-shrink-0"></div>
                              <span className="text-white/85">{feature}</span>
                            </div>
                          ))}
                        </div>
                        <div className="flex items-center justify-center mt-4 text-xs text-white/70 md:hidden flex-shrink-0">
                          <span>Tap to go back</span>
                          <ChevronDown className="w-4 h-4 ml-1 rotate-180" />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate & Brand */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-4xl mb-4 text-center">Corporate & Brand</h2>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
            From high-stakes summits to community engagement
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {corporateServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="group perspective-1000">
                  <div 
                    className={`relative w-full h-[28rem] md:h-80 transition-transform duration-500 transform-style-3d ${flippedCards.corporate === index ? 'rotate-y-180' : ''} md:group-hover:rotate-y-180 cursor-pointer`}
                    onClick={() => toggleFlip('corporate', index)}
                  >
                    {/* Front of Card */}
                    <div className="absolute inset-0 backface-hidden">
                      <Card className="h-full hover:shadow-lg transition-shadow">
                        <CardHeader className="pb-2">
                          <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-gradient-to-br from-purple-500 to-pink-500">
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <CardTitle className="text-xl">{service.title}</CardTitle>
                          <p className="text-sm text-purple-600 font-medium">{service.subheadline}</p>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 text-sm">{service.frontDescription}</p>
                          <div className="flex items-center justify-center mt-4 text-xs text-gray-400 md:hidden">
                            <span>Tap to see more</span>
                            <ChevronDown className="w-4 h-4 ml-1" />
                          </div>
                          <p className="text-xs text-gray-400 mt-4 hidden md:block">Hover to see our strategic execution</p>
                        </CardContent>
                      </Card>
                    </div>
                    {/* Back of Card */}
                    <div className="absolute inset-0 backface-hidden rotate-y-180">
                      <Card className="h-full bg-gradient-to-br from-purple-600 to-pink-500 text-white cursor-pointer overflow-y-auto">
                        <CardHeader className="pb-2 flex-shrink-0">
                          <CardTitle className="text-xl">{service.backTitle}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          <p className="text-white/90 text-xs md:text-sm">{service.backDescription}</p>
                          <div className="space-y-1 text-xs">
                            {service.backFeatures.map((feature, idx) => (
                              <div key={idx} className="flex items-start">
                                <div className="w-1.5 h-1.5 rounded-full mr-2 bg-white mt-1 flex-shrink-0"></div>
                                <span className="text-white/85">{feature}</span>
                              </div>
                            ))}
                          </div>
                          <div className="flex items-center justify-center mt-4 text-xs text-white/70 md:hidden flex-shrink-0">
                            <span>Tap to go back</span>
                            <ChevronDown className="w-4 h-4 ml-1 rotate-180" />
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Social & Milestones */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-4xl mb-4 text-center">Social & Milestones</h2>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Personalized celebrations that honor your story
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {socialServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="group perspective-1000">
                  <div 
                    className={`relative w-full h-[28rem] md:h-80 transition-transform duration-500 transform-style-3d ${flippedCards.social === index ? 'rotate-y-180' : ''} md:group-hover:rotate-y-180 cursor-pointer`}
                    onClick={() => toggleFlip('social', index)}
                  >
                    {/* Front of Card */}
                    <div className="absolute inset-0 backface-hidden">
                      <Card className="h-full hover:shadow-lg transition-shadow">
                        <CardHeader className="pb-2">
                          <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-gradient-to-br from-purple-500 to-pink-500">
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <CardTitle className="text-xl">{service.title}</CardTitle>
                          <p className="text-sm text-purple-600 font-medium">{service.subheadline}</p>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 text-sm">{service.frontDescription}</p>
                          <div className="flex items-center justify-center mt-4 text-xs text-gray-400 md:hidden">
                            <span>Tap to see more</span>
                            <ChevronDown className="w-4 h-4 ml-1" />
                          </div>
                          <p className="text-xs text-gray-400 mt-4 hidden md:block">Hover to see our strategic execution</p>
                        </CardContent>
                      </Card>
                    </div>
                    {/* Back of Card */}
                    <div className="absolute inset-0 backface-hidden rotate-y-180">
                      <Card className="h-full bg-gradient-to-br from-purple-600 to-pink-500 text-white cursor-pointer overflow-y-auto">
                        <CardHeader className="pb-2 flex-shrink-0">
                          <CardTitle className="text-xl">{service.backTitle}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          <p className="text-white/90 text-xs md:text-sm">{service.backDescription}</p>
                          <div className="space-y-1 text-xs">
                            {service.backFeatures.map((feature, idx) => (
                              <div key={idx} className="flex items-start">
                                <div className="w-1.5 h-1.5 rounded-full mr-2 bg-white mt-1 flex-shrink-0"></div>
                                <span className="text-white/85">{feature}</span>
                              </div>
                            ))}
                          </div>
                          <div className="flex items-center justify-center mt-4 text-xs text-white/70 md:hidden flex-shrink-0">
                            <span>Tap to go back</span>
                            <ChevronDown className="w-4 h-4 ml-1 rotate-180" />
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Creative & Production */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-4xl mb-4 text-center">The Foundation of Every Event</h2>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Our Creative & Production Excellence
          </p>
          
          {/* Creative Design */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-purple-600">Creative Design</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {creativeServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-gradient-to-br from-purple-500 to-pink-500">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
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

          {/* Strategic Production */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-purple-600">Strategic Production</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {productionServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-gradient-to-br from-purple-500 to-pink-500">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
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
