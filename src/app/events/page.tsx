"use client";

import { useState } from "react";
import EventCard from "@/components/EventCard";
import { getAllEvents, cities } from "@/lib/data";


export default function EventsPage() {
  const allEvents = getAllEvents();
  const [timeFilter, setTimeFilter] = useState<"all" | "today" | "month">(
    "all"
  );

  const filteredEvents = allEvents.filter((event) => {
    if (timeFilter === "all") return true;
    const eventDate = new Date(event.date);
    const today = new Date();

    if (timeFilter === "today") {
      return eventDate.toDateString() === today.toDateString();
    }

    if (timeFilter === "month") {
      return eventDate.getMonth() === today.getMonth();
    }

    return true;
  });

  return (
    <div className="min-h-screen bg-[#F8F8F9] font-poppins">
      <main className="p-2">
        <div className="max-w-[1400px] mx-auto">
          {/* Header Section */}
          <section className="my-6">
            {/* Cities Section */}
            <section className="mb-20">
              <h2 className="text-2xl font-medium text-black mb-8">
                Explore Events by City
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {cities.map((city) => (
                  <div
                    key={city.code}
                    className="bg-white p-6 rounded-xl text-center hover:shadow-md transition-all cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-black rounded-full mx-auto mb-3 flex items-center justify-center">
                      <span className="text-white font-medium">
                        {city.code}
                      </span>
                    </div>
                    <h3 className="text-black font-medium mb-1">{city.name}</h3>
                    <p className="text-black/60 text-sm">
                      {city.eventCount} Events
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Time Filters */}
            <div className="flex gap-4">
              <button
                onClick={() => setTimeFilter("all")}
                className={`px-6 py-2 rounded-full ${
                  timeFilter === "all"
                    ? "bg-black text-white"
                    : "bg-white text-black hover:bg-black hover:text-white"
                } transition-all`}
              >
                All Events
              </button>
              <button
                onClick={() => setTimeFilter("today")}
                className={`px-6 py-2 rounded-full ${
                  timeFilter === "today"
                    ? "bg-[#9B87FE] text-white"
                    : "bg-white text-black hover:bg-[#9B87FE] hover:text-white"
                } transition-all`}
              >
                Today
              </button>
              <button
                onClick={() => setTimeFilter("month")}
                className={`px-6 py-2 rounded-full ${
                  timeFilter === "month"
                    ? "bg-[#9B87FE] text-white"
                    : "bg-white text-black hover:bg-[#9B87FE] hover:text-white"
                } transition-all`}
              >
                This Month
              </button>
            </div>
          </section>

          {/* Events Grid */}
          <section className="mb-20">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event) => (
                <EventCard
                  key={event.id}
                  id={event.id}
                  title={event.title}
                  date={`${event.date} ${event.time}`}
                  location={event.location}
                  image={event.image}
                />
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-20">
            <div className="bg-black rounded-[2.5rem] p-16 text-center">
              <h2 className="text-white text-4xl font-normal mb-6">
                Want to organize an event?
              </h2>
              <p className="text-white/90 max-w-xl mx-auto mb-8">
                Organize and manage your events with our easy-to-use platform.
                Reach more attendees and grow your community.
              </p>
              <button className="bg-white text-black px-8 py-4 rounded-full hover:bg-opacity-90 transition-colors font-medium">
                Start Organizing →
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
