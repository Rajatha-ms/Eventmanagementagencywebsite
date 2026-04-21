import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Calendar, MapPin, Users } from "lucide-react";

export default function UpcomingEvents() {
  const events = [
    {
      id: 1,
      title: "Tech Innovation Summit 2026",
      date: "May 15, 2026",
      location: "San Francisco Convention Center",
      attendees: "500+",
      category: "Corporate",
      status: "Open",
      description: "Annual tech summit bringing together industry leaders and innovators",
    },
    {
      id: 2,
      title: "Summer Gala Fundraiser",
      date: "June 20, 2026",
      location: "Grand Ballroom, Downtown",
      attendees: "300",
      category: "Fundraiser",
      status: "Limited",
      description: "Elegant evening supporting local community initiatives",
    },
    {
      id: 3,
      title: "Product Launch Extravaganza",
      date: "July 8, 2026",
      location: "Innovation Hub",
      attendees: "200",
      category: "Corporate",
      status: "Open",
      description: "Exclusive product reveal for our premium partners",
    },
    {
      id: 4,
      title: "Autumn Wedding Showcase",
      date: "September 12, 2026",
      location: "Riverside Gardens",
      attendees: "150",
      category: "Wedding",
      status: "Open",
      description: "Discover the latest trends in wedding planning and design",
    },
    {
      id: 5,
      title: "Holiday Corporate Party",
      date: "December 15, 2026",
      location: "Skyline Rooftop Venue",
      attendees: "400+",
      category: "Corporate",
      status: "Planning",
      description: "Celebrate the season with an unforgettable company celebration",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open":
        return "bg-green-100 text-green-800";
      case "Limited":
        return "bg-yellow-100 text-yellow-800";
      case "Planning":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="text-white py-16 lg:py-24 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl lg:text-5xl mb-4">Upcoming Events</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Discover our curated selection of upcoming events, expertly crafted to create
            lasting memories
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {events.map((event) => (
              <Card key={event.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="outline" className="mb-2">
                      {event.category}
                    </Badge>
                    <Badge className={getStatusColor(event.status)}>{event.status}</Badge>
                  </div>
                  <CardTitle className="text-2xl">{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2 text-purple-600" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2 text-pink-500" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-2 text-orange-500" />
                      {event.attendees} attendees
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white border-0">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
