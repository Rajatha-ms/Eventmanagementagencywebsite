import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export default function GetInTouch() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! We'll get back to you soon.");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      detail: "info@scriptedrituals.com",
      link: "mailto:info@scriptedrituals.com",
    },
    {
      icon: Phone,
      title: "Phone",
      detail: "(555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: MapPin,
      title: "Address",
      detail: "123 Event Street, City, State 12345",
      link: null,
    },
    {
      icon: Clock,
      title: "Business Hours",
      detail: "Mon-Fri: 9AM-6PM, Sat: 10AM-4PM",
      link: null,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="text-white py-16 lg:py-24 bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl lg:text-5xl mb-4">Get in Touch</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Let's discuss your event and bring your vision to life
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl mb-6">Send Us a Message</h2>
              <Card>
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(555) 123-4567"
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="eventType">Event Type *</Label>
                      <select
                        id="eventType"
                        name="eventType"
                        required
                        value={formData.eventType}
                        onChange={handleChange}
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                      >
                        <option value="">Select an event type</option>
                        <option value="corporate">Corporate Event</option>
                        <option value="wedding">Wedding</option>
                        <option value="social">Social Event</option>
                        <option value="educational">Educational Event</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your event..."
                        rows={5}
                        className="mt-1"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white border-0"
                      size="lg"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl mb-6">Contact Information</h2>
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  const content = (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardContent className="pt-6">
                        <div className="flex items-start">
                          <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 bg-gradient-to-br from-purple-400 to-pink-400">
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1">{info.title}</h3>
                            <p className="text-gray-600">{info.detail}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );

                  if (info.link) {
                    return (
                      <a key={index} href={info.link}>
                        {content}
                      </a>
                    );
                  }
                  return content;
                })}
              </div>

              <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
                <CardContent className="pt-6">
                  <h3 className="text-xl mb-3">Why Choose Scripted Rituals?</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full mr-2 mt-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                      10+ years of event management experience
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full mr-2 mt-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                      Personalized service tailored to your needs
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full mr-2 mt-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                      Extensive network of trusted vendors
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full mr-2 mt-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                      Dedicated support from planning to execution
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
